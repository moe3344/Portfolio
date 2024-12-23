import React from 'react';
import '../styles/ExperienceCard.css';

const ExperienceCard = ({ company, logo, role, dates, description, points }) => {
    return (
        <div className="experience-card">
            <div className="experience-header">
                <h2>{company}</h2>
                <div className="logo-container-1">
                    <img src={logo} alt={`${company} Logo`} className="logo-1" />
                </div>
            </div>
            <div className="experience-body">
                <h3>{role}</h3>
                <p className="dates">{dates}</p>
                <p className="description"><strong>{description}</strong></p>
                <ul>
                    {points.map((point, index) => (
                        <li key={index}>{point}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ExperienceCard;
