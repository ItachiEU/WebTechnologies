import { useRecoilState } from "recoil";
import { expenseList } from "../atoms/atoms";
import { IExpense } from "../interfaces/interfaces";

function Expense(props: IExpense) {

   const [list, setList] = useRecoilState(expenseList);

   const onClick = () => {
      setList(list.filter((el) => (el.id !== props.id)));
   }

   return (
      <div>
         <p>{props.name} {props.cost  > 0 ? "+" + props.cost:props.cost}</p> <button onClick={onClick}>Remove</button>
      </div>
   )
}

export default Expense;