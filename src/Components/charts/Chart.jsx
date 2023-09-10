import React from 'react';
import './Chart.css';
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

 const Chart = ({title, data, dataKey, grid})=>{
    

    return(
<div className="chart">
    <h3 className="chartTitle">
        {title}
    </h3>
    <ResponsiveContainer
    width='100%' aspect = {4/1}>
      
        <LineChart width={730} height={250}  data = {data}>
        {grid && <CartesianGrid strokeDasharray="5 5" stroke = '#e0dfdf' />}
        <XAxis dataKey ='name' stroke = '#5550bd'/>
       
        <Line type="monotone" dataKey={dataKey} stroke="#8884d8" />
        <Tooltip></Tooltip>
        </LineChart>
    </ResponsiveContainer>
</div>
    );
 };
 export default Chart;