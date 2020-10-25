import React from "react";
import ImageList from './ImageList';
import './style/Projects.css'

const Projects = (props) => {
    
    return (
        <div className="projects-container">
            <ImageList contents={props.contents} featured=""/>
        </div>
    );

};

export default Projects;
