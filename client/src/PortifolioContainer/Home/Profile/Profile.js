import React from 'react'
import Typical from 'react-typical';
import './Profile.css';

export default function Profile() {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <div className='colz-icon'>
                            <a href='https://github.com/kennethogrey' target='_blank' rel="noopener noreferrer">
                                <i className='fa fa-github-square'></i>
                            </a>
                            <a href='https://www.linkedin.com/in/ogire-kenneth-68999a213' target='_blank' rel="noopener noreferrer">
                                <i className='fa fa-linkedin-square'></i>
                            </a>
                            <a href='https://www.instagram.com/kennethogrey/' target='_blank' rel="noopener noreferrer">
                                <i className='fa fa-instagram'></i>
                            </a>
                            <a href='https://twitter.com/KennethOgrey' target='_blank' rel="noopener noreferrer">
                                <i className='fa fa-twitter'></i>
                            </a>
                        </div>
                    </div>
                    <div className='profile-details-name'>
                        <span className='primary-text'>
                            {" "}
                            Hello, I'm <span className='highlighted-text'>Kenneth</span>
                        </span>
                    </div>
                    <div className='profile-details-role'>
                        <span className='primary-text'>
                            {" "}
                            <h1>
                                {""}
                                <Typical
                                    loop={Infinity}
                                    steps={[
                                        "Software Engineer 👨‍💻", 1000,
                                        "BackEnd Developer 🧩", 1000,
                                        "FrontEnd developer ☑️", 1000,
                                        "Laravel Developer 💻", 1000,
                                        "Vue js Developer 👍", 1000,
                                    ]}
                                />
                            </h1>
                            <span className='profile-role-tagline'>
                                Innovative Software Engineer Driving Digital Transformation and Delivering Cutting-Edge Solutions
                            </span>
                        </span>
                    </div>
                    <div className='profile-options'>
                        <button className='btn primary-btn'>
                            {""}
                            Hire Me{" "}
                        </button>
                        <a href='Ogire-KennethCV.pdf' download='ogirekennethCV.pdf'>
                            <button className='btn highlighted-btn'>Get Resume</button>
                        </a>
                    </div>
                </div>
                <div className='profile-picture'>
                    <div className='profile-picture-background'>

                    </div>
                </div>
            </div>
        </div>
    )
}
