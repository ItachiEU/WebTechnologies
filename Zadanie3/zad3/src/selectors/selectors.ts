import { selector } from "recoil";
import { expenseList } from "../atoms/atoms";

const expenseListBalance = selector({
  key: 'expenseListBalance',
  get: ({get}) => {
    const list = get(expenseList);
     let balance = list.reduce((a, b) => a + b.cost, 0);
     return balance;
  },
});

export default expenseListBalance;