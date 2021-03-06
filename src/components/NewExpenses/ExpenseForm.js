import './ExpenseForm.css';
import React, {useState} from 'react';
const ExpenseForm = (props) => {
    const [enteredtitle, setEnteredTitle] = useState('');
    const [enteredamount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    }

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: enteredtitle,
            date: new Date(enteredDate),
            amount: +enteredamount
        }
        props.onSaveExpenseData(expenseData);
        setEnteredDate('');
        setEnteredTitle('');
        setEnteredAmount('');
    }

    return (<form onSubmit={onSubmitHandler}>
        <div className = "new-expense__controls">
            <div className = "new-expense__control">
                <label>Title</label>
                <input type="text" value={enteredtitle} onChange={titleChangeHandler} required/>
            </div>
            <div className = "new-expense__control">
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01" value={enteredamount} onChange={amountChangeHandler} required/>
            </div>
            <div className = "new-expense__control">
                <label>Date</label>
                <input type="date" min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateChangeHandler} required/>
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expenses</button>
        </div>
    </form>);
}

export default ExpenseForm;