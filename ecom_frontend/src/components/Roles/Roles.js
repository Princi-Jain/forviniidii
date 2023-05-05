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
import './Roles.css'
import {useFormik} from "formik";
import Modal from 'react-bootstrap/Modal';
import Headers from '../Headers/Headers'
import Sidebar from '../Sidebar/Sidebar'
import {roles} from '../../schemas/roles'

const initialValues = {
  roleid:"",
  rolename:""
  }

export default function Roles() {
  const [page, setPage] = useState(0);
  const [rows,setRows] = useState([])
  const [rowsPerPage, setRowsPerPage] = useState(10);
 
 const baseURL ="http://localhost:5401/api/admin/viewroles"
  useEffect(()=>{
     axios.get(baseURL).then(
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
 // const [details,setDetails] = useState({
  //   roleid:"",
  //   rolename:""
  // })

  // const handleChange = (e) => {
  //   const newdata = { ...details}
  //   newdata[e.target.id] = e.target.value
  //   setDetails(newdata) 
  // }
/////////formik/////////
const {values, errors, touched, handleBlur, handleSubmit,handleChange} = useFormik({
  initialValues: initialValues,
  validationSchema:roles,
  onSubmit: (values, action) => {
    console.log(values);
    action.resetForm();
  }
},[])
console.log(errors) 

const data = {
  roleid:values.roleid,
  rolename:values.rolename
}

  ////////////update role//////
const [roleID,setRoleId]= useState("")
const [roleEdit,setRoleEdit] = useState("")

function updateRole(roleid,rolename){
  console.log(roleid,rolename)
  setRoleId(roleid)
  setRoleEdit(rolename)
  handleShow1()
}
async function updateform(){
  let response = await axios.put(`http://localhost:5401/api/admin/updaterole?${roleID}`,{
    // roleid:roleID,
   rolename:roleEdit
})
console.log(response)
} 
///////////////Add Role///////////////
//   const data = {
//     roleid :details.roleid,
//     rolename:details.rolename
//  }

  async function postRole() {
    let res = await axios.post('http://localhost:5401/api/admin/addrole',data,{
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
          <Modal.Title>Add Role </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={handleSubmit}>
            <Form.Group >
                  <Form.Label><b>Role Id </b></Form.Label>
                  <Form.Control  type="text"  id="roleid" name="roleid" value={values.roleid} onChange={handleChange} onBlur={handleBlur} />
                  {errors.roleid && touched.roleid ? (<p className='error' style={{color:'red'}}>{errors.roleid}</p>):null}
          </Form.Group>
          <Form.Group >
                  <Form.Label><b>Role Name </b></Form.Label>
                  <Form.Control type="text" id="rolename" name="rolename" value={values.rolename} onChange={handleChange} onBlur={handleBlur} />
                  {errors.rolename && touched.rolename ? (<p className='error' style={{color:'red'}}>{errors.rolename}</p>):null}
          </Form.Group>
          </Form> 
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={postRole}>Add</Button>
        </Modal.Footer>
      </Modal>

      {/* //////////////[ / */}
      {/* //////modal2 */}
      
        <Modal
        show={show1}
        onHide={handleClose1}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit RoleName 
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
            <Form.Group >
                  <Form.Label><b>Role Id </b></Form.Label>
                  <Form.Control type="text" value={roleID} onChange={(e)=>setRoleId(e.target.value)} />
          </Form.Group>
          <Form.Group >
                  <Form.Label><b>Role Name </b></Form.Label>
                  <Form.Control type="text" value={roleEdit} onChange={(e)=>setRoleEdit(e.target.value)} />
          </Form.Group>
             </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose1}>
            Close
          </Button>
          <Button variant="primary" onClick={updateform}>Save</Button>
        </Modal.Footer>
      </Modal>
{/* ///////////////// */}
       <Card  className='card1' sx={{ minWidth:1300}}>
     <CardContent>
     <h3 className='heading1' style={{boxShadow:"1px 1px black",marginBottom:'55px',marginTop:'-80px'}}>Roles</h3>
     <Button variant="primary" onClick={handleShow} style={{marginTop:'10px'}}>+New</Button>
      <Paper sx={{ width: '100%', overflow: 'hidden',marginTop:"20px",border:"1px solid silver" }}>
      <TableContainer sx={{ maxHeight: 400 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
             <TableCell align="center"  style={{backgroundColor:'#0d6efd',color:'white'}}>RoleId</TableCell>
             <TableCell align="center"  style={{backgroundColor:'#0d6efd',color:'white'}}>Name</TableCell>
             <TableCell align="center"  style={{backgroundColor:'#0d6efd',color:'white'}}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) 
              .map((row) => {
                console.log(row)
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    <TableCell align='center'>{row.roleid}</TableCell>
                    <TableCell align='center'>{row.rolename} </TableCell>
                    <TableCell align='center'><Button variant="primary" onClick={()=>updateRole(row.roleid,row.rolename)} ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white"  class="bi bi-pencil-fill" viewBox="0 0 16 16">
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