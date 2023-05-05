import react,{useEffect, useState} from "react"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import image5 from '../../images/image5.png';
import Logo1 from '../../images/Logo1.png'
import Dropdown from 'react-bootstrap/Dropdown';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './Headers.css';
import axios from 'axios'


function Headers() {
  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

/////////get user modal1////////
// const []

async function chanegepassword(){
 let response = await axios.get('localhost:5401/api/admin/Userlist')  
 console.log(response)   
}
useEffect(()=>{chanegepassword()},[]) 

  return (
    <>
    <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: "#001529" }}>
      <Container>
        <Navbar.Brand className='nav1' style={{ color: "yellow" }}>
          <div><img src={Logo1} width='70px' height='50px' /><span style={{ paddingLeft: '5px', paddingTop: '20px' }}>Shop24*7</span></div>
          <div style={{ display: "flex" }}><h5  style={{ color: 'white' }}>Welcome: Princi Jain</h5>
            <div  > <img src={image5} width="50px" height="50px" /></div>
            <Dropdown>
              <Dropdown.Toggle id="dropdown-basic" className='navbtn1' style={{ backgroundColor: '#001529', height: '0px', width: '0px', border: 'solid 1px #001529', marginTop: '20px', paddingRight: '10px' }}> </Dropdown.Toggle>
              <Dropdown.Menu className='navbtn2' style={{ backgroundColor: '#001529', color: 'white' }}>
                <Dropdown.Item href="#/action-1" style={{ color: 'white' }}> Profile</Dropdown.Item>
                <Dropdown.Item href="#/action-1" style={{ color: 'white' }} onClick={handleShow1}>Change Password</Dropdown.Item>
                

                <NavLink to="/"><Dropdown.Item href="#/action-2" style={{ color: 'white',textDecoration:"none" }}>Log out</Dropdown.Item></NavLink>
              </Dropdown.Menu>
            </Dropdown></div>
            </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto " >
             </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    {/* //////////modal1////////// */}
   
   <Modal show={show1} onHide={handleClose1}>
        <Modal.Header closeButton>
          <Modal.Title>Change Password </Modal.Title>
        </Modal.Header>
        <Modal.Body><div style={{display:"flex",justifyContent:"space-evenly"}}>Old Password:-<input type="text"/></div><br/>
        <div style={{display:"flex",justifyContent:"space-evenly"}}>New Password:-<input type="password"/></div><br/>
        <div style={{display:"flex",justifyContent:"space-evenly"}}>Renew Password:-<input type="password"/></div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose1}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose1}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
</>);
}



export default Headers