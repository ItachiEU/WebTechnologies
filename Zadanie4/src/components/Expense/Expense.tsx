import { IconButton, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { useRecoilState } from "recoil";
import { expenseList } from "../../atoms/atoms";
import { IExpense } from "../../interfaces/interfaces";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';

function Expense(props: IExpense) {

   const [list, setList] = useRecoilState(expenseList);

   const onClick = () => {
      setList(list.filter((el) => (el.id !== props.id)));
   }

   return (
      <ListItem style={{backgroundColor: props.cost < 0 ? "red":"green"}}>
         <ListItemIcon>
            {
               props.cost < 0 ? <RemoveIcon /> : <AddIcon />
            }
         </ListItemIcon>
         <ListItemText
            style={{ display:"flex", justifyContent: "center"}}
            primary={<Typography variant="h5" sx={{ mt: 1, mb: 1}} style={{ color: "black" }}>{Math.abs(props.cost)} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {props.name}</Typography>}
         />
         {
            props.button ? <IconButton onClick={onClick} aria-label="delete" size="small">
                                <DeleteIcon fontSize="small" />
                           </IconButton>
               : null
         }
      </ListItem>
   )
}

export default Expense;