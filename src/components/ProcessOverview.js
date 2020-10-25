import React from 'react';

import spreadsheet from '../api/spreadsheet';
import ProcessTable from './ProcessTable';
import ButtonIcon from './ButtonIcon';

import './style/Process.css'

class ProcessOverview extends React.Component {

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
            
            const content = this.state.contents.map( content => {
                return <ProcessTable key={content.gsx$day.$t} day={content.gsx$day.$t} category={content.gsx$category.$t} headline={content.gsx$headline.$t} skills={getSkillObject(content.gsx$skills.$t)}/>;
            });

            return (
                <div className="process-overview-container">
                    {content}
                    <ButtonIcon href="/process" type="cta-icon" text="View Detail"/>
                </div>
            );
        }else{
            return <div></div>;
        }

    };

}

export default ProcessOverview;