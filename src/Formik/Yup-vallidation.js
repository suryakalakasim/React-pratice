import React from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
function ValidatonSchama() {
    const initialValues={firstname:"",lastname:"",email:"",password:"",confirmpassword:""}
    const onSubmit=(values)=>{
        console.log("sign in form",values)
         alert("your form was submited")

         }
    const  validationSchema= Yup.object({
        firstname: Yup.string()
          .max(5, 'Must be 5 characters or less')
          .required('Required'),
        lastname: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
        email: Yup.string().email('Invalid email address').required('Required'),
        password:Yup.string().required("required"),
        confirmpassword:Yup.string().required("required")
    })
     let formik=useFormik({initialValues,
        onSubmit,
        validationSchema
     
    })
    return <div>
        <h1>Sign in Form</h1>
        <Form onSubmit={formik.handleSubmit}>
            <FormGroup>
                <Label>
                    FirstName:
                </Label>
                <Input autoComplete=""
                    id="firstname"
                    name="firstname"
                    placeholder="enter your firstname"
                    type="text"
                    value={formik.values.firstname}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.firstname && formik.errors.firstname ? (<div className="error">{formik.errors.firstname}</div>) : null}
            </FormGroup>
            <FormGroup>
                <Label >
                    LastName:
                </Label>
                <Input
                   
                    name="lastname"
                    placeholder="enter your lastname"
                    type="text"
                    value={formik.values.lastname}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.lastname && formik.errors.lastname ? (<div className="error">{formik.errors.lastname}</div>) : null}
            </FormGroup>
            <FormGroup>
                <Label>
                    Email:
                </Label>
                <Input
                  
                    name="email"
                    placeholder="enter your email"
                    type="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email ? (<div className="error">{formik.errors.email}</div>) : null}
            </FormGroup>
            <FormGroup>
                <Label>
                    Password:
                </Label>
                <Input
                    name="password"
                    placeholder="password placeholder"
                    type="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                 />
                 {formik.touched.password && formik.errors.password ? (<div className="error">{formik.errors.password}</div>) : null}
            </FormGroup>
            <FormGroup>
                <Label >
                    ConfirmPassword:
                </Label>
                <Input
                    name="confirmpassword"
                    type="password"
                    value={formik.values.confirmpassword}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.confirmpassword && formik.errors.confirmpassword ? (<div className="error">{formik.errors.confirmpassword}</div>) : null}
            </FormGroup>
            <Button type="submit">
                Sign in
            </Button>
        </Form >
    </div>
}
export default ValidatonSchama;