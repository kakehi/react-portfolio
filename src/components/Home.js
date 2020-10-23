import React from 'react';

import Greeting from './Greeting';
import SectionHeader from './SectionHeader';
import ButtonIcon from './ButtonIcon';
import ImageList from './ImageList';
import ProcessOverview from './ProcessOverview';

import './style/Home.css'

const Home = (props) => {


    return (
        <div className="home-container">
            <Greeting />
            <SectionHeader text = "Featured Projects"/>
            <ImageList contents={props.contents} featured="featured"/>
            <ButtonIcon href="/projects" type="cta-icon below-projects" text="View All Projects"/>
            <SectionHeader text = "Process Overview"/>
            <ProcessOverview />
        </div>
    );

}

export default Home;