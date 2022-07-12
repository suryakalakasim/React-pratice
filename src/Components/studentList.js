import React from "react";
function Studentlist(props){
    const{data} =props;
    console.log("proplist>>",data)
    return<>
    {data?data.map((x,i)=><ul key={i}>
        <li>id:{x.id}</li>
        <li>name:{x.name}</li>
        <li>age:{x.age}</li>
        <li>marks:{x.marks}</li>
    </ul>):<h3>No student list data</h3>}
    </>
}
export default Studentlist;