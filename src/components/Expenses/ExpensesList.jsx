import React from 'react';
import ExpenseItem from './ExpenseItem';
import styles from './ExpensesList.module.css';

const ExpensesList = ({ filteredExpenses, removeExpense, expenses }) => {
  if (filteredExpenses.length === 0) {
    return (
      <h2 className={styles['expenses-list__fallback']}>Found No Expenses.</h2>
    );
  }

  return (
    <ul className={styles['expenses-list']}>
      {filteredExpenses.map((expense) => (
        <ExpenseItem
          id={expense.id}
          expenses={expenses}
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          removeExpense={removeExpense}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
