import { ArrowDownUpIcon } from "lucide-react";
import { Button } from "./ui/button";
import { DialogTrigger } from "./ui/dialog";

const AddTransactionButton = () => {
    return (
        <DialogTrigger>
            <Button className="rounded-full font-bold">Adicionar Transação<ArrowDownUpIcon /></Button>
        </DialogTrigger>
    );
}
 
export default AddTransactionButton;