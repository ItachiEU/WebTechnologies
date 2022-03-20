import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { expenseList } from "../atoms/atoms";
import expenseListBalance from "../selectors/selectors";

function ExpenseSummary() {
   const balance = useRecoilValue(expenseListBalance);

   return (
      <p>Current balance: {balance}</p>
   )
}

export default ExpenseSummary;