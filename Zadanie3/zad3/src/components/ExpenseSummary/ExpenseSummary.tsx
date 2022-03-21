import { useRecoilValue } from "recoil";
import expenseListBalance from "../../selectors/selectors";
import classes from "./ExpenseSummary.module.css";

function ExpenseSummary() {
   const balance = useRecoilValue(expenseListBalance);

   return (
      <div className={classes.container}>
         <p>Current balance: {balance}</p>
      </div>
   )
}

export default ExpenseSummary;