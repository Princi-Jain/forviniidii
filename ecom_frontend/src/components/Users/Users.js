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
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from 'axios'
import './Users.css'
import {useFormik} from "formik";
import user from '../../images/user.png'
import { Switch } from 'antd';
import Headers from '../Headers/Headers';
import Sidebar from '../Sidebar/Sidebar';
import moment from 'moment';
import Swal from 'sweetalert2';
import {schema} from '../../schemas';

const initialValues = {
  id:"u_01",
  name:"",
  password:""
}

export default function Users() {

  const handleChange1 = async (e,id) => {
    // e.preventDefault();


    let response = await axios.patch(
      `http://localhost:5401/api/admin/userStatusUpdate?status=active&id=${id} `
    );
    console.log(response)
  }

  const handleChange2 = async (e,id) => {
    // e.preventDefault();
    let response = await axios.patch(
      `http://localhost:5401/api/admin/userStatusUpdate?status=deactive&id=${id}`
    );
    console.log(response)
  }

const {values, errors, touched, handleBlur, handleSubmit,handleChange} = useFormik({
  initialValues: initialValues,
  validationSchema:schema,
  onSubmit: (values, action) => {
    console.log(values);
    action.resetForm();
  }
},[])
console.log(errors) 

const data3 = {
  id:values.id,
  name:values.name,
  password:values.password
}

  const baseURL ="http://localhost:5401/api/admin/Userlist"
  const [page, setPage] = useState(0);
  const [rows,setRows] = useState([])
  const [rowsPerPage, setRowsPerPage] = useState(10);

  useEffect(()=>{
    axios.get(baseURL).then(
     (response)=>{
       setRows(response.data)
     }
    )
 },[])

//  const label = { inputProps: { 'aria-label': 'Color switch demo' } };
  
 const handleChangePage = (event, newPage) => {
   setPage(newPage);
 };
 const handleChangeRowsPerPage = (event) => {
   setRowsPerPage(+event.target.value);
   setPage(0);
 };

  ///////////modal1/////////
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // //////////modal2/////////
  const [show1, setShow1] = useState(false);
   const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);
  // ////////modal3///////
  const [show3, setShow3] = useState(false);
  const handleClose3 = () => setShow3(false);
  // ////////////modal4/////
  const [smShow, setSmShow] = useState(false);
  /////////////modal5///////////
  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);
  // //////////////////
  ////////////////Role Assign////////////
  const [userId,setUserId] = useState('');
  const [username,setUsername]= useState('')

 const assignRole = (id,name) => {
  setShow3(true);
  setUserId(id)
  setUsername(name)
  console.log("userID", userId)
  }

const [roleOption,setRoleOption] = useState([])
const [selectedOption,setSelectedOption] = useState(' ');

async function assignRoles(){
  const response = await axios.get('http://localhost:5401/api/admin/viewroles')
  setRoleOption(response.data)
  console.log("assignRoles",assignRoles)
}


useEffect(() => {assignRoles()},[])  

function handleOptionChange(event) {
  setSelectedOption(event.target.value)
}

const data = {
  id:userId,
 roleid:selectedOption
  }

async function postRoleAssign() {
  let res = await axios.post('http://localhost:5401/api/admin/postassignroles',data,{
    headers:{
      "Content-Type":"application/json"
    }
    }
)
alert1(res)
}
// console.log(res)

///////////////sweet alert////
const alert1 = (res)=>{
  if(res.status===200){
Swal.fire({
  title: 'Successfull',
  text: "Role Assigned Sussessfully",
  icon: 'success',
  showCancelButton: true
})}else {
  Swal.fire({
  title: 'Not Successfull',
  text: "Try Again",
  icon: 'warning',
  showCancelButton: true
  })
}
} 
////////////revoke///////
// const [revokeid,setRevokeid] =useState()
const [revokeroleid,setRevokeroleid] =useState()

