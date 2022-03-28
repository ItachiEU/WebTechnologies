export interface IExpense {
   name: string,
   cost: number,
   id: string
   button: boolean
}

export interface IExpenseList {
   button: boolean,
   mode: string
}

export interface IForm {
   mode: string
}