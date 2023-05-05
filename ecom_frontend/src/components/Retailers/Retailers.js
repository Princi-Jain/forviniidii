import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import FormView from './FormView'
import AddForm from './AddForm';
import Headers from '../Headers/Headers'
import Sidebar from '../Sidebar/Sidebar'

function Retailer() {
  return (
    <>
     <Headers/>
   <div style={{display:"flex"}}>
    <Sidebar/>
    <div style={{width:"100%"}}>
      <Tabs style={{marginLeft:"450px"}}
      defaultActiveKey="home"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="View" >
        <FormView/>
      </Tab>
      <Tab eventKey="profile" title="Add">
       <AddForm/>
      </Tab>
     
    </Tabs></div>
    
    </div>
    </>
  );
}

export default Retailer;