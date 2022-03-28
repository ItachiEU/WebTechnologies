import { selector } from "recoil";
import { expenseList, expenseListFilter } from "../atoms/atoms";

export const expenseListBalance = selector({
  key: 'expenseListBalance',
  get: ({get}) => {
    const list = get(expenseList);
     let balance = list.reduce((a, b) => a + b.cost, 0);
     return balance;
  },
});

export const filteredExpenses = selector({
  key: 'filteredExpenses',
  get: ({ get }) => {
    const filter = get(expenseListFilter);
    const list = get(expenseList);

    switch (filter) {
      case 'expense':
        return list.filter((item) => item.cost < 0);
      case 'invoice':
        return list.filter((item) => item.cost >= 0);
      default:
        return list;
    }
  }
});