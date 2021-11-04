import React, { useState } from 'react';
import Card from '../UI/Card.jsx';
import ExpenseDate from './ExpenseDate.jsx';
import styles from './ExpenseItem.module.css';

const ExpenseItem = ({ title, amount, date }) => {
  // const year = date.toLocaleString('ko-KR', { year: 'numeric' });
  // const [title, setTitle] = useState(title);

  const clickHandler = () => {
    console.log('click');
    // setTitle('Updated');
  };

  return (
    <Card className={styles['expense-item']}>
      <ExpenseDate date={date} />

      <div className={styles['expense-item__description']}>
        <h2>{title}</h2>
        <div className={styles['expense-item__price']}>{amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
