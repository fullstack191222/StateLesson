import React, { useState } from 'react'
import Card from '../UI/Card'

export default function Form(props) {
  
//   const [title, setTitle] = useState('')  
//   const [amount, setAmount] = useState('')  
//   const [date, setDate] = useState('')
  
  const [expense, setExpense] = useState({title:'', amount:"", date:''})

  const changeTitleHandler = (e)=>{    
    setExpense({...expense,
                title:e.target.value})
    // setTitle(e.target.value)
  }
  const changeAmountHandler = (e)=>{
    setExpense({...expense, amount:e.target.value})
    // setAmount(e.target.value)
  }
  const changeDateHandler = (e)=>{
    setExpense({...expense, date:e.target.value})
    // setDate(e.target.value)
  }

  // //the handler which updated the database
  // const addExpenseHandler = (expense)=> {
  //   console.log("in Form");
  //   console.log("new expense is:")
  //   console.log(expense);
  //   console.log("updating the new expense in the database");
  // }

  const handleSubmit = (e)=> {
    //prevent default behavior
    e.preventDefault()

    //add nex expense to the db
    // addExpenseHandler(expense)
    props.addExpenseHandler(expense)

    //reset values.
    setExpense({title:'', amount:'', date:''})
  }


  return (
    <div>
       
        <form onSubmit={handleSubmit}>
            <input type="text" id="title" name="title" placeholder="Title" required onChange={changeTitleHandler} value={expense.title}/>
            <input type="number" id="amount" name="amount" placeholder="Price" required onChange={changeAmountHandler} value= {expense.amount}/>
            <label htmlFor="date" style={{color:"white"}}>Date:</label>
            <input type="date" id="date" name="date" required onChange={changeDateHandler} value = {expense.date}/>
            <input type="submit" value="Submit" />
        </form>
        <p style={{color:"white"}}>
            Title: {expense.title}, 
            Price: {expense.amount}$, 
            Date: {expense.date}</p>
            

    </div>
  )
}
