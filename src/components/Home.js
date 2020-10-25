import React from 'react';

import Greeting from './Greeting';
import SectionHeader from './SectionHeader';
import ButtonIcon from './ButtonIcon';
import ImageList from './ImageList';
import Process from './Process';

import './style/Home.css'

const Home = (props) => {


    return (
        <div className="home-container">
            <Greeting />
            <SectionHeader text = "Featured Projects"/>
            <ImageList contents={props.contents} featured="featured"/>
            <ButtonIcon href="/projects" type="cta-icon below-projects" text="View All Projects"/>
            <SectionHeader text = "Process Overview"/>
            <Process page="home"/>
        </div>
    );

}

export default Home;