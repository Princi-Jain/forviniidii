import {useState, useEffect} from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios'
import Modal from 'react-bootstrap/Modal';
import Switch from '@mui/material/Switch';


export default function Form2View() {
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
  return (
    <>
     <h3 className='heading1' style={{boxShadow:"1px 1px black"}}>Retailers</h3>
      <Paper sx={{ width: '1280px', overflow: 'hidden',marginTop:"50px",marginTop: "120px",
    marginLeft: "-551px",border:"1px solid silver", }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
             <TableCell align="center" style={{backgroundColor:'#0d6efd',color:'white'}}>Offer Id</TableCell>
             <TableCell align="center"style={{backgroundColor:'#0d6efd',color:'white'}}>Offer Name</TableCell>
             <TableCell align="center"style={{backgroundColor:'#0d6efd',color:'white'}}>Offer Code</TableCell>
             <TableCell align="center"style={{backgroundColor:'#0d6efd',color:'white'}}>Valid From</TableCell>
             <TableCell align="center"style={{backgroundColor:'#0d6efd',color:'white'}}>Valid Upto</TableCell>
             <TableCell align="center"style={{backgroundColor:'#0d6efd',color:'white'}}>Discount</TableCell>
             <TableCell align="center"style={{backgroundColor:'#0d6efd',color:'white'}}>Status</TableCell>
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
                    <TableCell align='center'>{row.id}</TableCell>
                    <TableCell align='center'>{row.name} </TableCell>
                    <TableCell align='center'>{row.id}</TableCell>
                    <TableCell align='center'><Switch {...label} defaultChecked /> </TableCell>
                    
                  
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