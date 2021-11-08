import { useState } from 'react/cjs/react.development';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Car',
    amount: 294.67,
    date: new Date(2022, 8, 21),
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
    date: new Date(2020, 5, 21),
  },
];
function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    // setExpenses([expense, ...expenses]);
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  const removeExpenseHandler = (expense) => {
    setExpenses(expense);
  };

  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} removeExpense={removeExpenseHandler} />
    </>
  );
}

export default App;
