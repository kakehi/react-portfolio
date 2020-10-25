import React from "react";
import spreadsheet from '../api/spreadsheet';
import ProjectMainBody from './ProjectMainBody';
import './style/Project.css';

class Project extends React.Component {

    constructor(props){
        super(props);

        this.state = { 
            snippet: "",
            title: "",
            shortDescription: "",
            contents: []
        };

    }

    componentDidMount = async (term) => {

        // map the url to id
        const urlParam = this.props.match.params.id;
        let urlId, i;
        if(this.props.contents.length > 0){
            i=0;
            while(i<this.props.contents.length){
                if(this.props.contents[i].gsx$snippet.$t !== urlParam){
                    i++;
                }else{
                    urlId = this.props.contents[i].gsx$id.$t;
                    this.setState({
                        snippet: this.props.contents[i].gsx$snippet.$t,
                        title: this.props.contents[i].gsx$title.$t,
                        shortDescription: this.props.contents[i].gsx$shortdescription.$t
                    });
                    i=this.props.contents.length;
                }
            }   
        }

        // Make sure not to call until the ID is ready
        if(typeof urlId == 'undefined'){
            return;
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
                    snippet={this.state.snippet}
                    contents={this.state.contents} 
                    title={this.state.title}
                    shortDescription={this.state.shortDescription}
                />
            </div>
        );

    }

};

export default Project;
