import React from "react";
import {Table} from 'react-bootstrap';
function StudentData(props) {
    const {data}=props
    console.log("props>>..",data)
    return<div>
     <Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>Id</th>
      <th>Name</th>
      <th>Age</th>
      <th>Marks</th>
    </tr>
  </thead>
  <tbody>
    {data.map((x,i)=><tr key={i}>
      <td>{x.id}</td>
      <td>{x.name}</td>
      <td>{x.age}</td>
      <td>{x.marks}</td>
    </tr>)}
  </tbody>
</Table>
    </div>
}
export default StudentData;