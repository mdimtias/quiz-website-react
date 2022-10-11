import React from 'react';
import {useLoaderData, useParams} from 'react-router-dom';
import Banner from '../Banner/Banner';
import Item from '../Item/Item';
import './Home.css';

const Home = () => {
    const {data} = useLoaderData();
    
    return (
        <>
            <Banner></Banner>
            <div className="row category">
            {data.map((item)=> <Item item={item} key={item.id}></Item>)}
            </div>
           
        </>
    );
};

export default Home;