import { atom } from "recoil";
import { v4 } from "uuid";

export const expenseList = atom({
  key: 'expenseList',
   default: [{"name": "Mleko","cost": -10, "id": v4()}, {"name": "Przelew - pizza","cost": 30, "id": v4()}],
});

export const expenseListFilter = atom({
  key: 'expenseListFilter',
  default: 'all'
});