import React from 'react';
import './Sidebar.css';
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PersonIcon from '@mui/icons-material/Person';
import InventoryIcon from '@mui/icons-material/Inventory';
import PaidIcon from '@mui/icons-material/Paid';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import MailIcon from '@mui/icons-material/Mail';
import FeedbackIcon from '@mui/icons-material/Feedback';
import MessageIcon from '@mui/icons-material/Message';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ReportIcon from '@mui/icons-material/Report';
import { NavLink } from 'react-router-dom';


const Sidebar = ()=>{
return(
    
    <div className="sidebar">
        
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">
                    Dashboard
                </h3>
                <ul className="sidebarList">
                    <NavLink to ='/' className='link'>
                    <li className="sidebarListItems active">
                <LineStyleIcon className='sidebarIcon'/>
                Home
                    </li>
                    </NavLink>
                    
                    
                    <li className="sidebarListItems ">
                <TimelineIcon className='sidebarIcon'/>
                Analytics
                    </li>
                    <li className="sidebarListItems ">
                <TrendingUpIcon className='sidebarIcon'/>
               Sales
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">
                    Quick Menu
                </h3>
                <ul className="sidebarList">
                    <NavLink to = '/users' className='link'>
                    <li className="sidebarListItems">
                <PersonIcon className='sidebarIcon'/>
                Users
                    </li>
                    </NavLink>
                   
                    <li className="sidebarListItems ">
                <PaidIcon className='sidebarIcon'/>
                Transactions
                    </li>
                    <NavLink to ='/products' className='link'>
                        <li className="sidebarListItems ">
                <InventoryIcon className='sidebarIcon'/>
              Products
                    </li>
                    </NavLink>
                    
                    <li className="sidebarListItems ">
                <EqualizerIcon className='sidebarIcon'/>
              Reports
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">
                    Notifications
                </h3>
                <ul className="sidebarList">
                    <li className="sidebarListItems">
                <MailIcon className='sidebarIcon'/>
                Mail
                    </li>
                    <li className="sidebarListItems ">
                <FeedbackIcon className='sidebarIcon'/>
                FeedBack
                    </li>
                    <li className="sidebarListItems ">
                <MessageIcon className='sidebarIcon'/>
               Messages
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">
                    Staff
                </h3>
                <ul className="sidebarList">
                    <li className="sidebarListItems ">
                <ManageAccountsIcon className='sidebarIcon'/>
                Manage
                    </li>
                    <li className="sidebarListItems ">
                <TimelineIcon className='sidebarIcon'/>
                Analytics
                    </li>
                    <li className="sidebarListItems ">
                <ReportIcon className='sidebarIcon'/>
               Reports
                    </li>
                </ul>
            </div>
            
            
        </div>
    </div>
    
);
};

export default Sidebar;
