import React from 'react';
import { useState } from 'react/cjs/react.development';
import Card from '../UI/Card.jsx';
import ExpenseFilter from './ExpenseFilter.jsx';
import ExpenseItem from './ExpenseItem.jsx';
import styles from './Expenses.module.css';

const Expenses = ({ expenses }) => {
  const [filteredYear, setFiteredYear] = useState('2020');
  const filterChangeHandler = (selectedYear) => {
    setFiteredYear(selectedYear);
  };

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expensesContent = <p>No Expenses Found.</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <>
      <Card className={styles.expenses}>
        <ExpenseFilter
          seleted={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {expensesContent}
      </Card>
    </>
  );
};

export default Expenses;
