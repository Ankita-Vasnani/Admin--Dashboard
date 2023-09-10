import React, { useState } from 'react';
import './UserList.css';
import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import { userRows } from '../../../DummyData';
import { NavLink } from 'react-router-dom';

const UserList = ()=>{
    const [data, setData] = useState(userRows)
    const inputEvent = (id) =>{
        setData(data.filter((item)=>item.id !== id));
    };
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'user', headerName: 'User', width: 200, renderCell: (params)=>{
            return(
                <div className='userListUser'>
                   <img src = {params.row.avatar} className='userListImg' alt = ''></img>
                   {params.row.username}
                </div>
            )
        } },
        { field: 'email', headerName: 'Email', width: 200 },
        {
          field: 'status',
          headerName: 'Status',
         
          width: 120,
        },
        {
            field: 'transactions',
            headerName: 'Transactions',
           
            width: 160,
          },
          {
            field: 'action',
            headerName: 'Action',
             width: 150,
             renderCell : (params)=>{
                return(
                    <>
                    <NavLink to = {'/users/' + params.row.id}>
                    <button className="userListEdit">Edit</button>
                    </NavLink>
                    <DeleteIcon className="userListDelete" onClick={() => inputEvent(params.row.id)}/>
                   
                    </>
                )
             }
          },
       
      ];
      
     
    return(
<div className="userlist">
<DataGrid
        rows={data}
        disableSelectionOnClick 
        columns={columns}
        pageSize = {8}
        checkboxSelection
      />
</div>
    );
};

export default UserList;