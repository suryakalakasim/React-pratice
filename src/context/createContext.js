import React, { createContext, useState } from "react";
import { useNavigate} from "react-router-dom";
import ComponentA from "./componentA";
import ComponentB from "./componentB";
import ComponentC from "./componentC";

export const UserContext = createContext()
function Createcontext() {
    const navigate=useNavigate()
    const [data, setData] = useState([{ brandname: "oppo", color: "gray" },
    { brandname: "moto", color: "white" }, { brandname: "vivo", color: "black" }
    ])
    const [name, setName] = useState("")
    const [color, setColor] = useState("")
    const submitHandler = (e) => {
        e.preventDefault();
        setData([...data, { brandname: name, color: color }])
    }
    return <div>
        <h3>CreateContext</h3>
        <UserContext.Provider value={[data, setData]}>
            <ComponentA />
            {/* <ComponentB /> */}
            <ComponentC />
        </UserContext.Provider>
        <form onSubmit={submitHandler}>
            <input type="text" onChange={(e) => setName(e.target.value)} value={name} placeholder="enter brandname" />
            <input type="text" onChange={(e) => setColor(e.target.value)} value={color} placeholder="enter color" />
            <button disabled={name == "" || color == ""} type="submit">Add</button>
        </form>
        <br />
        <button onClick={()=>navigate(-1)}>Back to Home</button>
    </div>
}
export default React.memo(Createcontext);