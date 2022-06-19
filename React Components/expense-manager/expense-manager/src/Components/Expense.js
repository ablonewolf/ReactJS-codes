import Card from "./Card";
import ExpenseDate from "./ExpenseDate";
import { useState } from "react";

export default function Expenses(props) {
  const [title, setTitle] = useState(props.title);
  const clickHandler = () => {
    setTitle("Updated");
    console.log(title);
  };

  return (
    <Card>
      <hr />
      <h2>{title}</h2>
      <ExpenseDate date={props.date} />
      <div>
        <p>{props.description}</p>
        <b>{props.amount}</b>
      </div>
      <button onClick={clickHandler}>Update</button>
    </Card>
  );
}