async function roleid1(roleid){

  // let response1 = await axios.post('http://localhost:5401/api/admin/revokeroles')
  setRevokeroleid(roleid)
  // console.log("hii",response1.data)
  //   console.log("ji",response1) 
  //   // console.log("hey",response1.data[0])
  //   console.log("id",response1.data[0].id)
  //   console.log("roleid",response1.data[0].roleid)
  //    setRevokeroleid(response1.data[0].roleid)
  //    setRevokeid(response1.data[0].id)
  //   //  console.log("hello",revokeid)
    //  console.log("hiii",revokeroleid)
     revoke()
    //  console.log("hey",revokeroleid)
  }

async function revoke(){
 

  let response = await axios.delete(`http://localhost:5401/api/admin/deleterole?id=${userId}&roleid=${revokeroleid}`)
  console.log("res",response)
}
console.log("first",userId)
console.log("jb",revokeroleid)
///////Role view button////////
const [view,setView] =useState("")
const [viewr,setViewr] =useState("")

function view1(id){
  setView(id) 
  viewDetail() 
  setSmShow(true)
}
async function viewDetail(id){
  let response = await axios.get(`http://localhost:5401/api/admin/viewdetail?id=${view}`)  
  console.log(response)
  setViewr(response.data)
  console.log(viewr)
}
useEffect(()=>{viewDetail()},[])
// console.log("view",view)
// console.log("viewr",viewr)

//////////View button///////
const [userprofileid,setUserprofileid] =useState()
const [userprofiledata,setUserprofiledata] =useState([])
const [userPhoto,setUserPhoto] =useState()
const [userMbl,setUserMbl] =useState()
const [userEmail,setUserEmail] =useState()
const [useraadhar,setUserAadhar] =useState()
const [useraddress,setUserAddress] =useState()
const [userstate,setUserState] =useState()
const [usercity,setUserCity] =useState()
const [userPincode,setUserPincode] =useState()

function userProfile1(id){
  setUserprofileid(id)
  userProfile()
  handleShow2()
}
async function userProfile(){
  let response = await axios.get(`http://localhost:5401/api/admin/getuserprofile?id=${userprofileid}`)
  
  console.log("bjkb",response)
  console.log("hii",response.data)
  console.log("hehehe",response.data[0])
  console.log("hello",response.data[0].mbl_no)
  setUserprofiledata(response.data)
  setUserMbl(response.data[0].mbl_no)
  setUserEmail(response.data[0].email)
  setUserAadhar(response.data[0].aadhar_no)
  setUserAddress(response.data[0].address)
  setUserState(response.data[0].state)
  setUserCity(response.data[0].city)
  setUserPincode(response.data[0].pincode)
  setUserPhoto(response.data[0].photo)
  console.log(userprofiledata)
}

/////////add user///////////
const [add,setAdd] = useState()
async function AddUser() {
  let res = await axios.post('http://localhost:5401/api/admin/registerUser',data3,{
    headers:{
      "Content-Type":"application/json"
    }
})
console.log(res)
console.log(res.status)
if(res.status===200){
  setAdd("user registered")
}else{
  setAdd("Try Again!!")
}
}

////////////update//////
const [userid,setUserid]=useState("")
const [username1,setUsername1]=useState("")
const [password,setPassword]=useState("")

function updateform(id,name,password,status,createdOn){
 console.log(id,name,password,status,createdOn)
 setUserid(id)
 setUsername1(name)
 setPassword(password) 
 handleShow1()
//  console.log(createdon)
}

async function updatedData(){
  let response = await axios.put(`http://localhost:5401/api/admin/userModify/${userid}`,{
    name:username1,
    password:password
})
console.log(response)
}
/////////////


