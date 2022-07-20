import React from "react";
import images from '../images/pexels-blaque-x-863963.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
function SinUpForm() {
    return <div className="Signform-style">
        <Container fluid>
            <Row>
                <Col className=" form-color">
                    <center>
                    <img src={images} alt="image" height={100} width={100} /></center>
                </Col>
                <Col xs={8} className="login-page" >
                    <Row>
                        <Row>
                            <Col><h3 style={{textAlign:"center" ,color:"rgb(126, 126, 231)"}}>Signup</h3></Col>
                        </Row>
                        <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridFirst name">
          <Form.Label>First name*</Form.Label>
          <Form.Control type="text" placeholder="Enter your first name" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridLast name">
          <Form.Label>Last name*</Form.Label>
          <Form.Control type="text" placeholder="Enter your last name " />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridEmailAddress">
        <Form.Label>Email Address*</Form.Label>
        <Form.Control type="email" placeholder="Enter your email" />
      </Form.Group>
      <Row className="mb-3">
      <Form.Label>New WhatsApp Number*</Form.Label>
      <Col xs={2}>
          <Form.Control />
        </Col>
        <Col>
          <Form.Control type="number" placeholder="Enter your Mobile Number" />
        </Col>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password*</Form.Label>
          <Form.Control type="password" placeholder="Enter your password" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridRe-enterPassword">
          <Form.Label>Re-enter Password*</Form.Label>
          <Form.Control type="password" placeholder="Confirm Your Password"  />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridBusiness">
          <Form.Label>Business Type*</Form.Label>
          <Form.Select placeholder="Please Select Your Business Type">
            <option>Service</option>
            <option>Privete Limited company</option>
            <option>Marketing</option>
          </Form.Select>
        </Form.Group>
      </Row>
      <Row className="mb-3">
      <Form.Group  as={Col} controlId="formGridBrandName">
      <Form.Label>Your Brand Display Name</Form.Label>
        <Form.Control type="text" placeholder="Please Enter Your Brand Display Name" />
      </Form.Group>
      </Row>
      <Row className="mb-3">
          <Col sm={1}>
        <Form.Check type="checkbox"/> 
        </Col> 
        <Col sm={11}>
            I agree to
        <a className="link-color" href="">Terms and conditions</a>and <a className="link-color" href="">Privacy Policy</a>
        </Col>
       </Row>
       <h6 style={{textAlign:"center"}}>Already have an account?
                            <a className="link-color" href="">Login</a></h6>
      <center>
      <Button  variant="primary" type="button">
        CreateAccount
      </Button></center>
    </Form>
                    </Row>
                </Col>
            </Row >
        </Container>
    </div>
}
export default SinUpForm;