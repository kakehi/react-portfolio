import React from "react";
import ProjectHeader from "./ProjectHeader";
import ProjectSection from "./ProjectSection";

const ProjectMainBody = (props) => {

    // Create Sections
    let contents;
    let bodySections = [];

    if(props.contents.length > 0){
        contents = props.contents;

        for(var i=2; i<contents.length; i++){
            bodySections.push(contents[i].gsx$content.$t);
        }
    }else{
        return(<div></div>);
    }

    return (
        <div>
            <ProjectHeader
                snippet={props.snippet}
                imageSrc={contents[0].gsx$content.$t} 
                title={props.title}
                shortDescription={props.shortDescription}
                categories={contents[1].gsx$content.$t}
            />
            <div className="projectBodyContainer v-margin-l">
                {bodySections.map(bodySection => <ProjectSection content={bodySection} />)} 
            </div>
            
        </div>
    );

};

export default ProjectMainBody;