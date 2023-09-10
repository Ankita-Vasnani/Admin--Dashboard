import './Newuser.css';
import React from 'react';

const Newuser = () =>{
    
    return(
<div className="newuser">
    <h1 className="newusertitle">New User</h1>
    <form action="" className="newuserform">
<div className="newuseritems">
    <label >Username</label>
    <input type="text"  placeholder = 'john'className='' />
</div>
<div className="newuseritems">
    <label >Full Name</label>
    <input type="text"  placeholder = 'john kennedy'className='' />
</div>
<div className="newuseritems">
    <label >Email</label>
    <input type="email"  placeholder = 'john23@kennedy.com'className='' />
</div>
<div className="newuseritems">
    <label >Passwords</label>
    <input type="password"  placeholder = 'password'className='' />
</div>
<div className="newuseritems">
    <label >phone</label>
    <input type="tel"  placeholder = '+1 234 234'className='' />
</div>
<div className="newuseritems">
    <label >Address</label>
    <input type="text"  placeholder = 'New York | USA'className='' />
</div>
<div className="newuseritems">
<label >Gender</label>
    <div className="newusergender">
   
    <input type="radio" 
     name = 'gender'
     id = 'male'
     value = 'male'
     className='' />
     <label for="male">male</label>
     <input type="radio" 
     name = 'gender'
     id = 'female'
     value = 'female'
     className='' />
     <label for="female">female</label>
     <input type="radio" 
     name = 'gender'
     id = 'other'
     value = 'other'
     className='' />
     <label for="other">others</label>
    </div>
    
</div>
<div className="newuseritems">
    <label>Active</label>
    <select name="active" id = 'active' className="newuserselect">
        <option value = 'yes'>Yes</option>
        <option value = 'no' >No</option>

    </select>
</div>
<button className="newuserbtn">Create</button>
    </form>
    
</div>
    );
};

export default Newuser;