return (
    <>
    {/* ////////modal1///////// */}
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
          <Modal.Title>Add User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={handleSubmit}>
            <Form.Group >
                  <Form.Label><b>User Id </b></Form.Label>
                  <Form.Control type="text" id="id" name="id" value={values.id} onChange={handleChange} onBlur={handleBlur} />
                  {errors.id && touched.id ? (<p className='error' style={{color:'red'}}>{errors.id}</p>):null}
          </Form.Group>

          <Form.Group >
                  <Form.Label><b>UserName</b></Form.Label>
                  <Form.Control type="text" id="name" name="name" value={values.name} onChange={handleChange} onBlur={handleBlur}/>
                  {errors.name && touched.name ? (<p className='error' style={{color:'red'}}>{errors.name}</p>):null}
          </Form.Group>
         
          <Form.Group >
                  <Form.Label><b>Password</b></Form.Label>
                  <Form.Control type="password" id="password" name="password" value={values.password} onChange={handleChange} onBlur={handleBlur} />
                  {errors.password && touched.password ? (<p className='error' style={{color:'red'}}>{errors.password}</p>):null}
          </Form.Group>
               <p>{add}</p>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>AddUser()} >Save</Button>
        </Modal.Footer>
      </Modal>

      {/* /////////modal2////// */}
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
                  <Form.Label><b>User Id </b></Form.Label>
                  <Form.Control type="text" id="id" value={userid} onChange={(e)=>setUserid(e.target.value)}/>
          </Form.Group>

          <Form.Group >
                  <Form.Label><b>UserName</b></Form.Label>
                  <Form.Control type="text" id="name" value={username1} onChange={(e)=>setUsername1(e.target.value)} />
          </Form.Group>

          <Form.Group >
                  <Form.Label><b>Password</b></Form.Label>
                  <Form.Control type="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
          </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose1}>
           close
          </Button>
          <Button variant="primary" onClick={updatedData}>Save changes</Button>
        </Modal.Footer>
      </Modal>
{/* ////////// */}
{/* ///////modal3////////// */}
<Modal
        show={show3}
        onHide={handleClose3}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Assign Role</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
            <Form.Group >
                  <Form.Label><b>User Id </b></Form.Label>
                  <Form.Control type="text" id="userId" value={userId} readOnly/>
          </Form.Group>

          <Form.Group >
                  <Form.Label><b>UserName</b></Form.Label>
                  <Form.Control type="text" id="username" value={username} readOnly/>
          </Form.Group>

          <Form.Group > 
                  <Form.Label><b>Assign Role</b></Form.Label>
                  <select style={{display:"block", border:'1px solid grey' }} onClick={()=>assignRoles()} value={selectedOption} onChange={handleOptionChange}>
                    <option >Choose role</option>
                   {roleOption.map((option,index) => (
                    <option key={index} value={option.value} >
                    {option.roleid},{option.rolename}
                     </option>
                   ))
                     }
                  </select>
                 </Form.Group>
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={()=>(postRoleAssign())}>Save</Button>
        </Modal.Footer>
      </Modal>
      {/* ///////////////// */}
      {/* //////////modal4 */}
      <Modal
size="sm"
show={smShow}
onHide={() => setSmShow(false)}
aria-labelledby="example-modal-sizes-title-sm">

 <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            Assigned Role
          </Modal.Title>
        </Modal.Header>
