import { useState } from 'react'

import './App.css'

function App() {

  return <>
    <Form></Form>
  </>
}

export default App


const Form = () => {
  const [value, setValue] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: ''
  })
  console.log(value)

  const onChange = e => {
    setValue({
      ...value,
      [e.target.name]: e.target.value
    })
  }



  return (
    <form>
      <div>
        <label htmlFor="firstname">Name:</label>
        <input type="text" id="firstname" name="firstname" onChange={onChange} ></input>
      </div>

      <div>
        <label htmlFor="lastnamee">Last name:</label>
        <input type="text" id="lastname" name="lastname" onChange={onChange} ></input>
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input type="text" id="email" name="email" onChange={onChange}  ></input>
      </div>

      <div>
        <label htmlFor="password">Password:</label>
        <input type="text" id="password" name="password" onChange={onChange} ></input>
      </div>
      <button type="submit"> Submit</button>


    </form>
  )
}