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
import './Category.css'
import {useFormik} from "formik";
import Modal from 'react-bootstrap/Modal';
import Headers from '../Headers/Headers'
import Sidebar from '../Sidebar/Sidebar'
import { category } from '../../schemas/category';

const initialValues = {
  category_id:"",
  category_name:"",
  category_image:"",
  gst:""
  }

export default function Roles() {
  const baseURL ="http://localhost:5401/api/admin//categorylist"
  const [page, setPage] = useState(0);
  const [rows,setRows] = useState([])
  const [rowsPerPage, setRowsPerPage] = useState(10);
    useEffect(()=>{
     axios.post(baseURL).then(
      (response)=>{
        setRows(response.data)
      }
     )
  },[])

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };


/////////////add category///////////
  const {values, errors, touched, handleBlur, handleSubmit,handleChange} = useFormik({
    initialValues: initialValues,
    validationSchema:category,
    onSubmit: (values, action) => {
      console.log(values);
      action.resetForm();
    }
  },[])
  console.log(errors) 

  const data = {
    category_id:values.category_id,
    category_name:values.category_name,
    category_image:values.category_image,
    gst:values.gst
  }
  ///////////update category/////////
 const [catid,setCatid] = useState()
 const [catname,setCatname] = useState()

 function updateCat(category_id,category_name){
  setCatid(category_id)
  setCatname(category_name)
  handleShow1()
 }

async function updatecategory(){
  let response = await axios.put(`http://localhost:5401/api/admin/updatecategory?category_id=${catid}`,{
    category_name:catname
  })

 }
///////////////

  async function postCategory() {
    let res = await axios.post('http://localhost:5401/api/admin/addcategory',data,{
      headers:{
        "Content-Type":"application/json"
      }
    })
  console.log(res)}


  ///////////modal/////////
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  // const handleChange = (e) => {
  //   const newdata = { ...details}
  //   newdata[e.target.id] = e.target.value
  //   setDetails(newdata) 
  // }

  return (
    <>
      <Headers/>
   <div style={{display:"flex"}}>
    <Sidebar/>
        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={handleSubmit}>
            <Form.Group >
                  <Form.Label><b>Category Id </b></Form.Label>
                  <Form.Control type="text" id="category_id" name="category_id" value={values.category_id} onChange={handleChange} onBlur={handleBlur} />
                  {errors.category_id && touched.category_id ? (<p className='error' style={{color:'red'}}>{errors.category_id}</p>):null}
          </Form.Group>
          <Form.Group >
                  <Form.Label><b>Category Name </b></Form.Label>
                  <Form.Control type="text" id="category_name" name="category_name" value={values.category_name} onChange={handleChange} onBlur={handleBlur} />
                  {errors.category_name && touched.category_name ? (<p className='error' style={{color:'red'}}>{errors.category_name}</p>):null}
          </Form.Group>
          <Form.Group >
                  <Form.Label><b>Category Image</b></Form.Label>
                  <Form.Control type="text"  id="category_image" name="category_image" value={values.category_image} onChange={handleChange} onBlur={handleBlur} />
                  {errors.category_image && touched.category_image ? (<p className='error' style={{color:'red'}}>{errors.category_image}</p>):null}
          </Form.Group>
          <Form.Group >
                  <Form.Label><b>Gst Added</b></Form.Label>
                  <Form.Control type="text" id="gst" name="gst" value={values.gst} onChange={handleChange} onBlur={handleBlur} />
                  {errors.gst && touched.gst ? (<p className='error' style={{color:'red'}}>{errors.gst}</p>):null}
          </Form.Group>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={postCategory}>Save</Button>
        </Modal.Footer>
      </Modal>

      {/* ///////////Modal2////////// */}
      <Modal
        show={show1}
        onHide={handleClose1}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
            <Form.Group >
                  <Form.Label><b>Category Id </b></Form.Label>
                  <Form.Control type="text" value={catid} onChange={(e)=>setCatid(e.target.value)}  />
          </Form.Group>
          <Form.Group >
                  <Form.Label><b>Category Name </b></Form.Label>
                  <Form.Control type="text"  value={catname} onChange={(e)=>setCatname(e.target.value)} />
          </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose1}>
            Close
          </Button>
          <Button variant="primary" onClick={updatecategory}>Save</Button>
        </Modal.Footer>
      </Modal>
      {/* ///////////// */}


       <Card  className='card1' sx={{ minWidth:1200}}>
     <CardContent>
     <h3 className='heading1' style={{boxShadow:"1px 1px black",marginBottom:'40px',marginTop:'-80px'}}>Category List</h3>
     <Button variant="primary" onClick={handleShow} style={{marginTop:'30px',marginBottom:"20px"}}>+New </Button>
      <Paper sx={{ width: '100%', overflow: 'hidden',marginTop:"-10px",border:"1px solid silver" }}>
      <TableContainer sx={{ maxHeight: 400 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
             <TableCell align="center"  style={{backgroundColor:'#0d6efd',color:'white'}}>Category Id</TableCell>
             <TableCell align="center" style={{backgroundColor:'#0d6efd',color:'white'}}>Category Name</TableCell>
             <TableCell align="center" style={{backgroundColor:'#0d6efd',color:'white'}}>Category Image</TableCell>
             <TableCell align="center" style={{backgroundColor:'#0d6efd',color:'white'}}>Gst Added</TableCell>
             <TableCell align="center" style={{backgroundColor:'#0d6efd',color:'white'}}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    <TableCell align='center'>{row.category_id}</TableCell>
                    <TableCell align='center'>{row.category_name} </TableCell>
                    <TableCell align='center'>{row.category_image} </TableCell>
                    <TableCell align='center'>{row.gst} </TableCell>
                    <TableCell align='center'><Button variant="primary" onClick={()=>updateCat(row.category_id,row.category_name)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white"  class="bi bi-pencil-fill" viewBox="0 0 16 16">
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