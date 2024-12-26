import React, { useState } from 'react';
import '../styles/ProjectCard.css';

const ProjectCard = ({ headerImage, role, url, description, points , source}) => {
    const [showDialog, setShowDialog] = useState(false);

    const handleOpenDialog = () => setShowDialog(true);
    const handleCloseDialog = () => setShowDialog(false);

    return (
        <div className="project-card">
            {/* Header with Image */}
            <h3>{role}</h3>
            <div className="project-header">
                <img src={headerImage} alt="Header" className="header-image" />
            </div>
            
            {/* Body Content */}
            <div className="project-body">
               
                <a href={url} target="_blank" rel="noopener noreferrer" className="project-link">
                    {source}
                </a>
                <p className="description"><strong>{description}</strong></p>
                <button onClick={handleOpenDialog} className="view-points-button">
                     Details
                </button>
               
            </div>

            {/* Dialog */}
            {showDialog && (
                <div className="dialog-overlay">
                    <div className="dialog-content">
                        <h3>Details</h3>
                        <ul>
                            {points.map((point, index) => (
                                <li key={index}>{point}</li>
                            ))}
                        </ul>
                        <button onClick={handleCloseDialog} className="close-dialog-button">
                            Close
                        </button>
                    </div>
                </div>
            )}
            
        </div>
    );
};

export default ProjectCard;
