import React from 'react';
import Card from '../UI/Card.jsx';
import ExpenseDate from './ExpenseDate.jsx';
import styles from './ExpenseItem.module.css';

const ExpenseItem = ({ title, amount, date, removeExpense, expenses, id }) => {
  const expenseRemove = () => {
    const removeAfterExpenses = expenses.filter((expense) => {
      return expense.id !== id;
    });
    removeExpense(removeAfterExpenses);
  };

  return (
    <li>
      <Card className={styles['expense-item']}>
        <ExpenseDate date={date} />

        <div className={styles['expense-item__description']}>
          <h2>{title}</h2>
          <div className={styles['expense-item__price']}>{amount}</div>
          <button
            className={styles['expense-item__remove']}
            onClick={expenseRemove}>
            REMOVE
          </button>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
