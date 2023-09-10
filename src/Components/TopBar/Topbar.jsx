import React from 'react';
import './Topbar.css';
import {NotificationsActive} from '@mui/icons-material';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';

const Topbar = ()=>{
    return(
        <>
        <div className='topbar'>
            <div className="topbarWrapper">
                <div className="topleft">
                <span className="logo">lamaadmin</span>   
                 </div>
                <div className="topright">
                    <div className="topbarIconContainer">
                 <NotificationsActive/>
                 <span className='topIconBadge'>2</span>
                    </div>
                    <div className="topbarIconContainer">
                 <LanguageIcon/>
                 <span className='topIconBadge'>2</span>
                    </div>
                    <div className="topbarIconContainer">
                 <SettingsIcon/>
                 
                    </div>
                    <img src="https://e0.pxfuel.com/wallpapers/588/451/desktop-wallpaper-beautiful-high-resolution-purple-for-laptop-1920-x-1080-px-purple-flower-laptop-thumbnail.jpg" alt="" className="topAvatar" />
                
                </div>
            </div>
        </div>
        
        </>
    );
};

export default Topbar;