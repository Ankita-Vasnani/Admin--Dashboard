import { NavLink } from 'react-router-dom';
import './Product.css';
import React from 'react';
import Chart from '../../Components/charts/Chart';
import {productdata} from '../../DummyData';
import { Publish } from '@mui/icons-material';

const Product = ()=>{
    return(
<div className="product">
   <div className="productTitleContainer">
    <h1 className="productTitle">Product</h1>
   <NavLink to ='/newproduct'>
   <button className="productAddbtn">Create</button>
   </NavLink>
    
   </div>
   <div className="productTop">
    <div className="productTopLeft">
        <Chart data = {productdata} dataKey = 'Sales' title = 'Sales Performance'/>
        </div>   
    <div className="productTopRight">
        <div className="productInfoTop">
            <img src="https://5.imimg.com/data5/SELLER/Default/2021/7/FI/IY/ML/118435366/apple-airpods-pro.jpg" alt="" className="productInfoImg" />
        <span className="productName">Apple Airpods</span>
        </div>
        <div className="productInfoBottom">
            <div className="productInfoItem">
                <span className="productInfoKey">id</span>
                <span className="productInfoValue">123</span>
            </div>
            <div className="productInfoItem">
                <span className="productInfoKey">sales</span>
                <span className="productInfoValue">5123</span>
            </div>
            <div className="productInfoItem">
                <span className="productInfoKey">active</span>
                <span className="productInfoValue">yes</span>
            </div>
            <div className="productInfoItem">
                <span className="productInfoKey">in stock:</span>
                <span className="productInfoValue">no</span>
            </div>
        </div>
    </div>
   </div>
   <div className="productBottom">
    <form  className="productform">
        <div className="productformLeft">
            <label >Product Name</label>
            <input type="text" placeholder='Apple Airpods' />
            <label >In Stock</label>
            <select name="inStock" id="idStock">
                <option value="yes">yes</option>
                <option value="no">no</option>
            </select>
            <label >Active</label>
            <select name="inActive" id="idActive">
                <option value="yes">yes</option>
                <option value="no">no</option>
            </select>
        </div>
        <div className="productformRight">
            <div className="productUpload">
                <img src="https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2020%2F12%2Fcaviar-108-000-usd-pure-gold-apple-airpods-max-001.jpg?cbr=1&q=90" alt="" className="productUploadImg" />
           <label htmlFor="file">
            <Publish className='productIcon'/>
           </label>
           <input type="file" id = 'file' style = {{display:'none'}} />
            </div>
            <button className="productbtn">Update</button>
        </div>
    </form>
   </div>
</div>
    );
};
export default Product;