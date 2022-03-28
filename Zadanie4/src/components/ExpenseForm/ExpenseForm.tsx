import { useRecoilState } from "recoil";
import { v4 } from "uuid";
import { expenseList } from "../../atoms/atoms";
import "./ExpenseForm.css";
import { useForm } from "react-hook-form";
import { IForm } from "../../interfaces/interfaces";

export function HookForm(props: IForm) {
   const [list, setList] = useRecoilState(expenseList);
   const {
    register,
    handleSubmit,
    formState: { errors }
   } = useForm();
   
  const onSubmit = (data: any, e: any) => {
     e.target.reset(); // reset after form submit
     if (data.name === '' || data.cost === 0)
         return;
     setList([...list, { "name": data.name, "cost": parseInt(data.cost), "id": v4() }]);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>{props.mode === "expense" ? "Name of the expense: " : "Name of the invoice:"}</label>
      <input type="text" {...register("name", { required: "Name is required"})} />
        {errors.name && <p>Name is required</p>}

      <label>Value: </label>
       {
         props.mode === "expense" ?
           <input type="number" {...register("cost", { required: "Value is required", valueAsNumber: true, max: { value: -1, message: "Expense has to be a negative value" } })} />
           :
           <input type="number" {...register("cost", { required: "Value is required", valueAsNumber: true, min: { value: 0, message: "Invoice has to be a nonnegative value" } })} />
      }
     {errors.cost && <p>{errors.cost.message}</p>}
      <input type="submit" />
    </form>
  );
}