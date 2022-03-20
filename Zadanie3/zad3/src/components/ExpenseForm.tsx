import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { v4 } from "uuid";
import { expenseList } from "../atoms/atoms";

function ExpenseForm() {

   const [list, setList] = useRecoilState(expenseList);
   const [input, setInput] = useState({"name":'', "cost": 0});

   const onChangeName = (e: React.ChangeEvent<HTMLInputElement>): void => {
      setInput({"name": e.target.value, "cost": input.cost});
   }

   const onChangeCost = (e: React.ChangeEvent<HTMLInputElement>): void => {
      setInput({"name":input.name , "cost": parseInt(e.target.value)});
   }

   const onClick = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      e.currentTarget.reset();
      if (input.name === '' || input.cost === 0)
         return;
      
      setList([...list, { "name": input.name, "cost": input.cost, "id": v4() }]);
   }

   return (
      <form onSubmit={onClick}> 
         <label htmlFor="nameForm">Name:</label>
         <input type="text" id="nameForm" onChange={onChangeName} required />
         <label htmlFor="costForm">Amount: </label>
         <input type="number" id="costForm" onChange={onChangeCost} required />
         <input type="submit" value="Add"/>
      </form>
   );
}

export default ExpenseForm;