import { useRecoilValue } from "recoil";
import Expense from "../Expense/Expense";
import { expenseList } from "../../atoms/atoms";
import classes from "./ExpenseList.module.css";

function ExpenseList() {   

   const list = useRecoilValue(expenseList);

   return (
      <div className={classes.container}>
         <ul className={classes.ul}>
            {
               list.map((expense) => (<Expense name={expense.name} cost={expense.cost} id={expense.id}/>))
            }
         </ul>
      </div>
   )
}

export default ExpenseList;