import { useRecoilValue } from "recoil";
import expenseListBalance from "../selectors/selectors";

function ExpenseSummary() {
   const balance = useRecoilValue(expenseListBalance);

   return (
      <p>Current balance: {balance}</p>
   )
}

export default ExpenseSummary;