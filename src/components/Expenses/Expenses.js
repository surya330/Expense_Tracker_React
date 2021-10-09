import './Expenses.css';
import NewExpenses from '../NewExpenses/NewExpenses.js';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import React, {useState } from 'react';

const Dummy_Expenses = [
    {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
    },
    { 
    id: 'e2', 
    title: 'New TV', 
    amount: 799.49, 
    date: new Date(2021, 2, 12) 
    },
    {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
    },
    {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
    },
];

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangedHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    const[expenses, setExpenses] = useState(Dummy_Expenses);

    const addExpenseHandler = (expense) => {
     setExpenses(PrevExpenses => {
         return [expense, ...PrevExpenses];
     });
    }

    const filteredExpenses = expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    let expensesContent = <p>No expense Found.</p>
    if(filteredExpenses.length > 0 ){
    expensesContent = filteredExpenses.map(x => 
        <ExpenseItem key = {x.id} 
        title = {x.title} 
        amount = {x.amount} 
        date = {x.date} />)
    }

    return (
        <div>
            <NewExpenses onExpenseChange={addExpenseHandler}/>
            <Card className="Expenses">
                <ExpensesFilter selected={filteredYear} 
                onChangeFilter={filterChangedHandler} />
                {expensesContent}
            </Card>
        </div>
        );
}

export default Expenses;