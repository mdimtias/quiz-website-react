import React from 'react';
import {NavLink, useParams} from 'react-router-dom';
import './Item.css'

const Item = ({item}) => {
    const {id, name, logo} = item;
    const quizLinks = "Quiz/"+id;
    let  userId  = useParams();
    return (
        <div className="col-lg-3 category-container">
            <img src={logo} alt="" className="img-fluid" />
           <div className="d-flex category-text">
                <h2>{name}</h2>
                <NavLink to={quizLinks}>Start Quiz</NavLink>
           </div>
        </div>
    );
};

export default Item;