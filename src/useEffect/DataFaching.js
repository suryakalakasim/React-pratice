import React,{useState,useEffect} from "react";
import axios from "axios";
  function DataFaching(){
      const[post,setPost]=useState([])
      useEffect(()=>{
          axios.get("https://jsonplaceholder.typicode.com/posts").then((res)=>{
              setPost(res.data)
          }).catch((err)=>{
              console.log(err)
          },[])
      })
      return<div>
              <ul>
                  {post.map((itam)=><li key={itam.id}>{itam.title}</li>)}
              </ul>
      </div>
  }
  export default DataFaching;