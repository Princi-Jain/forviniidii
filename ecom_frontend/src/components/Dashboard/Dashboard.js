import React from 'react'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Dashboard.css"
import Headers from '../Headers/Headers'
import Sidebar from '../Sidebar/Sidebar'
import image11 from '../../images/image11.png'
import image3 from '../../images/image3.png'
import image1 from '../../images/image1.png'
import image44 from '../../images/image44.png'
import { Chart } from "react-google-charts";

export const data1 = [
  ["Task", "Hours per Day"],
  ["Electronics", 11],
  ["Cloths", 2],
  ["Grocery", 2],
  ["Cosmetics", 2],
  ["Accessories", 7],
];

export const options1 = {
  title: "Todays Order",       
  is3D: true,
  
};

export const data = [
  ["x", "Current Year", "Previous Year"],
  [0, 0, 0],
  [1, 10, 5],
  [2, 23, 15],
  [3, 17, 9],
  [4, 18, 10],
  [5, 9, 5],
  [6, 11, 3],
  [7, 27, 19],
];
export const options = {
  hAxis: {
    title: "Years",
  },
  vAxis: {
    title: "Revenue",
  },
  series: {
    1: { curveType: "function" },
  },
};

const Dashboard = () => {
  return (
    <div>
       <Headers/> 
   <div style={{display:"flex"}}>
    <Sidebar/>
      <Container fluid>
      <Row >
       <Col sm={6} md={4} xl={3} lg={6} style={{justifyContent:"center"}}>
       <Card border="Secondary" style={{ width: '18rem',height:"15rem" }} className="card0">
        <Card.Body className='cardbody1'>
        <Card.Title  style={{color:"white",fontSize:'18px'}}><b>Total User</b></Card.Title>
          <Card.Title className='title1'><b>25896</b></Card.Title>
          <Card.Text>
          <img src={image11} width="250px" height="150px" background="none"/>
          </Card.Text>
        </Card.Body>
      </Card>
      </Col>

      <Col sm={6}  md={4} xl={3} lg={6} style={{justifyContent:"center"}}>
      <Card border="Secondary" style={{ width: '18rem',height:"15rem" }} className="card2">
        <Card.Body  className='cardbody2'>
        <Card.Title  style={{color:"white",fontSize:'18px'}}><b>Total Retailer</b></Card.Title>
          <Card.Title className='title1'><b>25698</b></Card.Title>
          <Card.Text>
          <img src={image1} width="250px" height="150px" background="none"/>
          </Card.Text>
        </Card.Body>
      </Card>
      </Col>

      <Col sm={6}  md={4} xl={3} lg={6} style={{justifyContent:"center"}}>
      <Card border="Secondary" style={{ width: '18rem',height:"15rem" }} className="card3">
        <Card.Body  className='cardbody3'>
        <Card.Title  style={{color:"white",fontSize:'18px'}}><b>Total Customer</b></Card.Title>
          <Card.Title className='title1'><b>35363</b></Card.Title>
          <Card.Text>
          <img src={image3} width="250px" height="150px" />
          </Card.Text>
        </Card.Body>
      </Card>
      </Col>

      <Col sm={6}  md={4} xl={3} lg={6} style={{justifyContent:"center"}}>
      <Card border="Secondary" style={{ width: '18rem',height:"15rem" }} className="card4">
        <Card.Body  className='cardbody4'>
        <Card.Title style={{color:"white",fontSize:'18px'}}><b>Total Income</b></Card.Title>
          <Card.Title className='title1'><b>$14,5678</b></Card.Title>
          <Card.Text>
          <img src={image44} width="250px" height="150px" background="none"/>
          </Card.Text>
        </Card.Body>
      </Card>
      </Col>

       </Row>
       <Row>
        <Col>
        <Card border="Secondary" style={{ width: '39rem',height:"27rem" }} className="card5">
        {/* <Card.Header>Header</Card.Header> */}
        <Card.Body>
          <Card.Title>Revenue</Card.Title>
          <Card.Text>
          <Chart
      chartType="LineChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
          </Card.Text>
        </Card.Body>
      </Card>
        </Col>
        <Col>
        <Card border="Secondary" style={{ width: '38rem',height:"27rem" }} className="card6">
        {/* <Card.Header>Header</Card.Header> */}
        <Card.Body>
          {/* <Card.Title>Primary Card Title</Card.Title> */}
          <Card.Text>
          <Chart
      chartType="PieChart"
      data={data1}
      options={options1}
      width={"100%"}
      height={"400px"}
    />
          </Card.Text>
        </Card.Body>
      </Card>
      </Col>
        
       </Row>
      </Container>
      </div>
    </div>
  )
}

export default Dashboard