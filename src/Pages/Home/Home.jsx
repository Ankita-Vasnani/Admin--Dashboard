import React from 'react';
import './Home.css';
import FeaturedInfo from '../../Components/featuredInfo/FeaturedInfo';
import Chart from '../../Components/charts/Chart';
// import {Userdata} from '../../DummyData';
import WidgetSm from '../../WidgetSm/WidgetSm';
import WidgetLg from '../../WidgetLg/WidgetLg';
import { Userdata } from '../../DummyData';

const Home = ()=>{
    return(
       <div className="home">
     <FeaturedInfo/>
     <Chart data = {Userdata} title = 'User Analytics' dataKey = 'ActiveUser' grid />
      
       <div className="homeWidget">
        <WidgetSm/>
        <WidgetLg/>
       </div>
       </div>
    );
};
 export default Home;