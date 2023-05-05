import {useState, useEffect} from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios'
import './Customer.css'
import user from '../../images/user.png'
import Modal from 'react-bootstrap/Modal';
import Switch from '@mui/material/Switch';
import Headers from '../Headers/Headers'
import Sidebar from '../Sidebar/Sidebar'


export default function Customer() {
  const baseURL =""
  const [page, setPage] = useState(0);
  // const [rows,setRows] = useState([])
  const [rowsPerPage, setRowsPerPage] = useState(10);

  // useEffect((baseURL)=>{
  //    axios.get().then(
  //     (response)=>{
  //       setRows(response.data)
  //     }
  //    )
  // },[])
  
  function createData(name, code, population, size) {
    const density = population / size;
    return { name, code, population, size, density };
  }
  const label = { inputProps: { 'aria-label': 'Color switch demo' } };
  
  const rows = [
    createData('India', 'IN', 1324171354, 3287263),
    createData('China', 'CN', 1403500365, 9596961),
    createData('Italy', 'IT', 60483973, 301340),
    createData('United States', 'US', 327167434, 9833520),
    createData('Canada', 'CA', 37602103, 9984670),
    createData('Australia', 'AU', 25475400, 7692024),
    createData('Germany', 'DE', 83019200, 357578),
    createData('Ireland', 'IE', 4857000, 70273),
    createData('Mexico', 'MX', 126577691, 1972550),
    createData('Japan', 'JP', 126317000, 377973),
    createData('France', 'FR', 67022000, 640679),
    createData('United Kingdom', 'GB', 67545757, 242495),
    createData('Russia', 'RU', 146793744, 17098246),
    createData('Nigeria', 'NG', 200962417, 923768),
    createData('Brazil', 'BR', 210147125, 8515767),
  ];

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  // //////////modal2/////////
  const [show1, setShow1] = useState(false);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);
  


  return (
    <>
      {/* /////////modal2////// */}
      <Headers/>
   <div style={{display:"flex"}}>
    <Sidebar/>
      <Modal
        show={show1}
        onHide={handleClose1}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
            <Form.Group >
                  <Form.Label><b>Customer Id </b></Form.Label>
                  <Form.Control type="text"  />
          </Form.Group>

          <Form.Group >
                  <Form.Label><b>Customer Name</b></Form.Label>
                  <Form.Control type="password"  />
          </Form.Group>

          <Form.Group >
                  <Form.Label><b>City</b></Form.Label>
                  <Form.Control type="text" />
          </Form.Group>

          <Form.Group >
                  <Form.Label><b>Status</b></Form.Label>
                  <Form.Control type="Number"/>
          </Form.Group>

          <Form.Group >
                  <Form.Label><b>Mobile Number</b></Form.Label>
                  <Form.Control type="text" />
          </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose1}>
           close
          </Button>
          <Button variant="primary">Save</Button>
        </Modal.Footer>
      </Modal>


       <Card  className='card1' sx={{ minWidth:1300}}>
     <CardContent>
      <h3 className='heading1' style={{boxShadow:"1px 1px black"}}>Customers Detail</h3>
      
      {/* <img src={user} onClick={handleShow} style={{width:'40px',marginLeft:'10px',marginBottom:'-5px',marginTop:"-80px"}} />
      <h6 style={{color:"darkblue",fontSize:'10px',marginLeft:'50px',marginBottom:'40px',marginTop:"-40px"}}>AddPeople</h6> */}
      <Form.Control style={{width:'16rem',marginLeft:'880px',marginTop:'-80px'}} type="text" placeholder='Search here...'  />
      
        <Paper sx={{ width: '100%', overflow: 'hidden',marginTop:"10px" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead >
            <TableRow >
             <TableCell align="center" style={{backgroundColor:'#0d6efd',color:'white'}}>CustomerId</TableCell>
             <TableCell align="center"  style={{backgroundColor:'#0d6efd',color:'white'}}>Customer Name</TableCell>
             <TableCell align="center"  style={{backgroundColor:'#0d6efd',color:'white'}}>City</TableCell>
             <TableCell align="center"  style={{backgroundColor:'#0d6efd',color:'white'}}>Status</TableCell>
             <TableCell align="center"  style={{backgroundColor:'#0d6efd',color:'white'}}>Mobile Number</TableCell>
             <TableCell align="center"  style={{backgroundColor:'#0d6efd',color:'white'}}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    <TableCell align='center'>{row.id}</TableCell>
                    <TableCell align='center'>{row.name} </TableCell>
                    <TableCell align="center">{row.population}</TableCell>
                    <TableCell align='center'><Switch {...label} defaultChecked /> </TableCell>
                    <TableCell align='center'>{row.code}</TableCell>
                    <TableCell align='center'><Button variant="primary" onClick={handleShow1} ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white"  class="bi bi-pencil-fill" viewBox="0 0 16 16">
  <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
</svg></Button></TableCell>
                  
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 15]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
      </CardContent>
      </Card>
     
      </div>
    </>
    
  );
}