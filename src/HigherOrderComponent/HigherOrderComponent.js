import React from "react";
  export function HigherOrderComponent(Oldcomponent){
       return class Component1 extends React.Component{
           constructor(){
               super()
               this.state={
                   array:[{name:"ravi",age:"20",marks:"100"},{name:"siva",age:"25",marks:"120"}
                   ,{name:"raju",age:"22",marks:"130"}]
               }
           }
           render(){
               return<div>
                   This Is An HigherOrderComponent
                   <Oldcomponent ditails={this.state.array}/>
               </div>
           }

       }
   }


          