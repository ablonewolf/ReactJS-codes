import DisplayExpenses from "./Components/DisplayExpenses";
import NewExpense from "./Components/NewExpense/NewExpense";

function App() {
  const expenses = [
    {
      date: new Date(2022, 6, 12),
      title: "Food Expense",
      description: "bought food through foodpanda.",
      amount: 250,
    },
    {
      date: new Date(2022, 5, 10),
      title: "Transport",
      description: "Went to fetch the bank atm card",
      amount: 150,
    },
    {
      date: new Date(2022, 6, 11),
      title: "Entertainment",
      description: "Watched a movie on star cineplex",
      amount: 800,
    },
    {
      date: new Date(2022, 5, 13),
      title: "Miscellaneous",
      description: "Did some shopping at new market",
      amount: 2000,
    },
  ];
  return (
    <div align="center">
      <NewExpense />
      <DisplayExpenses expenses={expenses} />
    </div>
  );
}

export default App;
