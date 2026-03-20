import { Badge } from "@/app/_components/ui/badge";
import { Transaction, TransactionType } from "@/app/generated/prisma";
import { CircleIcon } from "lucide-react";

interface TransactionTypeBadgeProps {
  transaction: Transaction;
}

const TransactionTypeBadge = ({ transaction }: TransactionTypeBadgeProps) => {
  if (transaction.type === TransactionType.DEPOSIT) {
    return (
      <Badge variant="outline">
        <CircleIcon className="mr-2" size={10} />
        Ganho
      </Badge>
    );
  }

  if (transaction.type === TransactionType.EXPENSE) {
    return (
      <Badge variant="outline">
        <CircleIcon className="mr-2" size={10} />
        Gasto
      </Badge>
    );
  }

  return (
    <Badge variant="outline">
      <CircleIcon className="mr-2" size={10} />
      Investimento
    </Badge>
  );
};

export default TransactionTypeBadge;
