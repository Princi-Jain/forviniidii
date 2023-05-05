import React from 'react'
import {Route, Routes } from "react-router-dom";
import Dashboard from './components/Dashboard/Dashboard'
import Users from './components/Users/Users'
import Roles from './components/Roles/Roles';
import Category from './components/Category/Category';
import SubCategory from './components/SubCategory/SubCategory';
import Retailers from './components/Retailers/Retailers';
import Customer from './components/Customer/Customer'
import Offerzone from './components/Offerzone/Offerzone'
import Login from './components/Login/Login'
import ThirdPartyProduct from './components/ThirdPartyProduct/ThirdPartyProduct'

const App = () => {
  return (
    <>
<Routes>
<Route path="/" element={<Login/>} />
<Route path="/component/dashboard" element={<Dashboard />} />
<Route path="/component/users" element={<Users/>} />
<Route path="/component/roles" element={<Roles/>} />
<Route path="/component/category" element={<Category/>} />
<Route path="/component/subcategory" element={<SubCategory/>} />
<Route path="/component/retailer" element={<Retailers/>} />
<Route path="/component/customer" element={<Customer/>}/>
<Route path="/component/offerzone" element={<Offerzone/>}/>
<Route path="/component/ThirdPartyProduct" element={<ThirdPartyProduct/>}/>
</Routes>
      </>
  )
}

export default App