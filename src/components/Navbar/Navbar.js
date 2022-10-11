import React from 'react';
import {NavLink} from 'react-router-dom';
import logo from '../../assets/logo.png';
import './Navbar.css';

const Navbar = () => {
    return (
            <div className="row">
                    <div className="col-lg-4 d-lg-block d-none">
                        <div className="logo">
                        <img src={logo} alt="" className="img-fluid" /></div>
                    </div>
                    <div className="col-lg-8 d-lg-block d-none">
                            <div className="nav-links">
                                <NavLink to='/'>Home</NavLink>
                                <NavLink to='/blog'>Blog</NavLink>
                                <NavLink to='/statistics'>Statistic</NavLink>
                                <NavLink to='/about'>About</NavLink>
                                <NavLink to='/quiz'>Quiz</NavLink>
                            </div>
                        </div>
               
                {/* Mobile Responsive */}
               <div className="mobile-menu d-lg-none">
                    <nav className="navbar navbar-dark bg-dark">
                        <div className="container-fluid">
                        <div className="col-lg-4">
                            <div className="logo">
                            <img src={logo} alt="" className="img-fluid" /></div>
                         </div>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            </button>
                        </div>
                    </nav>
                    <div className="col-lg-8 ">
                        <div className="nav-links collapse"  id="navbarToggleExternalContent">
                            <NavLink to='/'>Home</NavLink>
                            <NavLink to='/blog'>Blog</NavLink>
                            <NavLink to='/statistics'>statistic</NavLink>
                            <NavLink to='/about'>About</NavLink>
                            <NavLink to='/quiz'>Quiz</NavLink>
                        </div>
                    </div>
               </div>
            </div>
    );
};

export default Navbar;