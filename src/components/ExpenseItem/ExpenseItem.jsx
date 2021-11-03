import React from 'react';
import styles from './ExpenseItem.module.css';

const ExpenseItem = (props) => {
  const expenseDate = new Date();
  return (
    <div className={styles['expense-item']}>
      <div>{expenseDate.toDateString()}</div>

      <div className={styles['expense-item__description']}>
        <h2>Car Insurance</h2>
        <div className={styles['expense-item__price']}>$294.67</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
