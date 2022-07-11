import React from "react";
import { Table } from "react-bootstrap";
import { UserConsumer } from "./userContext";
  class ClassComponentB extends React.Component{
      render(){
          return<div>
              ClassComponentB
              <UserConsumer>
                  {(data)=>{
                 console.log("classcomponentB",data)
                 return<div>
                      <Table>
                  <thead>
                      <tr                 >
                          <td>s.no</td>
                          <td>brand</td>
                          <td>color</td>
                      </tr>
                  </thead>
                  <tbody>
                      {data.map((x,i)=><tr key={i}>
                          <td>{i+1}</td>
                          <td>{x.car}</td>
                          <td>{x.color}</td>

                      </tr>)}
                  </tbody>
                 </Table>
                 </div>
                 }}
                 
              </UserConsumer>
              
          </div>
      }
  }
  export default ClassComponentB;