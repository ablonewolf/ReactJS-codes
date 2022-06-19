const ExpenseForm = () => {
  return (
    <form align="center">
      <div>
        <div>
          <label>Title : </label>
          <input type="text" />
        </div>
        <div>
          <label>Date : </label>
          <input type="date" min="2020-01-01" max="2022-12-31" />
        </div>
        <div>
          <label>Amount : </label>
          <input type="number" min="1" step="1" />
        </div>
        <div>
          <label>Description : </label>
          <input type="text" />
        </div>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
