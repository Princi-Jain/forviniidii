import {  DesktopOutlined } from '@ant-design/icons';
import {  Layout, Menu, theme } from 'antd';
import { useState } from 'react';
import {NavLink } from 'react-router-dom';
import dashboard from '../../images/dashboard.png'
import category from '../../images/category.png'
import retailer from '../../images/retailer.png'
import role from '../../images/role.png'
import subCategory from '../../images/subCategory.png'
import user from '../../images/user.png'
import image5 from '../../images/image5.png'
import offer from '../../images/offer.png'
import product from '../../images/product.png'

const {  Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
getItem(<NavLink to="/component/dashboard"><img src={dashboard}width="20px" height="20px"/> Dashboard</NavLink>, '2'),
getItem(<NavLink to="/component/users"><img src={user}width="20px" height="20px"/> Users</NavLink>, '3'),
getItem(<NavLink to="/component/roles"><img src={role}width="20px" height="20px"/> Roles</NavLink>, '4'),
getItem(<NavLink to="/component/category"><img src={category}width="20px" height="20px"/> Category</NavLink>, '5'),
getItem(<NavLink to="/component/subCategory"><img src={subCategory}width="20px" height="20px"/> SubCategory</NavLink>, '6'),
getItem(<NavLink to="/component/retailer"><img src={retailer}width="20px" height="20px"/> Retailers</NavLink>, '7'),
getItem(<NavLink to="/component/customer"><img src={image5}width="20px" height="20px"/> Customer</NavLink>, '8'),
getItem(<NavLink to="/component/offerzone"><img src={offer}width="20px" height="20px"/> Offer Zone</NavLink>, '9'),
getItem(<NavLink to="/component/ThirdPartyProduct"><img src={product}width="20px" height="20px"/> Third Party Product</NavLink>, '10'),

];
const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
   <>
     <Layout
      style={{
        minHeight: '100vh',
       flex:'0'
        
      }}
    >
    
      <Sider className='sider' style={{}} collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div
          style={{
            height: 32,
            margin: 16,
            background: 'rgba(255, 255, 255, 0.2)',
            backgroundColor:'rgba(255, 255, 255, 0.2)'
          }}
        />
        <Menu   style={{}}  theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
    
    </Layout>
    </>
  );
};
export default Sidebar;