<Modal.Body>

  <Form.Group>
    {viewr && viewr.map((element) => {
      return (<div style={{display:"flex",justifyContent:"space-evenly"}}>{element.rolename} <button onClick={()=>roleid1(element.roleid)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-scissors" viewBox="0 0 16 16">
      <path d="M3.5 3.5c-.614-.884-.074-1.962.858-2.5L8 7.226 11.642 1c.932.538 1.472 1.616.858 2.5L8.81 8.61l1.556 2.661a2.5 2.5 0 1 1-.794.637L8 9.73l-1.572 2.177a2.5 2.5 0 1 1-.794-.637L7.19 8.61 3.5 3.5zm2.5 10a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0zm7 0a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z"/>
    </svg></button></div>)}
       )}
       
 </Form.Group>
</Modal.Body>
</Modal>
{/* ///////modal5//// */}
<Modal show={show2} onHide={handleClose2}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <Form.Group >
                 userId:-
                 userID :- <Form.Control type="text" id="id" value={userprofileid} onChange={(e)=>setUserprofileid(e.target.value)} readOnly/>
          </Form.Group>

          <Form.Group >
                  Photo:-
                  <Form.Control type="text" id="photo" value={userPhoto} onChange={(e)=>setUserPhoto(e.target.value)} readOnly/>
          </Form.Group>

          <Form.Group >
                  Mobile:-
                  <Form.Control type="text" id="photo" value={userMbl} onChange={(e)=>setUserMbl(e.target.value)} readOnly/>
          </Form.Group>

          <Form.Group >
                  Email:-
                  <Form.Control type="text" id="photo" value={userEmail} onChange={(e)=>setUserEmail(e.target.value)} readOnly/>
          </Form.Group>

          <Form.Group >
                 Aadhar:-
                  <Form.Control type="text" id="photo" value={useraadhar} onChange={(e)=>setUserAadhar(e.target.value)} readOnly/>
          </Form.Group>

          <Form.Group >
                  Address:-
                  <Form.Control type="text" id="photo" value={useraddress} onChange={(e)=>setUserAddress(e.target.value)} readOnly/>
          </Form.Group>

          <Form.Group >
                  State:-
                  <Form.Control type="text" id="photo" value={userstate} onChange={(e)=>setUserState(e.target.value)} readOnly/>
          </Form.Group>

          <Form.Group >
                  City:-
                  <Form.Control type="text" id="photo" value={usercity} onChange={(e)=>setUserCity(e.target.value)} readOnly/>
          </Form.Group>

          <Form.Group >
                  Pincode:-
                  <Form.Control type="text" id="photo" value={userPincode} onChange={(e)=>setUserPincode(e.target.value)} readOnly/>
          </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose2}>
            Close
          </Button>
         
        </Modal.Footer>
      </Modal>
      {/* ////////// */}

       <Card  className='card1' sx={{ minWidth:1300}}>
     <CardContent>
      <h3 className='heading1' style={{boxShadow:"1px 1px black",marginBottom:'95px',marginTop:"-70px"}}>Users Detail</h3>
      
      <img src={user} onClick={handleShow} style={{width:'40px',marginLeft:'10px',marginBottom:'-5px',marginTop:"-120px"}} />
      <h6 style={{color:"darkblue",fontSize:'10px',marginLeft:'50px',marginBottom:'40px',marginTop:"-60px",paddingBottom:'10px'}}>AddPeople</h6>
      <Form.Control style={{width:'16rem',marginLeft:'900px',marginTop:'-90px'}} type="text" placeholder='Search here...'  />
      
        <Paper  sx={{ width: '100%', overflow: 'hidden',marginTop:"10px" }}>
      <TableContainer sx={{ maxHeight: 400 }}>
        <Table stickyHeader aria-label="sticky table" >
          <TableHead >
            <TableRow >
             <TableCell align="center" style={{backgroundColor:'#0d6efd',color:'white'}}>UserId</TableCell>
             <TableCell align="center"  style={{backgroundColor:'#0d6efd',color:'white'}}>UserName</TableCell>
             <TableCell align="center"  style={{backgroundColor:'#0d6efd',color:'white'}}>Role</TableCell>
             <TableCell align="center"  style={{backgroundColor:'#0d6efd',color:'white'}}>Status</TableCell>
             <TableCell align="center"  style={{backgroundColor:'#0d6efd',color:'white'}}>Created On</TableCell>
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
                    <TableCell align="center"><div style={{display:"flex",justifyContent:"space-evenly"}}>
                      <Button variant="outline-success" onClick={()=>view1(row.id)}>View</Button>{" "} <Button variant="outline-success" onClick={()=>assignRole(row.id,row.name)}>Assign</Button></div> </TableCell>

                    <TableCell align='center' >
                    {
                      row.status == "deactive" ? (
                        <Switch 
                          onChange={(e) => handleChange1(e,row.id)}
                          inputProps={{ "aria-label": "controlled" }}
                        />
                      ) : (
                        <Switch 
                        defaultChecked
                          onChange={(e) => handleChange2(e,row.id)}
                          inputProps={{ "aria-label": "controlled" }}
                        />
                      )

                    }
                      
                      
                      </TableCell>

                    <TableCell align='center'>{moment(row.createdon).format('MMMM Do YYYY, h:mm:ss a')}</TableCell>
                    <TableCell align='center'><div style={{justifyContent:"space-evenly",display:"flex"}}>
                       <Button variant="primary" onClick={()=>updateform(row.id,row.name,row.password,row.status,row.createdOn)} ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white"  className="bi bi-pencil-fill" viewBox="0 0 16 16">
  <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
</svg></Button>
<Button  onClick={()=>userProfile1(row.id)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye-slash" viewBox="0 0 16 16">
  <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
  <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
  <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
</svg></Button>
</div></TableCell>

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