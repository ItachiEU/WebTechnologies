import { useRecoilState } from "recoil";
import Expense from "./Expense";
import { expenseList } from "../atoms/atoms";

function ExpenseList() {

   const [list, setList] = useRecoilState(expenseList);

   return (
      <div>
         <ul>
            {
               list.map((expense) => (<Expense name={expense.name} cost={expense.cost} id={expense.id}/>))
            }
         </ul>
      </div>
   )
}

export default ExpenseList;