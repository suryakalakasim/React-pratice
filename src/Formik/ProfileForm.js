import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { MdPersonOutline } from "react-icons/md";
import { MdOutlinePhone } from "react-icons/md";
import { MdOutlineHome } from "react-icons/md";
import {MdLanguage} from "react-icons/md";
import {MdOutlineApartment} from "react-icons/md";
import * as Yup from 'yup';
import {useNavigate} from 'react-router-dom';
function ProfileForm() {
    const navigate =useNavigate();
  const initialValues = { firstName: '', lastName: '', email: '',phoneNumber:"",city:"",address1:"",address2:"",country:"",zipCode:"" }
  const validationSchema = Yup.object({
    firstName: Yup.string().matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
      .min(5, "Must be 5 characters")
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
    lastName: Yup.string().matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
      .min(5, "Must be 5 characters")
      .max(20, 'Must be 20 characters or less')
      .required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    phoneNumber:Yup.string().min(10, 'Enter min 10 Numbers')
    .max(10, 'Enter Max 10 Numbers').required('Phone number is required')
    .matches('[6789][0-9]{9}', 'Enter Valid Number'),
    city:Yup.string().required("required"),
    address1:Yup.string().required("required"),
    address2:Yup.string().required("required"),
    country:Yup.string().required("required"),
    zipCode:Yup.string().required("required")
  })
  const onSubmit = values => {
    alert(JSON.stringify(values, null, 2));
  }
  return <div>
    <Container>
      <h1 style={{ textAlign: "center", color: "blue" }}>PROFILE</h1>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        <Form>
          <Row>
            <Col md={6}>
              <label htmlFor="FirstName"><MdPersonOutline size='20px'/> first Name</label><br />
              <Field className="input-style" id="firstName" name="firstName" type="text"/><br />
              <ErrorMessage  name="firstName" className="error" component="div" />
            </Col>
            <Col md={6}>
              <label htmlFor="lastName"><MdPersonOutline size='20px'/> Last Name</label><br />
              <Field className="input-style"
                id="lastName"
                name="lastName"
                type="text"
              /><br />
              <ErrorMessage name="lastName"  className="error" component="div" /><br /><br />
            </Col>
          </Row>
          <Row>
            <Col>
              <label htmlFor="gender">Gender</label>
              <Field className="gender"
                id="gender"
                name="male"
                type="checkbox"

              />Male
              <Field className="gender"
                id="gender"
                name="female"
                type="checkbox"

              />FeMale
            </Col>
            <Col>
              <label htmlFor="Email">@ Email</label><br />
              <Field className="input-style"
                id="Email"
                name="email"
                type="text"
              /><br />
              <ErrorMessage name="email"  className="error" component="div"/><br/>
            </Col>
          </Row>
          <Row>
            <Col>
              <label htmlFor="phone"><MdOutlinePhone size='20px'/> Phone Number</label><br />
              <Field className="input-style" id="phone" name="phoneNumber" type="number"/><br />
              <ErrorMessage name="phoneNumber"  className="error" component="div"/>
            </Col>
            <Col>
              <label htmlFor="city"><MdOutlineApartment size="20px"/>  City</label><br />
              <Field className="input-style"
                id="city"
                name="city"
                type="text"
              /><br />
              <ErrorMessage name="city"  className="error" component="div" /><br />
            </Col>
          </Row>
          <Row>
            <Col>
              <label htmlFor="address1"><MdOutlineHome size='20px'/> Address1</label><br />
              <Field className="input-style" id="address1" name="address1" type="text"/><br />
              <ErrorMessage name="address1"  className="error" component="div"/>
            </Col>
            <Col>
              <label htmlFor="address2"><MdOutlineHome size='20px'/> Address2</label><br />
              <Field className="input-style"
                id="address2"
                name="address2"
                type="text"
              /><br />
              <ErrorMessage name="address2"  className="error" component="div"/><br />
            </Col>
          </Row>
          <Row>
            <Col>
              <label htmlFor="country"><MdLanguage size='20px'/> Country</label><br />
              <Field className="input-style" id="country" name="country" type="text"/><br />
              <ErrorMessage name="country"  className="error" component="div" />
            </Col>
            <Col>
              <label htmlFor="zipCode"><MdOutlineApartment size="20px"/>  ZipCode</label><br />
              <Field className="input-style"
                id="zipCode"
                name="zipCode"
                type="number"
              /><br />
              <ErrorMessage name="zipCode"  className="error" component="div"/><br />
            </Col>
          </Row>
          <center>
            <button type="submit" onSubmit={onSubmit}>Submit</button>
          </center>
        </Form>
      </Formik>
    </Container>
    <button onClick={()=>navigate(-1)}>Back to Home</button>
  </div>
}
export default ProfileForm;