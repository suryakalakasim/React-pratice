import React from "react";
import images from '../images/pexels-blaque-x-863963.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Desingning() {
    return <>
     <Container>
            <Row className="row">
                <Col >

                    <img src={images} alt="image" height={100} width={100} />

                </Col>
                <Col >

                    <h1>Login</h1><hr />
                    <hr />
                </Col>
            </Row>


        </Container>
    </>
}
export default Desingning;