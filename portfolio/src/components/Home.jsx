import React from 'react';
import Lottie from 'lottie-react';
import { useMediaQuery } from 'react-responsive';
import { FaProjectDiagram, FaUser, FaTools, FaFileAlt, FaBriefcase, FaGithub, FaLinkedin, FaInstagram, FaEnvelope} from 'react-icons/fa'; // Import the relevant icons
import '../styles/Home.css';
import Navbar from "./Navbar"
import Footer from "./Footer"
import Skills from "./Skills"
import UCalgaryLogo from '../assets/logo.jpg';
import symendLogo from '../assets/SymendLogo.jpg'
import DEMO from '../assets/demo.jpg';
import smartGarden from '../assets/SmartGarden.jpg';
import smartGardenStats from '../assets/SmartGardenStats.jpg';
import ExperienceCard from "./ExperienceCrad";
import ProjectCard from "./ProjectCard";
import ZooStats from "../assets/ZooStats.jpg"
import LotionStats from "../assets/LotionStats.jpg";

import typingAnimation from '../assets/typingAnimation.json';
import HelloAnimation from '../assets/Hello.json' 
import EducationAnimation from '../assets/education.json'
import profileAnimation from "../assets/profileAnimation - 1734919650761.json"
import crazyAnimation from "../assets/crazyAnimation - 1734920013980.json"
import hiAnimation from "../assets/hiAnimation.json"
import experienceAnimation from '../assets/experienceAnimation.json';
import experience from "../assets/Picture1.jpg"
import freeLancer from "../assets/freeLancer.jpg"
import wordleStats from "../assets/WordleStats.jpg"
import projectAnimation from "../assets/projectAnimation.json"
import project2Animation from '../assets/project2Animation.json';
const ExperienceAnimation = () => {
    return (
        <div className="typing-person">
            <Lottie animationData={experienceAnimation} loop={true}  style={{ background: 'transparent' }} />
        </div>
    );
};
const ProjectAnimation = () => {
    return (
        <div className='pro-anim'>
            <Lottie animationData={projectAnimation} loop={true}  style={{ background: 'transparent' }} />
        </div>
    );
};
const Project2Animation = () => {
    return (
        <div className='pro-anim-2'>
            <Lottie animationData={project2Animation} loop={true}  style={{ background: 'transparent', width:'238px' }} />
        </div>
    );
};
const TypingPerson = () => {
    return (
        <div className="typing-person">
            <Lottie animationData={typingAnimation} loop={true}  style={{ background: 'transparent' }} />
        </div>
    );
};
const HiAnimation = () => {
    return (
        <span >
            <Lottie animationData={hiAnimation} loop={true}  style={{ background: 'transparent', width:'80px' }} />
        </span>
    );
};
const CrazyAnimation = () => {
    return (
        <span >
            <Lottie animationData={crazyAnimation} loop={true}  style={{ background: 'transparent', width:"50px" }} />
        </span>
    );
};
const ProfileAnimation = () => {
    return (
        <div >
            <Lottie animationData={profileAnimation} loop={true}  style={{ background: 'transparent', width:'90%' }} />
        </div>
    );
};
const HelloPerson = () => {
    return (
        <div className="hello-person">
            <Lottie animationData={HelloAnimation} loop={true} />
        </div>
    );
};
const EducationAnim = () => {
    return (
        <div className="hello-person">
            <Lottie animationData={EducationAnimation} loop={true} />
        </div>
    );
};
const Home = () => {
    const isMobile = useMediaQuery({ maxWidth: 768 });
    return (
        <div >
            <Navbar/>
        <section className="home" id="home">
        
            <div className="rectangle">
                <div className='profile-pic'>
                    <ProfileAnimation/>
                    <h2 className="header-with-animation">
                         Hi all, I'm Mohamad 
                    </h2>
                    
                    <p className='rectangle-color'>Software engineer in the making, striving to turn ideas into impactful applications.</p>

                    <div className="icons"   >
                      <a href="https://www.linkedin.com/in/mohamad-hammoud-663131263/" target="_blank" rel="noopener noreferrer">  <FaLinkedin size={30} /></a>
                      
                      <a href="mailto:mohamad.hammoud3344@gmail.com">  <FaEnvelope size={30}/></a>
                      <a href="https://github.com/moe3344?tab=repositories" target="_blank" rel="noopener noreferrer">  <FaGithub size={30}/></a>
                        
                    </div>

                  
                </div>
                <div className="circle-buttons-container">
                <a href="Mohamad_Hammoud_Resume.pdf" download  className="circle-link">
                    <div className="circle-button"  >
                        <FaFileAlt size={30} />
                        <p>Resume</p>
                    </div>
                    </a>
                    
                    <a href="#who-am-i" className="circle-link">
                        <div className="circle-button">
                            <FaUser size={30} />
                            <p>About Me</p>
                        </div>
                    </a>
                    <a href="#cont" className="circle-link">
                        <div className="circle-button">
                            <FaTools size={30} />
                            <p>Contact</p>
                        </div>
                    </a>
                    <a href="#exp" className="circle-link">
                        <div className="circle-button">
                            <FaBriefcase size={30} />
                            <p>Experience</p>
                        </div>
                    </a>
                   

                    
                    <a href="#pro" className="circle-link">
                        <div className="circle-button">
                            <FaProjectDiagram size={30} />
                            <p>Projects</p>
                        </div>
                    </a>
                    <a href="https://github.com/moe3344?tab=repositories" target="_blank" rel="noopener noreferrer" className="circle-link">
                        <div className="circle-button">
                            <FaGithub size={30} />
                            <p>GitHub</p>
                        </div>
                    </a>
                    
                </div>
            </div>
           
            
             
            <HelloPerson/>
        </section>
        
        <section className='education' id="who-am-i">
       
        <div >
              
        {isMobile ? null :<TypingPerson/>}
    



            
      
          
      </div>
        <div className='education-rectangle-1' >
              
              <h2 >Who am I?</h2 >
              <p className='p-with-animation'><CrazyAnimation /><strong>CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK</strong></p>
              <Skills/>
            
            <p  >⚡Develop highly interactive Front end / User Interfaces for your web and mobile applications.
            </p>
            <p>⚡Build robust and scalable server-side applications, APIs, and databases to power your software solutions.
            </p>
            <p>⚡Design and deploy cloud-based solutions using platforms like AWS and Azure to ensure scalability, security, and efficiency.
            </p>
            

      
            
      
          
        </div>
        {isMobile && <TypingPerson/>}
        
            
        </section>
        <section className='education' id="education" >
            <div className='education-rectangle'>
                <h1>Education</h1>
                <img src={UCalgaryLogo} alt="University of Calgary Logo" className="university-logo" />
            
                <p><strong>University of Calgary</strong> </p>
                <p>September 2021 - May 2026</p>
                <p>Bachelor of Science in Software Engineering</p>
            </div>
            <EducationAnim/>
        </section>
       
        <section id='exp' >
        <h1 className='experienc-header'>Experience</h1>
                <div className='education'>
                <div  >
                    <ExperienceCard
                        company="Symend"
                        logo={symendLogo}
                         location= "Calgary - Alberta"
                        role="Full Stack Developer Intern"
                        dates="Jan 2024 – Present"
                        description="C#, Typescript, React, Docker"
                        points={[
                            "Engineered robust APIs using C#, .NET, and Azure for data extraction from SQL databases.",
                            "Developed and managed Docker environments, achieving consistent application performance across diverse systems.",
                            "Led development of a Svelte-based application, integrating React for dynamic front-end components and showcasing backend functionalities through a user-friendly interface.",
                            "Enhanced code quality through Test-Driven Development (TDD), writing unit tests to ensure reliability in APIs.",
                            "Conducted comprehensive testing using Playwright to simulate real-user interactions and validate UI performance,improving the overall user experience.",
                        ]}
                    />
                 </div>
        
            
       
        <ExperienceAnimation/>
        <div>
            <ExperienceCard
                company="Freelancer"
                
                logo={freeLancer}
                role="Front-End Developer"
                location= "Remote"
                dates="Jan 2023 – Present"
                description=" Typescript, React, Tailwind"
                points={[
                    "Built responsive websites for Calgary-based companies like YYC Decorations and Ram Flooring using React, TypeScript, JavaScript, and Tailwind CSS.",
                    "Delivered user-friendly designs, ensuring performance optimization and cross-browser compatibility.",
                    "Collaborated with clients to meet branding and functionality needs, completing projects on time.",
                    ]}
            />
        </div>
        </div>
        </section>
       
        <section className id='pro' >
        
            <h1 className='projects-header'>Projects</h1>
            <div className="pro-cards">
        
            
            <ProjectCard
                headerImage={ZooStats}
                source = 'View Code'
                role="Wildlife Rescue Schedule Planner"
                url="https://github.com/moe3344/Zoo-schedule-ava-mysql-moe3344"
                description="Java, SQL"
                points={[
                    "Developed a versatile scheduling app, streamlining worker allocation and reducing administrative overhead by 90%.",
"Applied object-oriented programming for a maintainable codebase, improving readability and scalability.",
                    "Integrated data from an SQL database for efficient scheduling information retrieval, ensuring seamless user experience.",
                    "Designed an intuitive GUI for schedule creation and management, enhancing usability.",
                 
                ]}
            />
                <ProjectCard
                headerImage={smartGardenStats}
                logo={smartGarden}
                source = 'View Code'
                role="Bloom bot"
                url="https://github.com/moe3344/smartGarden"
                description="C++, React-Native, Esp-Idf, AWS "
                points={[
                    "Developed an Android app using React Native for real-time monitoring and control of garden systems, integrated with AWS AppSync and GraphQL APIs to store and manage data in a DynamoDB table.",
                    "Programmed the ESP32-S3 microcontroller in C++ to read from sensors, control actuators, and communicate with AWS IoT Core via MQTT to publish and subscribe to topics.",
                    "Implemented AWS Lambda functions to enable seamless data transmission between AWS AppSync and IoT Core, ensuring efficient interaction between the cloud, mobile app, and microcontroller.",
                 
                ]}
            />
           
             <ProjectCard
                headerImage={ZooStats}
                source = 'View Code'
                role="Flight Booking App"
                url="https://github.com/moe3344/Final_Project_480"
                description="Java, BootStrap"
                points={[
                    "Developed Lotion using Python, React, and Terraform, leveraging infrastructure as code principles to seamlessly sync with your AWS account.",
"Implemented an autonomous system within ”Lotion” that generates S3 buckets, providing effortless hosting for notes and ensuring an elegant user experience.",
                  
                 
                ]}
            />
            
              <ProjectCard
                headerImage={wordleStats}
                source = 'Live Demo'
                role="Wordle Game"
                url="https://github.com/moe3344/Zoo-schedule-ava-mysql-moe3344"
                description="Java, HTML, CSS, Rest API"
                points={[
                    "Developed the engaging game ”Wordle” using JavaScript, HTML, and CSS, integrating an API endpoint to fetch words and generate hints for an immersive gameplay experience.",
"Implemented a dynamic dark mode feature in ”Wordle,” enhancing user experience and allowing seamless transitions between light and dark themes.",
                    
                 
                ]}
            />
            
            <ProjectCard
                headerImage={LotionStats}
                
                role="Lotion"
                source = 'Live Demo'
                url="https://github.com/moe3344/Zoo-schedule-ava-mysql-moe3344"
                description="Python, JavaScript, HCL, HTML"
                points={[
                    "Developed Lotion using Python, React, and Terraform, leveraging infrastructure as code principles to seamlessly sync with your AWS account.",
"Implemented an autonomous system within ”Lotion” that generates S3 buckets, providing effortless hosting for notes and ensuring an elegant user experience.",
                  
                 
                ]}
            />
             
              <ProjectCard
                headerImage={wordleStats}
                
                role="Personal Portfolio"
                source = 'View Source'
                url="https://github.com/moe3344/Portfolio"
                description="React, JavaScript, Css"
                points={[
                    "Developed Lotion using Python, React, and Terraform, leveraging infrastructure as code principles to seamlessly sync with your AWS account.",
"Implemented an autonomous system within ”Lotion” that generates S3 buckets, providing effortless hosting for notes and ensuring an elegant user experience.",
                  
                 
                ]}
            />
             
            </div>
            
        
        </section>
        <section id="cont">
       <Footer/>
       </section>
        </div>
    );
};

export default Home;
