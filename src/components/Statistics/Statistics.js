import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Statistics.css'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

 const datas = [
        {
          name: 'Page A',
          uv: 4000
        },
        {
          name: 'Page B',
          uv: 3000,
        },
        {
          name: 'Page C',
          uv: 2000
        },
        {
          name: 'Page D',
          uv: 2780
        }
      ];
const Statistics = () => {
    const {data} = useLoaderData();
   
    return (
     <div className='container'>
        <div className="row">
            {/* <div className="col-lg-3 col-sm-0"></div> */}
            <div className="col-lg-12 p-5">
            <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis dataKey='total' />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="total" stroke="#8884d8" strokeDasharray="5 5" />
          <Line type="monotone" dataKey="total" stroke="#82ca9d" strokeDasharray="3 4 5 2" />
        </LineChart>
            </div>
            {/* <div className="col-lg-3"></div> */}
        </div>
     </div>

    );
};

export default Statistics;