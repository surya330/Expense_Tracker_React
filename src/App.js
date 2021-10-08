//import logo from './logo.svg';
import './App.css';
import './components/Expenses/Expenses';
import Expenses from './components/Expenses/Expenses';
import NewExpenses from './components/NewExpenses/NewExpenses';
function App() {
  const addExpenseHandler = (expense) => {
    console.log("in app.js",expense);
  }
  return (<div>
    <NewExpenses onExpenseChange={addExpenseHandler}/>
    <Expenses />
    </div>);
}

export default App;