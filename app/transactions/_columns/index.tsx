"use client"

import { ColumnDef } from "@tanstack/react-table";
import { Transaction, TransactionType } from "@/app/generated/prisma";
import { Badge } from "@/app/_components/ui/badge";
import { CircleIcon } from "lucide-react";

export const transactionColumns: ColumnDef<Transaction>[] = [
    {
        accessorKey: "name",
        header: "Nome",
    },
    {
        accessorKey: "type",
        header: "Tipo",
        cell: ({row: {original: transaction}}) => {
          if(transaction.type === TransactionType.DEPOSIT) {
            return <Badge className="bg-muted font-bold text-primary hover:bg-muted"><CircleIcon className="mr-2 fill-primary" size={10} />Deposito</Badge>
          }
          if(transaction.type === TransactionType.EXPENSE) {
            return <Badge className="bg-muted font-bold text-destructive hover:bg-muted"><CircleIcon className="mr-2 fill-destructive" size={10} />Despesa</Badge>;
          }
          return <Badge className="bg-muted font-bold text-primary hover:bg-muted"><CircleIcon className="mr-2 fill-primary" size={10} />Investimento</Badge>;
        }
    },
    {
        accessorKey: "category",
        header: "Categoria",
    },
    {
        accessorKey: "paymentMethod",
        header: "Método",
    },
    {
        accessorKey: "date",
        header: "Data",
    },
    {
        accessorKey: "amount",
        header: "Valor",
    },
    {
        accessorKey: "actions",
        header: "Ações",
    }
];