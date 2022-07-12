import React,{useState,useEffect} from "react";
import axios from "axios";
  function DataFetching(){
      const[post,setPost]=useState({})
      const[id,setId]=useState(1)
      const[idbuttonClick,setIdbuttonClick]=useState(1)
      useEffect(()=>{
          axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res)=>{
              setPost(res.data)
          }).catch((err)=>{
              console.log(err)
          })
      },[idbuttonClick])
      const buttonClick=()=>{
          setIdbuttonClick(id)
      }
      return<div>
          <input type="text"onChange={e=>setId(e.target.value)} value={id}/>
          <button type="button"onClick={buttonClick}>Fetch data</button>
          <div>{post.title}</div>
              {/* <ul>
                  {post.map((itam)=><li key={itam.id}>{itam.title}</li>)}
              </ul> */}
      </div>
  }
  export default DataFetching;