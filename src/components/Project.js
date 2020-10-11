import React from "react";
import spreadsheet from '../api/spreadsheet';
import ProjectMainBody from './ProjectMainBody';
import './style/Project.css';

class Project extends React.Component {

    constructor(props){
        super(props);

        this.state = { 
            title: "",
            shortDescription: "",
            contents: []
        };

    }

    componentDidMount = async (term) => {

        // map the url to id
        const urlParam = this.props.match.params.id;
        let urlId;
        if(this.props.contents.length > 0){
            let i=0;
            while(i<this.props.contents.length){
                if(this.props.contents[i].gsx$snippet.$t!= urlParam){
                    i++;
                }else{
                    urlId = i+2;
                    this.setState({
                        title: this.props.contents[i].gsx$title.$t,
                        shortDescription: this.props.contents[i].gsx$shortdescription.$t
                    });
                    i=this.props.contents.length;
                }
            }
        }

        // call the appropriate URL
        const response = await spreadsheet.get(urlId + '/public/full?alt=json', {
            params: { query: term }
        });
        
        this.setState({contents: response.data.feed.entry});
    }

    render (){
        return (
            <div>
                <ProjectMainBody 
                    contents={this.state.contents} 
                    title={this.state.title}
                    shortDescription={this.state.shortDescription}
                />
            </div>
        );

    }

};

export default Project;
