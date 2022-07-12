import React from "react";
  export function HigherOrderComponent(Oldcomponent){
       return class Component1 extends React.Component{
           constructor(){
               super()
           //  this.state={
                  // array:[{name:"ravi",age:"20",marks:"100"},{name:"siva",age:"25",marks:"120"}
                  // ,{name:"raju",age:"22",marks:"130"},{
                   // Sname:"",age:"",marks:""
              //  }] }
                   
           
        /* handelSubmit=(e)=>{
               this.setState(...array)
           }
        }*/
    }
           render(){
               return<div>
                   This Is An HigherOrderComponent
                    <Oldcomponent details={this.state.array}/> 
                  {/* <form onSubmit={this.handelSubmit}>
                   <input type="text" onChange={(e)=>this.setState(e.target.value)} value={Sname} placeholder="enter name"/>
                   <input type="text" onChange={(e)=>this.setState(e.target.value)} value={age} placeholder="enter age"/>
                   <input type="text" onChange={(e)=>this.setState(e.target.value)} value={marks} placeholder="enter marks"/>
                    <input type="submit"/>
           </form>*/}
                   
               </div>
           }

       }
   }


          