import './NewProduct.css';
import React from 'react';

const NewProduct = ()=>{
    return(
<div className="newproduct">
   <h1 className="addproductTitle">New Product</h1>
   <form  className="addProductForm">
    <div className="addProductItem">
        <label >Image</label>
        <input type="file" id = 'file' />
    </div>
    <div className="addProductItem">
        <label >Name</label>
        <input type='text' placeholder='Apple Airpods' />
    </div>
    <div className="addProductItem">
        <label >Stock</label>
        <input type='text' placeholder='1234' />
    </div>
    <div className="addProductItem">
        <label >Active</label>
       <select name="active" id="idactive">
        <option value="yes">yes</option>
        <option value="no">no</option>
       </select>
    </div>
    <button className="addProductBtn">Create</button>

   </form>
</div>
    );
};
export default NewProduct;