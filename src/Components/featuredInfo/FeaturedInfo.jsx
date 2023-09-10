
import './FeaturedInfo.css';
import React from 'react';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const FeaturedInfo = ()=>{
    
    return(
<div className='featured'>
<div className="featuredItems">
    <span className="featuredTitle">
        Revenue
    </span>
    <div className="featuredmoneyContainer">
        <span className="featuredmoney">$50</span>
        <span className="featuredMoneyRate">
            -11.4 <ArrowDownwardIcon className='featuredicon negative'/></span>
    </div>
    <div className="featuredSub">Compared to last Month</div>
</div>
<div className="featuredItems">
    <span className="featuredTitle">
       Sales
    </span>
    <div className="featuredmoneyContainer">
        <span className="featuredmoney">$50</span>
        <span className="featuredMoneyRate">-11.4 <ArrowDownwardIcon className='featuredicon negative'/></span>
    </div>
    <div className="featuredSub">Compared to last Month</div>
</div>
<div className="featuredItems">
    <span className="featuredTitle">
       Cost
    </span>
    <div className="featuredmoneyContainer">
        <span className="featuredmoney">$50</span>
        <span className="featuredMoneyRate">-11.4 <ArrowUpwardIcon className='featuredicon' /></span>
    </div>
    <div className="featuredSub">Compared to last Month</div>
</div>
</div>
    );
};

export default FeaturedInfo;
