import React from "react";
import { Table } from 'reactstrap';
 export function Tabledata(props){
     console.log("table>>>",props)
     const {data}=props
     console.log("tabledata>>.",data)
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
                    <td>{data.id}</td>
                    <td>{data.username}</td>
                    <td>{data.email}</td>
                    <td>{data.phnum}</td>
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
            <th scope="row">{data.id}</th>
            <td>{data.username}</td>
            <td>{data.email}</td>
            <td>{data.phnum}</td>
          </tr>
         
        </tbody>
        
      </Table>
        </div>
    </div>
}