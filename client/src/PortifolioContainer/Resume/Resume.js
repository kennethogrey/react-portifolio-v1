import React,{useState} from 'react'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../utilities/ScrollService'
import Animations from '../../utilities/Animations'
import './Resume.css'

export default function Resume(props){
    const [selectedBulletIndex, setSelectedBulletIndex] = useState(0)
    const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({})

    let fadeInScreenHandler = (screen)=>{
        if(screen.fadeScreen !== props.id) return;
        Animations.animations.fadeInScreen(props.id);
    };
    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)

    const ResumeHeading = (props)=>{
        return (
            <div className='resume-heading'>
                <div className='resume-main-heading'>
                    <div className='heading-bullet'> 
                        <span>{props.heading ? props.heading : ""}</span>
                        {props.fromDate && props.toDate ? (
                            <div className='heading-date'>
                                {props.fromDate + "-" + props.toDate}
                            </div>
                        ) : (
                            <div></div>
                        )}
                    </div>
                    <div className='resume-sub-heading'>
                        <span>{props.subHeading ? props.subHeading : ""}</span>
                    </div>
                    <div className='resume-heading-description'>
                        <span>{props.description ? props.descritption : ""}</span>
                    </div>
                </div>
            </div>
        )
    };

    const resumeBullets = [
        { label: "Education", logoSrc: "education.svg" },
        { label: "Work History", logoSrc: "work-history.svg" },
        { label: "Programming Skills", logoSrc: "programming-skills.svg" },
        { label: "Projects", logoSrc: "projects.svg" },
        { label: "Interests", logoSrc: "interests.svg" },
    ];
    
    const programmingSkillDetails = [
        {skill:"PHP", ratingPercentage: 75},
        {skill:"Laravel", ratingPercentage: 80},
        {skill:"Java", ratingPercentage: 70},
        {skill:"HTML", ratingPercentage: 80},
        {skill:"CSS", ratingPercentage: 80},
        {skill:"Tailwind CSS", ratingPercentage: 70},
        {skill:"BootStrap", ratingPercentage: 70},
        {skill:"Mongo Db", ratingPercentage: 40},
        {skill:"MYSQL", ratingPercentage: 75},
        {skill:"PostgreSQL", ratingPercentage: 30},
        {skill:"JavaScript", ratingPercentage: 60},
        {skill:"React js", ratingPercentage: 40},
        {skill:"Vue js", ratingPercentage: 40},
        {skill:"Python", ratingPercentage: 50},
    ]

    const projectDetails =[
        {
            title:"Personal Portifolio Website",
            duration: {fromDate:"2022", toDate:"2023"},
            description: "A Personal Portifolio website to showcase all my details and some of my projects",
            subHeading: "Technologies used: React JS, Bootstrap",
        },
        {
            title:"Minature Child Tracking System",
            duration: {fromDate:"2022", toDate:"2023"},
            description: "The Miniature Child Tracking System is an advanced and compact device designed for ensuring the safety of children. Equipped with GPS technology and real-time tracking capabilities, it offers parents and caregivers peace of mind by allowing them to monitor their child's location through a smartphone app or web interface. The system includes geofencing, sending instant notifications if the child crosses predetermined boundaries. With secure encryption protocols and a long-lasting battery, the device prioritizes safety and data privacy. This innovative solution provides an unobtrusive way to keep children safe in various environments, making it an essential tool for modern parenting.",
            subHeading: "Technologies used: PHP(laravel), Bootstrap, JavaScript, Google Maps, C/C+, MYSQL",
        },
        {
            title:"ANKA",
            duration: {fromDate:"2022", toDate:"2022"},
            description: "This is a simple Ecommerce site to connect saler to buyers.",
            subHeading: "Technologies Used: PHP(laravel), Bootstrap, JavaScript, MYSQL",
        },
        {
            title:"BenK POS",
            duration: {fromDate:"2023", toDate:"2023"},
            description: "This is a Point of sale system to be used in managing of sales, inventory and more.",
            subHeading: "Technologies Used: Core PHP, Bootstrap, JavaScript, MYSQL",
        },
        {
            title:"Vaccine Administration Tracker",
            duration: {fromDate:"2020", toDate:"2021"},
            description: "This is a project that was built to assist in tracking the COVID-19 vaccination process.",
            subHeading: "Technologies Used: Java, CSS, Jsp, MYSQL",
        },
        {
            title:"Scores App",
            duration: {fromDate:"2021", toDate:"2021"},
            description: "For football live scores",
            subHeading: "Technologies Used: PHP(laravel), Bootstrap, JavaScript",
        },

    ];

    const resumeDetails =[
        <div className='resume-screen-container' key='education'>
            <ResumeHeading
                heading={'Makerere University Kampala, Uganda'}
                subHeading={'BACHELOR OF SCIENCE IN SOFTWARE ENGINEERING'}
                fromDate={'2019'}
                toDate={'2023'}

            />
            <ResumeHeading
                heading={'Uganda Advanced Certificate of Education - UACE'}
                subHeading={'Old Kampala Senior Secondary School Kampala, Uganda'}
                fromDate={'2017'}
                toDate={'2015'}
            />
            <ResumeHeading
                heading={'Uganda Cerficate of Education - UCE'}
                subHeading={'Old Kampala Senior Secondary School'}
                fromDate={'2015'}
                toDate={'2011'}
            />
        </div>,
        <div className='resume-screen-container' key='work-experience'>
            <ResumeHeading
                heading={'WEB DEVELOPER'}
                subHeading={'Freelancer'}
                fromDate={'2022'}
                toDate={'Present'}
            />
            <div className='experience-description'>
                <span className='resume-description-text'>
                    I am currently working a freelance full stack web developer and 
                    i work on projects as they come in. Feel free to hire  me for your projects.
                </span>
            </div>
            <div className='experience-description'>
                <span className='resume-description-text'>
                    - I develop custom websites and web applications for diverse clients, 
                    meeting their unique business needs and design preferences.
                </span>
                <br/>
                <span className='resume-description-text'>
                     - Proficient in HTML, CSS, JavaScript, and various front-end frameworks. 
                     e.g., React, Vue to create responsive and interactive user interfaces.
                </span>
                <br/>
                <span className='resume-description-text'>
                     - I utilize back-end technologies such as Node.js, Express, and Laravel to 
                     build robust and scalable server-side functionality.
                </span>
                <br/>
                <span className='resume-description-text'>
                     - I integrate third-party APIs and plugins to enhance website functionality and provide seamless user experiences.
                </span>
                <br/>
                <span className='resume-description-text'>
                     - I conduct thorough testing and debugging to ensure optimal performance and cross-browser compatibility.
                </span>
                <br/>
                <span className='resume-description-text'>
                     - I collaborate closely with clients to understand project requirements, provide regular updates, and deliver projects within agreed timelines.
                </span>
            </div>
            
        </div>,
        <div className='resume-screen-container programming-skills-container' key='programming-skills'>
            {programmingSkillDetails.map((skill,index)=>(
                <div className='skill-parent' key={index}>
                    <div className='heading-bullet'></div>
                    <span>{skill.skill}</span>
                    <div className='skill-percentage'>
                        <div style={{width: skill.ratingPercentage + "%"}} className='active-percentage'>

                        </div>
                    </div>
                </div>
            ))}
        </div>,
        <div className='resume-screen-container' key='projects'>
            {projectDetails.map((projectDetails,index)=>(
                <ResumeHeading
                    key={index}
                    heading={projectDetails.title}
                    subHeading={projectDetails.subHeading}
                    description={projectDetails.description}
                    fromDate={projectDetails.duration.fromDate}
                    toDate={projectDetails.duration.toDate}
                />
            ))}
        </div>,
        <div className='resume-screen-container' key='interests'>
        <ResumeHeading
            heading= 'Contributing to Open Source'
            description= "Contributing to open source has become my passion as it enables skill development, collaboration, learning, and exposure to diverse projects. It's a fulfilling experience that fuels my enthusiasm for giving back to the community while fostering personal and professional growth"
        />
        <ResumeHeading
            heading= 'Reading'
            description= "I have a deep love for acquiring new knowledge, and reading serves as the perfect avenue to both relax my mind and expand my understanding. It offers me a tranquil escape while enriching my mind with valuable insights and information."
        />
        <ResumeHeading
            heading= 'Music and casual gaming'
            description= "Music allows me to unwind and express emotions through captivating melodies, and casual gaming, provides an enjoyable escape with fun challenges and entertainment."
        />
        </div>
    ]

    const handleCarousal =(index)=>{
        let offSetHeight = 360;
        let newCarousalOffSet={
            style:{transform:"translateY("+index * offSetHeight * -1 + "px)"}
        };
        setCarousalOffSetStyle(newCarousalOffSet)
        setSelectedBulletIndex(index)
    };

    const getBullets = ()=>{
        return resumeBullets.map((bullet,index)=>(
            <div
                onClick={()=>handleCarousal(index)}
                className={index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"}
                key={index}
            >
                <img
                    className='bullet-logo'
                    src={require (`../../assets/Resume/${bullet.logoSrc}`)}
                    alt='oops....No internet connection'
                />
                <span className="bullet-label">{bullet.label}</span>
            </div>
        ))
    }

    const getResumeScreen =()=>{
        return (
            <div
                style={carousalOffSetStyle.style}
                className='resume-details-carousal'
            >
                {resumeDetails.map((ResumeDetail)=>(ResumeDetail))}
            </div>
        )
    }

    return(
        <div className="resume-container screen-container" id={props.id || ""}>
            <div className="resume-content">
                <ScreenHeading title={"Resume"} subHeading={"My Formal Bio Details"} />
                <div className="resume-card">
                    <div className="resume-bullets">
                        <div className="bullet-container">
                            <div className="bullet-icons"></div>
                            <div className="bullets">{getBullets()}</div>
                        </div>
                    </div>
                    <div className="resume-bullet-details">{getResumeScreen()}</div>
                </div>
            </div>
        </div>
    );
}
