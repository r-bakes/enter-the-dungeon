import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { renderIcon } from "@/data/gameObject";
import { itemTable } from "@/data/items/items";
import { Item } from "@/data/items/types";
import { useCharacterEngineContext } from "@/engines/characterEngineContext";
import {
  formatCapitalCase,
  formatQuantity,
} from "@/engines/utils/formattingUtilities";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import React from "react";

type TableData = {
  quantity: number;
} & Item;

export default function InventoryTable({}: {}) {
  const { character } = useCharacterEngineContext();
  const [data, _setData] = React.useState<TableData[]>(() => [
    ...Object.entries(character.inventory).map(([itemId, quantity]) => {
      return { ...itemTable[itemId], quantity: quantity };
    }),
  ]);

  const columnHelper = createColumnHelper<TableData>();

  const columns = [
    columnHelper.display({
      id: "icon",
      cell: (props) => renderIcon(props.row.icon, 16, props.row.iconStyle),
    }),
    columnHelper.accessor("name", {
      header: "Item",
      cell: (props) => props.getValue(),
    }),
    columnHelper.accessor("quantity", {
      header: "Quantity",
      cell: (props) => formatQuantity(props.row.quantity),
    }),
    columnHelper.accessor("type", {
      header: "Type",
      cell: (props) => formatCapitalCase(props.getValue()),
    }),
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="flex h-full">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.map((row) => (
            <TableRow key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
