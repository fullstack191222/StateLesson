
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import Card from './components/UI/Card';

const App = () => {
    const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2',
      title: 'New TV',
      amount: 799.49, 
      date: new Date(2021, 2, 12) },
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

  //the handler which updated the database
  const addExpenseHandler = (expense)=> {
    console.log("in App.js");
    console.log("new expense is:")
    console.log(expense);
    // console.log("updating the new expense in the database");
    expenses.push(expense)
    console.log(expenses);
  }



  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <NewExpense addExpenseHandler={addExpenseHandler}></NewExpense>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
