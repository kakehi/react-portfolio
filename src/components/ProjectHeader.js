import React from "react";
import './style/ProjectHeader.css';

class ProjectHeader extends React.Component {
    
    constructor(props){
        super(props);
        this.state = { };
    }

    render(){

        console.log(this.props);
        const imageUrl = require( '.././img/' + this.props.imageSrc);

        return (
            <div className="projectHeader">
                <div className="bg-img" /*style={{ background: `url(${imageUrl})` }} */ >
                    <div className="head">
                        <h1 className="title">{this.props.title}</h1>
                        <p className="v-margin-l">{this.props.shortDescription}</p>
                    </div>
                </div>
            </div>
        );

    };
}

export default ProjectHeader;

