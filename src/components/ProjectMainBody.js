import React from "react";
import ProjectHeader from "./ProjectHeader";
import ProjectSection from "./ProjectSection";

const ProjectMainBody = (props) => {

    let contents;
    let bodySections = [];

    if(props.contents.length > 0){
        contents = props.contents;

        for(var i=3; i<contents.length; i++){
            bodySections.push(contents[i].gsx$content.$t);
        }
    }else{
        return(<div></div>);
    }

    

    return (
        <div>
            <ProjectHeader 
                imageSrc={contents[1].gsx$content.$t} 
                title={props.title}
                shortDescription={props.shortDescription}
            />
            <h2> {contents[0].gsx$content.$t && contents[0].gsx$content.$t} </h2>
            <h3> {contents[2].gsx$content.$t} </h3>
            <div className="projectBodyContainer">
                {bodySections.map(bodySection => <ProjectSection content={bodySection} />)} 
            </div>
            
        </div>
    );

};

export default ProjectMainBody;