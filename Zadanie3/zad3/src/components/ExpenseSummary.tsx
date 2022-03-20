import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { expenseList } from "../atoms/atoms";

function ExpenseSummary() {
   
   const [list, setList] = useRecoilState(expenseList);
   const [balance, setBalance] = useState(0);

   useEffect(():void => {
      let b = 0;
      for (let el of list)
         b += el.cost;
      
      setBalance(b);
   }, [list]);

   return (
      <p>Current balance: {balance}</p>
   )
}

export default ExpenseSummary;