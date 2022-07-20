import React from "react";
import images from '../images/pexels-blaque-x-863963.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import image from '../images/google-logo-9824.png';

function Desingning() {
    return <div className="boder-style">
     {/* <Container> 
            <Row className="row">
                <Col >

                    <img src={images} alt="image" height={100} width={100} />

                </Col>
                <Col >

                    <h1>Login</h1><hr />
                    <hr />
                </Col>
            </Row>


        </Container>*/}
         <Container>

<Row className="row">

    <Col className="color">

        <img src={images} alt="image" height={100} width={100} />

    </Col>

    <Col  xs={8} className="login-page" >
        
            <h1>Login</h1>
            <hr className="size" /><br /><hr className="size" />
            <a className="forgot-link" href="">Forgot Password?</a><br />
            <button className="signIn-button" type="button">Sign In</button><br/>
            
                 <hr className="inline"/>or<hr className="inline"/><br/>
                 
            <img src={image} alt="image" height={30} width={30}/><b>Sign in with Google</b>
            <br/><br/>
            <h6>Don't have Account?
                <a href="">CreateAccount.</a></h6>
        
    </Col>
</Row>


</Container>
    </div>
}
export default Desingning;