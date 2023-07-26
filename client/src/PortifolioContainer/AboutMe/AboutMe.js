import React from 'react'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../utilities/ScrollService'
import Animations from '../../utilities/Animations'
import './AboutMe.css'

export default function AboutMe(props){
    let fadeInScreenHandler = (screen)=>{
        if(screen.fadeScreen !== props.id)
        return
        Animations.animations.fadeInScreen(props.id)
    }

    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)
    
    const SCREEN_CONSTANTS = {
        description: "Passionate about crafting transformative software solutions, I am Ogire Kenneth, a dedicated software engineer. With a strong foundation in programming and a relentless drive for innovation, I excel at designing and implementing robust applications that streamline processes and enhance user experiences. Constantly evolving my skills and staying abreast of emergingtechnologies, I thrive in dynamic, collaborative environments where I can contribute to impactful projects. Committed to delivering excellence, I am eager to connect with fellow professionals and explore opportunities to make a meaningful impact in the world of software engineering.",
        highlights:{
            bullets: [
                "Full Stack Web developer",
                "interactive FrontEnd as per the design",
                "React, Vue js for the frontend",
                "PHP (laravel), Java for the backend",
                "Building REST API",
                "Managing database"
            ],
            heading : "Here are a Few highlights:"
        }
    }

    const renderHighlights = ()=>{
        return (
            SCREEN_CONSTANTS.highlights.bullets.map((value,i)=>(
                <div className='highlight' key={i}>
                    <div className='highlight-blob'></div>
                    <span>{value}</span>
                </div>
            ))
        )
    }
    return (
        <div className='about-me-container screen-container' id={props.id || ""}>
            <div className='about-me-parent'>
                <ScreenHeading title={'About Me'} subHeading={'Why Choose Me?'}/>
                <div className='about-me-card'>
                    <div className='about-me-profile'></div>
                    <div className='about-me-details'>
                        <span className='about-me-description'>{SCREEN_CONSTANTS.description}</span>
                        <div className='about-me-highlights'>
                            <div className="highlight-heading">
                                <span>{SCREEN_CONSTANTS.highlights.heading}</span>
                            </div>
                            {renderHighlights()}
                        </div>
                        <div className='about-me-options'>
                            <button className='btn primary-btn'>
                                {""}
                                Hire Me{" "}
                            </button>
                            <a href='Ogire-KennethCV.pdf' download='ogirekennethCV.pdf'>
                                <button className='btn highlighted-btn'>Get Resume</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}