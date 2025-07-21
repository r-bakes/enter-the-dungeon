// @ts-nocheck
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
} from "@/features/common/utils/formattingUtilities";
import { useCharacterEngineContext } from "@/engines/characterEngineContext";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChevronDown, ChevronUp, Backpack } from "lucide-react";
import { Input } from "@/components/ui/input";
import { ItemId, ItemType } from "@/data/items/enums";
import TableEntrySheet from "./tableEntrySheet/tableEntrySheet";

type TableData = {
  quantity: number;
} & Item;

export default function InventoryTable() {
  const { character } = useCharacterEngineContext();
  const [open, setOpen] = React.useState(false);
  const [selectedItemId, setSelectedItemId] = React.useState<ItemId | null>(
    null,
  );
  const data: TableData[] = React.useMemo(() => {
    return Object.entries(character.inventory)
      .filter(
        ([itemId, amount]) =>
          itemTable[itemId as ItemId].type !== ItemType.HIDDEN && amount > 0,
      )
      .map(([itemId, quantity]) => {
        return { ...itemTable[itemId as ItemId], quantity: quantity };
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
    <Card className="flex h-full grow flex-col">
      {/* Mobile: Card-based layout */}
      <div className="flex flex-1 flex-col gap-2 p-4 lg:hidden">
        <div className="flex items-center justify-between pb-2">
          <h3 className="text-sm font-medium">Items ({data.length})</h3>
          <Select
            onValueChange={(value) => 
              table.getColumn("type")?.setFilterValue(value === "All" ? "" : value)
            }
          >
            <SelectTrigger className="w-32 h-8 text-xs">
              <SelectValue placeholder="Filter" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All" className="text-xs">All</SelectItem>
              {Object.entries(ItemType)
                .filter(([_, type]) => type !== ItemType.HIDDEN)
                .map(([_, type]) => (
                  <SelectItem key={type} value={type} className="text-xs">
                    {formatCapitalCase(type)}
                  </SelectItem>
                ))}
            </SelectContent>
          </Select>
        </div>
        
        <div className="flex-1 overflow-y-auto overflow-x-hidden space-y-2">
          {table.getRowModel().rows.map((row) => (
            <Card 
              key={row.id}
              className="p-3 cursor-pointer hover:bg-accent transition-colors w-full max-w-full"
              onClick={() => {
                setSelectedItemId(row.original.id);
                setOpen(true);
              }}
            >
              <div className="flex items-center gap-3 w-full max-w-full overflow-hidden">
                <div className="shrink-0">
                  {renderIcon(row.original.icon, 32, row.original.iconStyle)}
                </div>
                <div className="flex-1 min-w-0 max-w-full overflow-hidden">
                  <div className="flex items-center justify-between gap-2 w-full">
                    <h4 className="text-sm font-medium truncate flex-1 min-w-0">{row.original.name}</h4>
                    <span className="text-xs text-muted-foreground whitespace-nowrap">
                      {formatCapitalCase(row.original.type)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-2 mt-1 w-full">
                    <div className="flex items-center gap-1 whitespace-nowrap">
                      <span className="text-sm text-green-600">
                        {formatLargeQuantity(row.original.quantity)}
                      </span>
                      <Backpack size={12} strokeWidth={1} className="text-muted-foreground" />
                    </div>
                    <span className="text-xs text-muted-foreground truncate min-w-0">
                      {formatLargeQuantity(row.original.value)} gold ea.
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
          
          {table.getRowModel().rows.length === 0 && (
            <div className="flex items-center justify-center py-8">
              <p className="text-sm text-muted-foreground">No items found</p>
            </div>
          )}
        </div>
      </div>

      {/* Desktop: Table layout */}
      <div className="hidden lg:flex lg:h-full">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id} colSpan={header.colSpan}>
                    {header.isPlaceholder ? null : (
                      <div className="flex h-full flex-row items-center gap-2 text-xs">
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
      </div>
      
      <TableEntrySheet
        open={open}
        setOpen={setOpen}
        itemId={selectedItemId}
      />
    </Card>
  );
}

function Filter({ column }: { column: Column<any, unknown> }) {
  const columnFilterValue = column.getFilterValue();
  const { filterVariant } = column.columnDef.meta ?? {}; //@ts-ignore

  if (filterVariant === "range") {
    return <div></div>;
  } else if (filterVariant === "select") {
    return (
      <Select
        onValueChange={(value) => column.setFilterValue(value)}
        defaultValue={columnFilterValue?.toString()}
      >
        <SelectTrigger className="text-muted-foreground h-6 w-32 text-xs font-normal">
          <SelectValue></SelectValue>
        </SelectTrigger>
        <SelectContent>
          <SelectItem className="text-muted-foreground text-xs font-normal">
            All
          </SelectItem>
          {Object.entries(ItemType)
            .filter(([typeId, type]) => type !== ItemType.HIDDEN)
            .map(([typeId, type]) => (
              <SelectItem
                key={typeId}
                value={type}
                className="text-muted-foreground text-xs font-normal"
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
        className="w-36 rounded border shadow-sm"
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
