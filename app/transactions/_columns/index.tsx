"use client"

import { ColumnDef } from "@tanstack/react-table";
import { Transaction, TransactionCategory, TransactionPaymentMethod } from "@/app/generated/prisma";
import TransactionTypeBadge from "../_components/type-badge";
import { Button } from "@/app/_components/ui/button";
import { EditIcon, TrashIcon } from "lucide-react";

export const TRANSACTION_CATEGORY_LABELS = {
    [TransactionCategory.HOUSING]: "Moradia",
    [TransactionCategory.TRANSPORTATION]: "Transporte",
    [TransactionCategory.FOOD]: "Alimentação",
    [TransactionCategory.ENTERTAINMENT]: "Lazer",
    [TransactionCategory.HEALTH]: "Saúde",
    [TransactionCategory.UTILITY]: "Utilidades",
    [TransactionCategory.SALARY]: "Salário",
    [TransactionCategory.EDUCATION]: "Educação",
    [TransactionCategory.OTHER]: "Outros"
}

export const TRANSACTION_PAYMENT_METHOD_LABELS = {
    [TransactionPaymentMethod.CREDIT_CARD]: "Cartão de Crédito",
    [TransactionPaymentMethod.DEBIT_CARD]: "Cartão de Débito",
    [TransactionPaymentMethod.CASH]: "Dinheiro",
    [TransactionPaymentMethod.BANK_TRANSFER]: "Transferência Bancária",
    [TransactionPaymentMethod.BANK_SLIP]: "Boleto Bancário",
    [TransactionPaymentMethod.PIX]: "PIX",
    [TransactionPaymentMethod.OTHER]: "Outros"
}

export const transactionColumns: ColumnDef<Transaction>[] = [
    {
        accessorKey: "name",
        header: "Nome",
    },
    {
        accessorKey: "type",
        header: "Tipo",
        cell: ({row: {original: transaction}}) => <TransactionTypeBadge transaction={transaction}/>      
    },
    {
        accessorKey: "category",
        header: "Categoria",
        cell: ({row: {original: transaction}}) => TRANSACTION_CATEGORY_LABELS[transaction.category]
    },
    {
        accessorKey: "paymentMethod",
        header: "Método",
        cell: ({row: {original: transaction}}) => TRANSACTION_PAYMENT_METHOD_LABELS[transaction.paymentMethod]
    },
    {
        accessorKey: "date",
        header: "Data",
        cell: ({row: {original: transaction}}) => new Date(transaction.date).toLocaleDateString("pt-BR", {
            day: "2-digit",
            month: "long",
            year: "numeric"
        })
    },
    {
        accessorKey: "amount",
        header: "Valor",
        cell: ({row: {original: transaction}}) => {
        // let valor = transaction.amount.toString()
        // valor = valor.split("").reverse().map((val,index) => index > 0 && index % 3 === 0 ? val + '.' : val).reverse().join("")
        // return `R$ ${valor},00`;
        // }
           return new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(Number(transaction.amount))
        }
    },
    {
        accessorKey: "actions",
        header: "Ações",
        cell: () => <div className="space-x-1">
            <Button variant="ghost" size="icon" className="text-muted-foreground"><TrashIcon /></Button>
            <Button variant="ghost" size="icon" className="text-muted-foreground"><EditIcon /></Button>
        </div>
    }
];