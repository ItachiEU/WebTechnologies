import { atom } from "recoil";
import { v4 } from "uuid";

export const expenseList = atom({
  key: 'expenseList',
   default: [{"name": "Mleko","cost": -10, "id": v4()}, {"name": "Kawa","cost": -5, "id": v4()}],
});