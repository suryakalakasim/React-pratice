import React, { useState, useEffect } from "react";
//import { Link } from 'react-router-dom';
import axios from "axios";
import {Data} from "./data";
import {useNavigate} from"react-router-dom";
function HomePage() {
    const [data, setData] = useState([])
    const navigate =useNavigate()
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/albums").then(response => {
            setData(response.data)
            console.log("response>>>", response)
        })
            .catch(error => {
                console.log(error)
            })
    }, [])
    return <div>
        <h3>This is an HomePage</h3>
                       
            {data&&data.map((itam) =><Data key={itam.id} value={itam}/>)}
            <button onClick={()=>navigate(-1)}>Back to Home</button>
        {/* <Link to='/'>Back to Home </Link> */}
    </div>
}
export default HomePage;