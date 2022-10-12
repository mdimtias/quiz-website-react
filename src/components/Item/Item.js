import React from 'react';
import {NavLink} from 'react-router-dom';
import './Item.css'

const Item = ({item}) => {
    const {id, name, logo} = item;
    const quizLinks = "Quiz/"+id;
    return (
        <div className="col-lg-3 col-md-6 category-container mb-2">
            <div className="card">
            <img src={logo} alt="" className="img-fluid" />
            <div className="d-flex category-text">
                    <h2>{name}</h2>
                    <NavLink to={quizLinks}>Start Quiz</NavLink>
            </div>
            </div>
        </div>
    );
};

export default Item;