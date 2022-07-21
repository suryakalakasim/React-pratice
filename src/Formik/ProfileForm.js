import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Formik,Form,Field,ErrorMessage} from 'formik';
import * as Yup from 'yup';
function ProfileForm(){
    const  initialValues= { firstName: '',lastName: '',email: ''}
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
    return<div>
        <Container>
            <h1 style={{textAlign:"center",color:"blue"}}>Profile</h1>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            <Form>
            <Row>
          <Col  md={6}>
      <label htmlFor="FirstName">first Name</label><br/>
          <Field className="input-style" id="firstName" name="firstName"type="text" /><br/>
         <ErrorMessage name="firstName"/>
          </Col>
          <Col md={6}>
          <label htmlFor="lastName">Last Name</label><br/>
      <Field className="input-style"
        id="lastName"
        name="lastName"
        type="text"
         /><br/>
     <ErrorMessage name="lastName"/><br/><br/>
          </Col>
            </Row>
            <Row>
                <Col>
                <label htmlFor="gender">Gender</label>
      <Field 
        id="gender"
        name="male"
        type="checkbox"
        
         />Male
         <Field 
        id="gender"
        name="female"
        type="checkbox"
        
         />FeMale
                </Col>
                <Col>
                <label htmlFor="Email">@ Email</label><br/>
      <Field className="input-style"
        id="Email"
        name="email"
        type="text"
         /><br/>
     <ErrorMessage name="email"/>
                </Col>
            </Row>
            </Form>
            </Formik>
        </Container>

    </div>
}
export default ProfileForm;