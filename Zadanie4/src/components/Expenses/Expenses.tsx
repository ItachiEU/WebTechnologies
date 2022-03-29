import { Grid, Typography } from "@mui/material";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { expenseListFilter } from "../../atoms/atoms";
import { HookForm }  from "../ExpenseForm/ExpenseForm";
import ExpenseList from "../ExpenseList/ExpenseList";

export default function Expenses() {
   const [filter, setFilter] = useRecoilState(expenseListFilter);
   
   useEffect(() => {
      setFilter('expense');
   });

   return (
      <Grid container direction="column" justifyContent="center" alignItems="center">
         <Typography sx={{ mt: 4, mb: 2 }} variant="h4" component="div" color="blanchedalmond">
            Expenses list
         </Typography>
         <ExpenseList button={true} mode="expense" />
         <Typography sx={{ mt: 4, mb: 2 }} variant="h4" component="div" color="blanchedalmond">
            Add a new expense
         </Typography>
         <HookForm mode="expense"/>
      </Grid>
   )
}