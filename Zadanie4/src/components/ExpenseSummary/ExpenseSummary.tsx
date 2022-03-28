import { Grid, Typography } from "@mui/material";
import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { expenseListFilter } from "../../atoms/atoms";
import { expenseListBalance } from "../../selectors/selectors";
import ExpenseList from "../ExpenseList/ExpenseList";

function ExpenseSummary() {
   const balance = useRecoilValue(expenseListBalance);

   const [filter, setFilter] = useRecoilState(expenseListFilter);
   
   useEffect(() => {
      setFilter('all');
   });

   return (
      <Grid container direction="column" justifyContent="center" alignItems="center">
         <ExpenseList button={false} mode="all"/>
         <Typography sx={{ mt: 4, mb: 2 }} variant="h4" component="div" color={balance < 0 ? "red" : "green"}>Current balance: {balance}</Typography>
      </Grid>
   )
}

export default ExpenseSummary;