import './User.css';

import React from 'react';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { CalendarToday, LocationSearching, MailOutline, PhoneAndroid } from '@mui/icons-material';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import { NavLink } from 'react-router-dom';

const User = ()=>{
    return(
<div className="user">
   <div className="userTitleContainer">
    <h1 className="userTittle">Edit User</h1>
    <NavLink to = '/newUser'>
    <button className="userBtn">Create</button>
    </NavLink>
    
   </div>
   <div className="userContainer">
    <div className="userShow">
        <div className="userShowTop">
            <img src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?q=10&h=200" alt=""  className='userShowImg'/>
       <div className="userShowTopTitle">
        <span className="userShowUsername">Anna keller</span>
        <span className="userShowUserTitle">Software Engineer</span>
       </div>
        </div>
        <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
           <div className="userShowInfo"> <PermIdentityIcon className='userShowIcon'/>

<span className="userShowInfoTitle">annabeck99</span>
</div>
<div className="userShowInfo"> <CalendarToday className='userShowIcon'/>

<span className="userShowInfoTitle">10.12.1999</span>
</div>
<span className="userShowTitle">Contact Details</span>
<div className="userShowInfo"> <PhoneAndroid className='userShowIcon'/>

<span className="userShowInfoTitle">+1 123 456 456</span>
</div>
<div className="userShowInfo"> <MailOutline className='userShowIcon'/>

<span className="userShowInfoTitle">anna@gmail.com</span>
</div>
<div className="userShowInfo"> <LocationSearching className='userShowIcon'/>

<span className="userShowInfoTitle">New York | USA</span>
</div>
           
        </div>
    </div>
    <div className="userUpdate">
        <span className="userUpdateTitle">
            Edit
        </span>
        <form action="" className="userUpdateForm">
            <div className="userUpdateLeft">
                <div className="userUpdateItem">
                    <label >Username</label>
                    <input type="text" placeholder='annabeck99'  className='userUpdateInput' />
                </div>
                <div className="userUpdateItem">
                    <label >Full Name</label>
                    <input type="text" placeholder='Anna Beck'  className='userUpdateInput' />
                </div>
                <div className="userUpdateItem">
                    <label >Email</label>
                    <input type="email" placeholder='anna@gmail.com'  className='userUpdateInput' />
                </div>
                <div className="userUpdateItem">
                    <label >Phone</label>
                    <input type="tel" placeholder='+1 123 456 456'  className='userUpdateInput' />
                </div>
                <div className="userUpdateItem">
                    <label >Address</label>
                    <input type="text" placeholder='New York | USA'  className='userUpdateInput' />
                </div>
            </div>
            <div className="userUpdateRight">
                <div className="userUpdateUpload">
                    <img  className = 'userUpdateImg' src="data:image/jpeg;base64,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" alt="" />
                <label htmlFor="file">
                    <FileUploadIcon className='userUpdateIcon'/>
                </label>
                <input type="file" id = 'file'  style = {{display:'none'}}/>
                </div>
                <button className="userUpdatebtn">Update</button>
            </div>
        </form>
    </div>
   </div>
</div>
    )
}
export default User;