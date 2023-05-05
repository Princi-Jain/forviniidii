import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const AddForm = () => {
  return (
    <div style={{color:"black",border:"1px solid silver",marginTop:"150px",padding:"20px",boxShadow:"3px 3px gray",backgroundColor:"gray",marginRight:"80px"}}>
          <Row>
            <Form>
              <Row>
                <h4 style={{backgroundColor:"darkblue",color:"white",width:"18rem",fontSize:"80px",marginTop:"35px",marginBottom:"75px"}} >Add Shop</h4>
            <Col>         <Form.Group >
                  <Form.Label><b>Shop Id</b></Form.Label>
                  <Form.Control type="text"  />
          </Form.Group>
          <Form.Group >
                  <Form.Label><b>Shop Name</b></Form.Label>
                  <Form.Control type="text"  />
          </Form.Group>
          <Form.Group >
                  <Form.Label><b>Registration Number</b></Form.Label>
                  <Form.Control type="text"  />
          </Form.Group>
          <Form.Group >
                  <Form.Label><b>License Number</b></Form.Label>
                  <Form.Control type="text"  />
          </Form.Group>
          <Form.Group >
                  <Form.Label><b>Aadhar Number</b></Form.Label>
                  <Form.Control type="text"  />
          </Form.Group></Col>
              <Col>   <Form.Group >
                  <Form.Label><b>Address</b></Form.Label>
                  <Form.Control type="text"  />
          </Form.Group>
          <Form.Group >
                  <Form.Label><b>State</b></Form.Label>
                  <Form.Control type="text"  />
          </Form.Group>
          <Form.Group >
                  <Form.Label><b>City</b></Form.Label>
                  <Form.Control type="text"  />
          </Form.Group>
          <Form.Group >
                  <Form.Label><b>Contact</b></Form.Label>
                  <Form.Control type="text"  />
          </Form.Group>
              <Button style={{marginTop:"30px",backgroundColor:"black",marginLeft:"10px"}}>AddForm</Button>
          </Col>
              </Row>
       </Form></Row>
    </div>
  )
}

export default AddForm