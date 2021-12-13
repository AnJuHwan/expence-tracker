import React, { useState } from 'react';
import Card from '../UI/Card.jsx';
import ExpenseFilter from './ExpenseFilter.jsx';
import styles from './Expenses.module.css';
import ExpensesChart from './ExpensesChart.jsx';
import ExpensesList from './ExpensesList.jsx';

const Expenses = ({ expenses, removeExpense }) => {
  const [filteredYear, setFiteredYear] = useState('2020');
  const filterChangeHandler = (selectedYear) => {
    setFiteredYear(selectedYear);
  };

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  const removeExpenseHandler = (expense) => {
    removeExpense(expense);
  };

  return (
    <>
      <Card className={styles.expenses}>
        <ExpenseFilter seleted={filteredYear} onChangeFilter={filterChangeHandler} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList
          expenses={expenses}
          filteredExpenses={filteredExpenses}
          removeExpense={removeExpenseHandler}
        />
      </Card>
    </>
  );
};

export default Expenses;
