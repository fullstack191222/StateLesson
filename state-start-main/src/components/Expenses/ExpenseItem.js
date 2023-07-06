import {useState} from 'react'

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  
  const [title, setTitle] =  useState(props.title)
  const [bgColor, setBgColor] =  useState('')//state of color
  
  const changeBackgroundHandler = ()=> {
    setBgColor("red")
  }
  const changeTitleHandler = ()=> {
    setTitle("Arya Stark")
  }


  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2 style={{backgroundColor:bgColor}}  onClick={changeBackgroundHandler} >{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={changeTitleHandler}>Change title</button>
    

    </Card>
  );
}

export default ExpenseItem;
