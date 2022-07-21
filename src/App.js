import './App.css';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import React, { useState } from 'react';
import Routess from './router';
import ClassComponentA from './context/classComponentA';
import ProfileForm from './Formik/ProfileForm';
// import {useNavigate} from 'react-router-dom';
function App() {
   //let navigate=useNavigate();
  const [input, setInput] = useState({ email: "", password: "" })
  let [show, setShow] = useState(false)
  const { email, password } = input;
  const buttonClick = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value })
    console.log("input>>>>", input)
  }
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(input, "input>>.")
   setShow((preState) => {
     return !preState
   })
    // navigate('-1')
  }
  return (
    <div className="App">
      <marquee> <h1 style={{ color: "red" }} >Welcome to React</h1> </marquee><hr />

      <h2>Sign In</h2>
      <Form onSubmit={submitHandler} className="form">
        <FormGroup>
          <Label for="exampleEmail">Username: </Label>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            value={email}
            placeholder="example@example.com"
            onChange={buttonClick}
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password :</Label>
          <Input
            type="password"
            name="password"
            value={password}
            id="examplePassword"
            placeholder="********"
            onChange={buttonClick}
          />
        </FormGroup>
        <Button>Submit</Button>

      </Form>
      
      {show && <Routess />}<br/>
      {/* <ClassComponentA/> */}
      
      <ProfileForm/>

    </div>
  );
}

export default App;
