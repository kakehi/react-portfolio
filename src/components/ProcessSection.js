import React from 'react';

const ProcessSection = (props) => {

    const skill = props.skills.map( skill => {
        return <div className="process-skill" key={skill.name}><img alt={skill.name} title={skill.name} src={skill.icon} /></div>;
    });

    return (
        <div className={`process-section ${props.day.toLowerCase()}`} key={props.day.toLowerCase()}>

            <div className="process-section-container">
                <div className="process-text-block">
                    <div className={`process-day ${props.day.toLowerCase()}`}>{props.day}</div>
                    <h3 className="process-category">{props.category}</h3>
                    <h1 className="process-title">{props.headline}</h1>
                    <div className="process-description">{props.children}</div>
                    <div className="process-skills">
                        {skill}
                    </div>
                </div>
                <div className="process-image-block">
                    <img src={props.src} />
                </div>
            </div>
 
        </div>
    );

}

export default ProcessSection;