import React from 'react';
import ExpenseForm from './ExpenseForm';
import styles from './NewExpense.module.css';

const NewExpense = ({ onAddExpense }) => {
  const onSaveExpenseData = (enterExpenseData) => {
    const expenseData = {
      ...enterExpenseData,
      id: Math.random().toString(),
    };

    onAddExpense(expenseData);
  };
  return (
    <div className={styles['new-expense']}>
      <ExpenseForm onSaveExpenseData={onSaveExpenseData} />
    </div>
  );
};

export default NewExpense;
