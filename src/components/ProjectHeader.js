import React from "react";
import './style/ProjectHeader.css';

class ProjectHeader extends React.Component {
    
    constructor(props){
        super(props);
        this.state = { };
    }

    render(){

        const imageUrl = '.././img/' + this.props.imageSrc;
        const categories = this.props.categories.split(',');

        return (
            <div className={`projectHeader ${this.props.snippet}`}>
                <div className="bg-img" style={{ background: `url(${imageUrl}) no-repeat` }} >
                    <div className="head">
                        <h1 className="title">{this.props.title}</h1>
                        <p className="v-margin-l">{this.props.shortDescription}</p>
                        <div className="categories">
                            {categories.map(category => <div className="category">{category}</div>)} 
                        </div>
                    </div>
                </div>
            </div>
        );

    };
}

export default ProjectHeader;

