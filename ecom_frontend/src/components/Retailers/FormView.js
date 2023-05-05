import {useState, useEffect} from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios'
import Modal from 'react-bootstrap/Modal';
import Switch from '@mui/material/Switch';


export default function FormView() {
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

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  ///////////modal/////////
  return (
    <>
     <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Shop Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Form>
              <Row>
            <Col>         <Form.Group >
                  <Form.Label><b>Shop Id:-</b></Form.Label>
                  
          </Form.Group>
          <Form.Group >
                  <Form.Label><b>Shop Name:-</b></Form.Label>
                 
          </Form.Group>
          <Form.Group >
                  <Form.Label><b>Registration Number:-</b></Form.Label>
                 
          </Form.Group>
          <Form.Group >
                  <Form.Label><b>License Number:-</b></Form.Label>
                 
          </Form.Group>
          <Form.Group >
                  <Form.Label><b>Aadhar Number:-</b></Form.Label>
                 
          </Form.Group>
               <Form.Group >
                  <Form.Label><b>Address:-</b></Form.Label>
                 
          </Form.Group>
          <Form.Group >
                  <Form.Label><b>State:-</b></Form.Label>
                 
          </Form.Group>
          <Form.Group >
                  <Form.Label><b>City:-</b></Form.Label>
                 
          </Form.Group>
          <Form.Group >
                  <Form.Label><b>Contact:-</b></Form.Label>
                 
          </Form.Group>
          <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
           OK
          </Button>
          <Button variant="primary">Save</Button>
        </Modal.Footer>
          </Col>
              </Row>
       </Form></Row>
          </Modal.Body>
        </Modal>
     

      {/* /////Modal2////// */}
      <Modal
        show={show1}
        onHide={handleClose1}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Shop</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Form>
              <Row>
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
          <Modal.Footer>
          <Button variant="secondary" onClick={handleClose1}>
           OK
          </Button>
          <Button variant="primary">Save</Button>
        </Modal.Footer>
          </Col>
              </Row>
       </Form></Row>
          </Modal.Body>
        </Modal>



     <h3 style={{boxShadow:"1px 1px black",paddingLeft:"550px"}}>Retailers</h3>
      <Paper sx={{ width: '1200px', overflow: 'hidden',border:"1px solid silver",marginTop:"30px",marginLeft:"40px" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table" >
          <TableHead>
            <TableRow>
             <TableCell align="center" style={{backgroundColor:'#0d6efd',color:'white'}}>Shop Id</TableCell>
             <TableCell align="center" style={{backgroundColor:'#0d6efd',color:'white'}}>Shop Name</TableCell>
             <TableCell align="center" style={{backgroundColor:'#0d6efd',color:'white'}}>Contact</TableCell>
             <TableCell align="center" style={{backgroundColor:'#0d6efd',color:'white'}}>Status</TableCell>
             <TableCell align="center" style={{backgroundColor:'#0d6efd',color:'white'}}>Action</TableCell>
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
                    <TableCell align='center'>{row.id}</TableCell>
                    <TableCell align='center'><Switch {...label} defaultChecked /> </TableCell>
                    <TableCell align='center'><div style={{display:'flex',justifyContent:"center"}} >
                      <Button variant="primary" onClick={handleShow1}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white"  class="bi bi-pencil-fill" viewBox="0 0 16 16">
  <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
</svg></Button>{"  "}
<Button variant="secondary" onClick={handleShow}> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
</svg> </Button></div></TableCell>
                  
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
    </>
    
  );
}