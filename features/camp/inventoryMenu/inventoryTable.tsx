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
  formatQuantity,
  renderIcon,
} from "@/utils/formattingUtilities";
import { ItemType } from "@/data/items/enums";
import { Inventory } from "@/types/character";

type TableData = {
  quantity: number;
} & Item;

export default function InventoryTable({
  inventory,
}: Readonly<{
  inventory: Inventory;
}>) {
  const data: TableData[] = Object.entries(inventory)
    .filter(([itemId, _]) => itemTable[itemId].type != ItemType.HIDDEN)
    .map(([itemId, quantity]) => {
      return { ...itemTable[itemId], quantity: quantity };
    });

  const columnHelper = createColumnHelper<TableData>();

  const columns = [
    columnHelper.display({
      id: "icon",
      cell: (props) =>
        renderIcon(props.row.original.icon, 32, props.row.original.iconStyle),
    }),
    columnHelper.accessor("name", {
      header: "Item",
      cell: (props) => props.getValue(),
    }),
    columnHelper.accessor("quantity", {
      header: "Quantity",
      cell: (props) => formatQuantity(props.getValue()),
    }),
    columnHelper.accessor("type", {
      header: "Type",
      cell: (props) => formatCapitalCase(props.getValue()),
      meta: {
        filterVariant: "select",
      },
    }),
  ];

  const table = useReactTable({
    data,
    columns,
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
    </Card>
  );
}
