import React from 'react';
import ExpenseItem from './ExpenseItem';
import styles from './ExpensesList.module.css';

const ExpensesList = ({ filteredExpenses }) => {
  if (filteredExpenses.length === 0) {
    return (
      <h2 className={styles['expenses-list__fallback']}>Found No Expenses.</h2>
    );
  }

  return (
    <ul className={styles['expenses-list']}>
      {filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
