import React from 'react';

import spreadsheet from '../api/spreadsheet';
import ProcessTable from './ProcessTable';
import ProcessSection from './ProcessSection';
import ButtonIcon from './ButtonIcon';

import './style/Process.css'

class Process extends React.Component {

    constructor(props){
        super(props);

        this.state = { 
            contents: []
        };

    }

    componentDidMount = async (term) => {


        // call the appropriate URL
        const response = await spreadsheet.get('2/public/full?alt=json', {
            params: { query: term }
        });
        
        this.setState({
            contents: response.data.feed.entry
        });

    }

    render (){
        
        const getSkillObject = (skillsString) => {
            let skills = skillsString
            .replace(/(\r\n|\n|\r)/gm, "")
            .replace(/\s/g, '')
            .split('¥');
            for (let i=0; i< skills.length; i++){
                skills[i] = (skills[i] !== "" ? JSON.parse(skills[i]) : ""); 
            }
            return skills;
        }

        if(this.state.contents.length > 0){

            let content, button;
            if(this.props.page === "home"){
                content = this.state.contents.map( content => {
                    return <ProcessTable key={content.gsx$day.$t} day={content.gsx$day.$t} category={content.gsx$category.$t} headline={content.gsx$headline.$t} skills={getSkillObject(content.gsx$skills.$t)}/>;
                });
                button = <ButtonIcon href="/process" type="cta-icon" text="View Detail"/>;
            }else if(this.props.page === "process"){
                content = this.state.contents.map( content => {
                return <ProcessSection key={content.gsx$day.$t} day={content.gsx$day.$t} category={content.gsx$category.$t} headline={content.gsx$headline.$t} skills={getSkillObject(content.gsx$skills.$t)} src={content.gsx$image.$t}>{content.gsx$description.$t}</ProcessSection>;
                });
            }
           
            return (
                <div className="process-overview-container">
                    {content}
                    {button}
                </div>
            );

        }else{

            return <div></div>;
        
        }

    };

}

export default Process;