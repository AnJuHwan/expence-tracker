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
  return (
    <>
      <Card className={styles.expenses}>
        <ExpenseFilter
          seleted={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpenseItem
          title={expenses[0].title}
          amount={expenses[0].amount}
          date={expenses[0].date}
        />
        <ExpenseItem
          title={expenses[1].title}
          amount={expenses[1].amount}
          date={expenses[1].date}
        />
        <ExpenseItem
          title={expenses[2].title}
          amount={expenses[2].amount}
          date={expenses[2].date}
        />
        <ExpenseItem
          title={expenses[3].title}
          amount={expenses[3].amount}
          date={expenses[3].date}
        />
      </Card>
    </>
  );
};

export default Expenses;
