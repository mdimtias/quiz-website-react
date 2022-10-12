import React from 'react';
import { NavLink } from 'react-router-dom';
import './Banner.css';

const Banner = () => {
    return (
        <div className="row">
            <div className="col-lg-6 banner-text mb-5 mt-5">
                <h2 className='mt-5'>Quiz Assignment Benefits </h2>
                <p className='p-2'>These three themes are that quizzes can be used to motivate people, help them remember content they just covered, and to help assess what they learned </p>
                <NavLink to="quiz/4"><button type="button" className="btn-primary">Start Now</button></NavLink>
            </div>
            <div className="col-lg-6 mt-5">
                <img src="https://cdn.pixabay.com/photo/2022/03/13/03/08/quiz-7065191__340.png" alt="banner" className="img-fluid" />
            </div>
        </div>
    );
};

export default Banner;