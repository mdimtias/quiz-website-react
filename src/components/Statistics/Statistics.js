import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Statistics.css'
const Statistics = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div>
            
        </div>
    );
};

export default Statistics;