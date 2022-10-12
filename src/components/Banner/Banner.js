import React from 'react';
import Banners from '../../assets/banner.jpg';
import './Banner.css';

const Banner = () => {
    return (
        <div className="row">
            <div className="col-lg-6 banner-text">
                <h2>Quiz Assignment Benefits </h2>
                <p>These three themes are that quizzes can be used to motivate people, help them remember content they just covered, and to help assess what they learned </p>
                <button type="button" className="btn-primary">Start Now</button>
            </div>
            <div className="col-lg-6">
                <img src={Banners} alt="" className="img-fluid" />
            </div>
        </div>
    );
};

export default Banner;