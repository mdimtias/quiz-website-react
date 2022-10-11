import React from 'react';
import Banners from '../../assets/banner.jpg';
import './Banner.css';

const Banner = () => {
    return (
        <div className="row">
            <div className="col-lg-6 banner-text">
                <h2>Quiz Assignment</h2>
                <p>hello everyone hello everyone hello everyone hello everyone hello everyone hello everyone hello everyone hello everyone hello everyone hello everyone hello everyone </p>
                <button type="button" className="btn-primary">Start</button>
            </div>
            <div className="col-lg-6">
                <img src={Banners} alt="" className="img-fluid" />
            </div>
        </div>
    );
};

export default Banner;