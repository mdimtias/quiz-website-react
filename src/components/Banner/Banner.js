import React from 'react';
import { NavLink } from 'react-router-dom';
import Banners from '../../assets/banner.jpg';
import './Banner.css';

const Banner = () => {
    return (
        <div className="row">
            <div className="col-lg-6 banner-text mb-5">
                <h2>Quiz Assignment Benefits </h2>
                <p>These three themes are that quizzes can be used to motivate people, help them remember content they just covered, and to help assess what they learned </p>
                <NavLink to="quiz/4"><button type="button" className="btn-primary">Start Now</button></NavLink>
            </div>
            <div className="col-lg-6">
                <img src="https://cdn.pixabay.com/animation/2022/09/28/05/18/05-18-33-400_512.gif" alt="banner" className="img-fluid" />
            </div>
        </div>
    );
};

export default Banner;