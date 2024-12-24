import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { itemTable } from "@/data/items/items";

import {
  Column,
  ColumnFiltersState,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import React from "react";
import { Item } from "@/types/items";
import {
  formatCapitalCase,
  formatLargeQuantity,
  renderIcon,
} from "@/utils/formattingUtilities";
import { useCharacterEngineContext } from "@/engines/characterEngineContext";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Input } from "@/components/ui/input";
import TableEntryDialog from "@/features/town/inventoryMenu/components/tableEntryDialog/tableEntryDialog";
import { ItemId, ItemType } from "@/data/items/enums";

type TableData = {
  quantity: number;
} & Item;

export default function InventoryTable() {
  const { character } = useCharacterEngineContext();
  const [open, setOpen] = React.useState(false);
  const [selectedItemId, setSelectedItemId] = React.useState(null);
  const data: TableData[] = React.useMemo(() => {
    return Object.entries(character.inventory)
      .filter(
        ([itemId, _]: [ItemId, number]) =>
          itemTable[itemId].type !== ItemType.HIDDEN,
      )
      .map(([itemId, quantity]: [ItemId, number]) => {
        return { ...itemTable[itemId], quantity: quantity };
      });
  }, [character]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    [],
  );

  const columnHelper = createColumnHelper<TableData>();

  const columns = [
    columnHelper.display({
      id: "icon",
      cell: (props) =>
        renderIcon(props.row.original.icon, 32, props.row.original.iconStyle),
      meta: {
        width: 32,
      },
    }),
    columnHelper.accessor("name", {
      header: "Item",
      cell: (props) => props.getValue(),
      meta: {
        width: 100,
      },
    }),
    columnHelper.accessor("quantity", {
      header: "Quantity",
      cell: (props) => formatLargeQuantity(props.getValue()),
      meta: {
        width: 30,
        filterVariant: "range",
      },
    }),
    columnHelper.accessor("value", {
      header: "Value",
      cell: (props) => formatLargeQuantity(props.getValue()),
      meta: {
        width: 30,
        filterVariant: "range",
      },
    }),
    columnHelper.accessor("type", {
      header: "Type",
      cell: (props) => formatCapitalCase(props.getValue()),
      meta: {
        width: 20,
        filterVariant: "select",
      },
    }),
  ];

  const table = useReactTable({
    data,
    columns,
    filterFns: {},
    state: {
      columnFilters,
    },
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <Card className="flex h-full grow">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id} colSpan={header.colSpan}>
                  {header.isPlaceholder ? null : (
                    <div
                      className={
                        "flex h-full flex-row items-center gap-2 text-xs " +
                        (header.column.columnDef.meta?.size !== undefined
                          ? `w-[${header.column.columnDef.meta.size}px] `
                          : "")
                      }
                    >
                      <div
                        {...{
                          className: header.column.getCanSort()
                            ? "flex flex-row gap-1 cursor-pointer items-center select-none"
                            : "",
                          onClick: header.column.getToggleSortingHandler(),
                        }}
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                        {{
                          asc: <ChevronUp size={16} />,
                          desc: <ChevronDown size={16} />,
                        }[header.column.getIsSorted() as string] ?? null}
                      </div>
                      {header.column.getCanFilter() ? (
                        <div>
                          <Filter column={header.column} />
                        </div>
                      ) : null}
                    </div>
                  )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.map((row) => (
            <TableRow
              key={row.id}
              onClick={() => {
                setSelectedItemId(row.original.id);
                setOpen(true);
              }}
            >
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id} className="py-2 text-xs">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TableEntryDialog
        open={open}
        setOpen={setOpen}
        itemId={selectedItemId}
      ></TableEntryDialog>
    </Card>
  );
}

function Filter({ column }: { column: Column<any, unknown> }) {
  const columnFilterValue = column.getFilterValue();
  const { filterVariant } = column.columnDef.meta ?? {};

  if (filterVariant === "range") {
    return <div></div>;
  } else if (filterVariant === "select") {
    return (
      <Select
        onValueChange={(value) => column.setFilterValue(value)}
        defaultValue={columnFilterValue?.toString()}
      >
        <SelectTrigger className="h-6 w-32 text-xs font-normal text-muted-foreground">
          <SelectValue></SelectValue>
        </SelectTrigger>
        <SelectContent>
          <SelectItem className="text-xs font-normal text-muted-foreground">
            All
          </SelectItem>
          {Object.entries(ItemType)
            .filter(([typeId, type]) => type !== ItemType.HIDDEN)
            .map(([typeId, type]) => (
              <SelectItem
                key={typeId}
                value={type}
                className="text-xs font-normal text-muted-foreground"
              >
                {formatCapitalCase(type)}
              </SelectItem>
            ))}
        </SelectContent>
      </Select>
    );
  } else {
    return (
      <DebouncedInput
        className="w-36 rounded border shadow"
        onChange={(value) => column.setFilterValue(value)}
        placeholder={`Search`}
        type="text"
        value={(columnFilterValue ?? "") as string}
      />
    );
  }
}

// A typical debounced input react component
function DebouncedInput({
  value: initialValue,
  onChange,
  debounce = 200,
  ...props
}: {
  value: string | number;
  onChange: (value: string | number) => void;
  debounce?: number;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange">) {
  const [value, setValue] = React.useState(initialValue);

  React.useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value);
    }, debounce);

    return () => clearTimeout(timeout);
  }, [value]);

  return (
    <Input
      {...props}
      className="h-6 text-xs font-normal"
      value={value}
      onInput={(e) => setValue(e.target.value)}
    ></Input>
  );
}
