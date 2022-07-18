import React from 'react';
import { Formik,Form ,Field, ErrorMessage,FieldArray,FastField} from 'formik';
import * as Yup from 'yup';

const SignupForm = () => {
  const  initialValues= { firstName: '',lastName: '',email: '',
skills:{softSkills:"",hardSkills:""} ,phNumbers:["",""],phoneNumbers:['']}
  const  validationSchema= Yup.object({
    firstName: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
    lastName: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
  })
  const  onSubmit= values => {
    alert(JSON.stringify(values, null, 2));
  }
  
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
    <Form>
      <label htmlFor="firstName">First Name</label>
      <FastField name="firstName" >
          {(Props)=>{
            console.log("fieldProps")
            const{field,form,meta}=Props
            return<div>
              <input type="text"  id="firstName" {...field}/>
              {meta.toched&& meta.error?<div>{meta.error}</div>:null}
            </div>
          }}
        </FastField><br/>
        
      {/* <ErrorMessage name="firstName"/><br/> */}

      <label htmlFor="lastName">Last Name</label>
      <Field
        id="lastName"
        name="lastName"
        type="text"
         /><br/>
     <ErrorMessage name="lastName"/><br/>
      <label htmlFor="email">Email Address</label>
      <Field
        id="email"
        name="email"
        type="email"
      /><br/>
     <ErrorMessage name="email"/><br/>
    <label htmlFor="skills">softSkills</label>
      <Field
        id="skills"
        name="skills.softSkills"
        type="text"
      /><br/>
       <label htmlFor="skills">hardSkills</label>
      <Field
        id="skills"
        name="skills.hardSkills"
        type="text"/><br/>
         <label htmlFor="phnumber">primaryPh</label>
      <Field
        id="phnumber"
        name="phNumbers[0]"
        type="number"
      /><br/>
       <label htmlFor="phnumber">secondaryPh</label>
      <Field
        id="phnumber"
        name="phNumbers[1]"
        type="number"/><br/>
        <label htmlFor='phoneNumbers'>List of phoneNumbers</label>
        <FieldArray name='phoneNumbers'>
           {(FieldArrayProps)=>{
                console.log("fieldArrayProps",FieldArrayProps)
                const {push,remove,form}=FieldArrayProps
                const {values}=form
                const{phoneNumbers}=values
                return<div>{
                  phoneNumbers.map((phnumber,index)=>(<div key={index}><Field name={`phoneNumbers[${index}]`}/>
                 {index>0&& <button type='button' onClick={()=>remove(index)}>-</button>}
                  <button type='button' onClick={()=>push("")}>+</button>
                  </div>))
                  }</div>
           }}
        </FieldArray>

      <button type="submit">Submit</button>
    </Form>
    </Formik>
  );
};
export default SignupForm;