import React from 'react';
import '../styles/Skills.css'
import {
  FaAws, FaJava, FaNodeJs, FaReact, FaDocker, FaPython, FaDatabase,
  FaJs, FaMicrochip, FaMicrosoft, FaCogs
} from 'react-icons/fa';
import { SiCplusplus, SiTypescript, SiDotnet,  SiMicrosoftazure } from 'react-icons/si';

const Skills = () => {
  const skills = [
    { name: 'AWS', icon: <FaAws /> },
    { name: 'C++/C', icon: <SiCplusplus /> },
    { name: 'Java', icon: <FaJava /> },
    { name: 'Node.js', icon: <FaNodeJs /> },
    
   
    { name: 'Docker', icon: <FaDocker /> },
    { name: 'Python', icon: <FaPython /> },
    { name: 'React', icon: <FaReact /> },
    { name: 'SQL Database', icon: <FaDatabase /> },
  
    
    { name: 'C#', icon: <FaMicrosoft /> },
    { name: '.NET', icon: <SiDotnet /> },
    { name: 'Agile', icon: <FaCogs /> },
    { name: 'TypeScript', icon: <SiTypescript /> },
    

  ];

  return (
    <section className="skills" id="skills">
      
      <div className="skills-container">
        {skills.map((skill) => (
          <div key={skill.name} className="skill-item">
            <div className="skill-icon">{skill.icon}</div>
            
            
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
