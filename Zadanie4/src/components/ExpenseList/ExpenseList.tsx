import { useRecoilValue } from "recoil";
import { Grid, List, Typography } from "@mui/material";
import Expense from "../Expense/Expense";
import { IExpenseList } from "../../interfaces/interfaces";
import { filteredExpenses } from "../../selectors/selectors";
import { v4 } from "uuid";

function ExpenseList(props: IExpenseList) {

   const list = useRecoilValue(filteredExpenses);

   return (
         <Grid container direction="column" justifyContent="center" alignItems="center">
         <List style={{width: "15%"}}>
              {
                  list.map((expense) => (
                     <Expense key={v4()} name={expense.name} cost={expense.cost} id={expense.id} button={props.button}/>
                  )
               )
              }
            </List>
         </Grid>
   )
}

export default ExpenseList;
