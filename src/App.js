import Expenses from './components/Expenses'

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
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
// app -> root component
// Analogy->  create component tree, at the top is <App />
//props - > makes function /component reusable and pass data from one componenet to another
