import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Form2View from './Form2View';
import Headers from '../Headers/Headers'
import Sidebar from '../Sidebar/Sidebar'


function Offerzone() {
  return (
    <>
     <Headers/>
   <div style={{display:"flex"}}>
    <Sidebar/>
    <Tabs style={{marginLeft:'450px',marginTop:'10px'}}
      defaultActiveKey="home"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="View">
        <Form2View/>
      </Tab>
      <Tab eventKey="profile" title="Add">
       <h3>Trigger event sir will teach us</h3>
      </Tab>
    </Tabs>
    </div>
    </>
  );
}

export default Offerzone;