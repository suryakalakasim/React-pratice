import React from "react";
import { Table } from 'reactstrap';
 export function Tabledata(props){
     console.log("table>>>",props)
    return<div>
<div>
        <table >
            <tbody>
                <tr>
                    <td>s.no</td>
                    <td>name</td>
                    <td>Mail</td>
                    <td>Ph.No</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td>1.</td>
                    <td>{props.state}</td>
                    <td>{props.email}</td>
                    <td>{props.phnum}</td>
                </tr>
            </tbody>
        </table>
        <Table>
        <thead>
          <tr>
            <th>S.NO</th>
            <th> Name</th>
            <th>Mail</th>
            <th>PhNum</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>{props.state}</td>
            <td>{props.email}</td>
            <td>{props.phnum}</td>
          </tr>
         
        </tbody>
        
      </Table>
        </div>
    </div>
}