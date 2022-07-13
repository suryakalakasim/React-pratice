import React, { createContext, useContext, useState } from "react";
import ComponentB from "./componentB";
import { UserContext } from './createContext';
export const StudentContext = createContext();
function ComponentA() {
    const [data, setData] = useContext(UserContext)
    console.log('ComponentA==>', data);
    const [studentData, setStudentData] = useState([{ name: "kala", grade: "A" },{ name:"nani", grade:"A" }])
    return <div>
        <div className="card">
            <div className="card-body">
                componentA
                <StudentContext.Provider value={studentData}>
                    <ComponentB />
                </StudentContext.Provider>
                {data.map((itam, i) => <h1 className="card-text" key={i}>{itam.brandname}:{itam.color}</h1>)}
            </div>
        </div>


    </div>
}
export default ComponentA;