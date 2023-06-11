import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "car Insurance",
      amount: 3234.2342,
      date: new Date(2023, 6, 23),
    },
    {
      id: "e2",
      title: "car Insurance",
      amount: 3234.2342,
      date: new Date(2023, 6, 23),
    },
    {
      id: "e3",
      title: "car Insurance",
      amount: 3234.2342,
      date: new Date(2023, 6, 23),
    },
    {
      id: "e4",
      title: "car Insurance",
      amount: 3234.2342,
      date: new Date(2023, 6, 23),
    },
  ];
  return (
    <div className="App">
      <h1>Learning React!</h1>
      {/* <p>This is also visible</p> */}

      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </div>
  );
}

export default App;
// app -> root component
// Analogy->  create component tree, at the top is <App />
//props - > makes function /component reusable and pass data from one componenet to another
