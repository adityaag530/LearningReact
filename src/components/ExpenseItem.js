// component can be function or class
// special func at what it returns
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  // const expenseDate = new Date(2023, 5, 28);
  // const expenseTitle = "Super Nova Car Insurance";
  // const expenseAmount =  23423.234;
  

  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
//every function will get one paramert which contain all parameters called props or whatever you name it.
