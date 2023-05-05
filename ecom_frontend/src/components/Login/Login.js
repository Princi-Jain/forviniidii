import React from 'react'
import './Login.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import admin from '../../images/admin.png'
import Form from 'react-bootstrap/Form';
import {NavLink } from 'react-router-dom';

const Login = () => {
  return (
    <Container fluid className='login1'>
        <Row> 
          <Col  md={{ span: 6, offset: 3 }}  >
<div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
              <Container fluid className='login2' style={{display:"flex",justifyContent:"center"}}>
                 <Row style={{justifyContent:"center",display:"flex",alignItems:"center"}}>
                    <Col sm={6}><img src={admin} width="200px" height="200px" /></Col>
                    
                   <Col sm={6}>
                    <h4 style={{marginTop:'30px',textDecoration:"underline",marginRight:"30px"}}>Login</h4>
                    <Form style={{paddingRight:"20px",marginTop:"50px"}}>
                    <Form.Group className="mb-3" >
                  <Form.Label><b>User Id</b></Form.Label>
                  <Form.Control type="text"  />
               </Form.Group>
          <Form.Group className="mb-3">
                  <Form.Label><b>Password </b></Form.Label>
                  <Form.Control type="password"  />
          </Form.Group>
                    </Form>
                    <NavLink to="/component/dashboard"><Button style={{marginTop:"10px"}}>OK</Button></NavLink>
                    
                    </Col>
                </Row>
                </Container>
                </div>
                </Col>
            </Row>
         </Container>
  )
}

export default Login