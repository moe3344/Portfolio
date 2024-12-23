import React from 'react';
import Lottie from 'lottie-react';
import { FaProjectDiagram, FaUser, FaTools, FaFileAlt, FaBriefcase, FaGithub } from 'react-icons/fa'; // Import the relevant icons
import '../styles/Home.css';
import Navbar from "./Navbar"
import Skills from "./Skills"
import UCalgaryLogo from '../assets/logo.jpg';
import symendLogo from '../assets/SymendLogo.jpg'
import DEMO from '../assets/demo.jpg';
import smartGarden from '../assets/SmartGarden.jpg';
import smartGardenStats from '../assets/SmartGardenStats.jpg';
import ExperienceCard from "./ExperienceCrad";
import ProjectCard from "./ProjectCard";
import ZooStats from "../assets/ZooStats.jpg"

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
const ExperienceAnimation = () => {
    return (
        <div className="typing-person">
            <Lottie animationData={experienceAnimation} loop={true}  style={{ background: 'transparent' }} />
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
    return (
        <div className >
            <Navbar/>
        <section className="home" id="home">
          
        
            <div className="rectangle">
                <div className='profile-pic'>
                    <ProfileAnimation/>
                    <h2 className="header-with-animation">
                         Hi all, I'm Mohamad 
                    </h2>
                    
                    <p className='rectangle-color'>Software engineer in the making, striving to turn ideas into impactful applications.</p>



                  
                </div>
                <div className="circle-buttons-container">
                    <div className="circle-button" style={{ marginLeft:"30px" }} >
                        <FaFileAlt size={40} />
                        <p>Resume</p>
                    </div>
                    <div className="circle-button">
                        <FaBriefcase size={40} />
                        <p>Experience</p>
                    </div>
                   
                    <div className="circle-button">
                        <FaUser size={40} />
                        <p>About Me</p>
                    </div>
                    <div className="circle-button">
                        <FaTools size={40} />
                        <p>Skills</p>
                    </div>
                   

                    
                    <div className="circle-button">
                        <FaProjectDiagram size={40} />
                        <p>Projects</p>
                    </div>
                   
                    <div className="circle-button">
                        <FaGithub size={40} />
                        <p>GitHub</p>
                    </div>
                    
                </div>
            </div>
            <HelloPerson/>
            
           
        </section>
        
        <section className='education'>
       
        <div >
              
              <TypingPerson/>
    



            
      
          
      </div>
        <div className='education-rectangle-1' >
              
              <h2>Who am I?</h2>
              <p className='p-with-animation'><CrazyAnimation /><strong>CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK</strong></p>
              <Skills/>
            
            <p>⚡Develop highly interactive Front end / User Interfaces for your web and mobile applications.
            </p>
            <p>⚡Build robust and scalable server-side applications, APIs, and databases to power your software solutions.
            </p>
            <p>⚡Design and deploy cloud-based solutions using platforms like AWS and Azure to ensure scalability, security, and efficiency.
            </p>
            

      
            
      
          
        </div>
        
        
            
        </section>
        <section className='education' >
            <div className='education-rectangle'>
                <h1>Education</h1>
                <img src={UCalgaryLogo} alt="University of Calgary Logo" className="university-logo" />
            
                <p><strong>University of Calgary</strong> </p>
                <p>September 2021 - May 2026</p>
                <p>Bachelor of Science in Software Engineering</p>
            </div>
            <EducationAnim/>
        </section>
       
        <section className='education' >
            
            <div>
            <ExperienceCard
                company="Symend"
                logo={symendLogo}
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
        <div className='exp-header'>
            
        {/* <h1 style={{color:"lavender", align:"center",marginRight:"50px" ,background:"lavender", padding:"20px", borderRadius:"20px", color:"rgb(44, 3, 44)"}}>Experience</h1> */}
        <ExperienceAnimation/>
        </div>
        <div>
            <ExperienceCard
                company="Freelancer"
                logo={freeLancer}
                role="Front-End Developer"
                dates="Jan 2023 – Present"
                description=" Typescript, React, Tailwind"
                points={[
                    "Built responsive websites for Calgary-based companies like YYC Decorations and Ram Flooring using React, TypeScript, JavaScript, and Tailwind CSS.",
                    "Delivered user-friendly designs, ensuring performance optimization and cross-browser compatibility.",
                    "Collaborated with clients to meet branding and functionality needs, completing projects on time.",
                    ]}
            />
        </div>
        </section>
        <h1 style={{color:"black"}}>Projects</h1>
        <section className='education' >
            
            <div className="pro-cards">
            <ProjectCard
                headerImage={smartGardenStats}
                logo={smartGarden}
                role="Bloom bot"
                url="https://github.com/moe3344/smartGarden"
                description="C++, Typescript, React-Native, Esp-Idf, AWS "
                points={[
                    "Developed an Android app using React Native for real-time monitoring and control of garden systems, integrated with AWS AppSync and GraphQL APIs to store and manage data in a DynamoDB table.",
                    "Programmed the ESP32-S3 microcontroller in C++ to read from sensors, control actuators, and communicate with AWS IoT Core via MQTT to publish and subscribe to topics.",
                    "Implemented AWS Lambda functions to enable seamless data transmission between AWS AppSync and IoT Core, ensuring efficient interaction between the cloud, mobile app, and microcontroller.",
                 
                ]}
            />
            <ProjectCard
                headerImage={ZooStats}
                
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
                headerImage={wordleStats}
                
                role="Wordle Game"
                url="https://github.com/moe3344/Zoo-schedule-ava-mysql-moe3344"
                description="Java, HTML, CSS, Rest API"
                points={[
                    "Developed a versatile scheduling app, streamlining worker allocation and reducing administrative overhead by 90%.",
"Applied object-oriented programming for a maintainable codebase, improving readability and scalability.",
                    "Integrated data from an SQL database for efficient scheduling information retrieval, ensuring seamless user experience.",
                    "Designed an intuitive GUI for schedule creation and management, enhancing usability.",
                 
                ]}
            />
            </div>
            
        
        </section>
        </div>
    );
};

export default Home;
