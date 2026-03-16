import { Button } from "../_components/ui/button";
import { db } from "../_lib/prisma";
import {  ArrowDownUpIcon,  } from "lucide-react";

const TransactionsPage = async () => {
  const transactions = await db.transaction.findMany({});
  return (
    <div className="space-y-6 p-6">
      {/*TITULO E BOTÃO*/}
      <div className="flex w-full justify-between items-center">
        <h1 className="text-2xl font-bold">Transações</h1>
        <Button className="rounded-full">
          Adicionar Transação
          <ArrowDownUpIcon />
        </Button>
      </div>
    </div>
  );
};

export default TransactionsPage;