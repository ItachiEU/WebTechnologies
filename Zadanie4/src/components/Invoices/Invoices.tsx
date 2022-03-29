import { Grid, Typography } from "@mui/material";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { expenseListFilter } from "../../atoms/atoms";
import { HookForm }  from "../ExpenseForm/ExpenseForm";
import ExpenseList from "../ExpenseList/ExpenseList";

export default function Invoices() {

   const [filter, setFilter] = useRecoilState(expenseListFilter);
   
   useEffect(() => {
      setFilter('invoice');
   });

   return (
      <Grid container direction="column" justifyContent="center" alignItems="center">
         <Typography sx={{ mt: 4, mb: 2 }} variant="h4" component="div" color="blanchedalmond">
            Invoices list
         </Typography>
         <ExpenseList button={true} mode="invoice" />
         <Typography sx={{ mt: 4, mb: 2 }} variant="h4" component="div" color="blanchedalmond">
            Add a new invoice
         </Typography>
         <HookForm mode="invoice"/>
      </Grid>
   )
}