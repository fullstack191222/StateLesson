import Form from "./Form"

export default function NewExpense(props) {

  // //the handler which updated the database
  // const addExpenseHandler = (expense)=> {
  //   console.log("in NewExpense");
  //   console.log("new expense is:")
  //   console.log(expense);
  //   console.log("updating the new expense in the database");
  // }

  return (
    <div>
        <Form addExpenseHandler={props.addExpenseHandler}></Form>
    </div>
  )
}
