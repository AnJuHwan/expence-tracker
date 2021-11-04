import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Car',
      amount: 294.67,
      date: new Date(2021, 8, 21),
    },
    {
      id: 'e2',
      title: 'Toilet Paper',
      amount: 290.67,
      date: new Date(2021, 7, 21),
    },
    {
      id: 'e3',
      title: 'Apple',
      amount: 214.67,
      date: new Date(2021, 6, 21),
    },
    {
      id: 'e4',
      title: 'New Desk',
      amount: 224.67,
      date: new Date(2021, 5, 21),
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log(expense);
  };

  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </>
  );
}

export default App;
