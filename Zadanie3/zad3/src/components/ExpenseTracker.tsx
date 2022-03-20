import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";
import ExpenseSummary from "./ExpenseSummary";

function ExpenseTracker() {
   return (
      <div>
         <ExpenseForm />
         <ExpenseList />
         <ExpenseSummary />
      </div>
   )
}
export default ExpenseTracker;