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
    {data?data.map((x,i)=><tr key={i}>
      <td>{x?.id||"no id"}</td>
      <td>{x?.name||"no name"}</td>
      <td>{x?.age||"no data"}</td>
      <td>{x?.marks||"no data"}</td>
    </tr>):<h3>No student data</h3>}
  </tbody>
</Table>
    </div>
}
export default StudentData;