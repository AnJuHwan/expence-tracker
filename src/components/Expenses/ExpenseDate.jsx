import React from 'react';
import styles from './ExpenseDate.module.css';

const ExpenseDate = ({ date }) => {
  const year = date.getFullYear();
  const month = date.toLocaleString('ko-KR', { month: 'long' });
  const day = date.toLocaleString('ko-KR', { day: 'numeric' });
  return (
    <div className={styles['expense-date']}>
      <div className={styles['expense-date__year']}>{year}</div>
      <div className={styles['expense-date__month']}>{month}</div>
      <div className={styles['expense-date__day']}>{day}</div>
    </div>
  );
};

export default ExpenseDate;
