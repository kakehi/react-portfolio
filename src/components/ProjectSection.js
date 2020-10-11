import React from "react";

const ProjectSection = (props) => {

    return(
        <div className="projectSection v-padding-l">
            <div dangerouslySetInnerHTML={{__html: props.content}} />
        </div>
    );
};

export default ProjectSection;