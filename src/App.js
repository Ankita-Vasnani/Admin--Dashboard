
import React from 'react';
import './App.css';
import Topbar from './Components/TopBar/Topbar';
import Sidebar from './Components/Sidebar/Sidebar';
import Home from './Pages/Home/Home';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserList from './Pages/Home/userList/UserList';
import User from './Pages/Home/users/User';
import Newuser from './Pages/newUser/Newuser';
import ProductList from './Pages/productlist/ProductList';
import Product from './Pages/products/Product';
import NewProduct from './Pages/newProduct/NewProduct';

function App() {
  return (
   <>
   
  
   <Router>
   <Topbar/>
   
  
  
  

<div className="container">
  <Sidebar/> 
  <Routes>
  <Route  exact path ='/' element = {<Home/>}/>
      
      
      <Route path ='/users' element = {<UserList/>}/>
      <Route path = '/users/:userId' element = {<User/>}/>
      <Route path = '/newuser' element = {<Newuser/>}/>
      <Route path = '/products' element = {<ProductList/>}/>
      <Route path = '/products/:productId' element = {<Product/>}/>
      <Route path = '/newproduct' element = {<NewProduct/>}/>
     
  </Routes>
    

  
  
</div>


   </Router>
   </>
  );
}

export default App;
