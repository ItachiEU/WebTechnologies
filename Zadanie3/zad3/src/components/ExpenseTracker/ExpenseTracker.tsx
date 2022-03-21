import ExpenseForm from "../ExpenseForm/ExpenseForm";
import ExpenseList from "../ExpenseList/ExpenseList";
import ExpenseSummary from "../ExpenseSummary/ExpenseSummary";
import classes from "./ExpenseTracker.module.css"
   
function ExpenseTracker() {
   return (
      <div className={classes.container}>
         <ExpenseForm />
         <ExpenseList />
         <ExpenseSummary />
      </div>
   )
}
export default ExpenseTracker;