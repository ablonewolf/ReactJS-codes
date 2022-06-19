import Card from "./Card";
import Expenses from "./Expense";
export default function DisplayExpenses(props) {
  return (
    <Card>
      <Expenses
        title={props.expenses[0].title}
        date={props.expenses[0].date}
        description={props.expenses[0].description}
        amount={props.expenses[0].amount}
      ></Expenses>
      <Expenses
        title={props.expenses[1].title}
        date={props.expenses[1].date}
        description={props.expenses[1].description}
        amount={props.expenses[1].amount}
      ></Expenses>
      <Expenses
        title={props.expenses[2].title}
        date={props.expenses[2].date}
        description={props.expenses[2].description}
        amount={props.expenses[2].amount}
      ></Expenses>
      <Expenses
        title={props.expenses[3].title}
        date={props.expenses[3].date}
        description={props.expenses[3].description}
        amount={props.expenses[3].amount}
      ></Expenses>
    </Card>
  );
}
