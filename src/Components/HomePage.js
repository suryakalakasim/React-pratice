import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import {Data} from "./data";
function HomePage() {
    const [data, setData] = useState([])
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
                       
            {data.map((itam) =><Data key={itam.id} value={itam}/>)}
           
        <Link to='/'>Back to Home </Link>
    </div>
}
export default HomePage;