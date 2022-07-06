
import './App.css';
import {Button, Form,FormGroup,Input,Label} from 'reactstrap';
import React,{useState} from 'react';
import Routess from './Components/router';
function App() {
  const[show,setShow]=useState(false)
    const buttonClick=()=>{
      setShow((preState)=>{
        return !preState
      })
    }
  return (
    <div className="App">
      <marquee> <h1 style={{color:"red"}} >Welcome to React</h1> </marquee><hr/>
      
      <h2>Sign In</h2>
        <Form onSubmit={buttonClick} className="form">
          <FormGroup>
            <Label for="exampleEmail">Username</Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="example@example.com"
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input
              type="password"
              name="password"
              id="examplePassword"
              placeholder="********"
            />
          </FormGroup>
        <Button onClick={buttonClick}>Submit</Button>
       
      </Form>
      {show&&<Routess/>}
    </div>
  );
}

export default App;
