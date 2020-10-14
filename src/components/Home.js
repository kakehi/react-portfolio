import React from 'react';
import Greeting from './Greeting';
import SectionHeader from './SectionHeader';
import Button from './Button';
import ImageList from './ImageList';
import './style/home-container.css'

const Home = (props) => {


    return (
        <div className="home-container">
            <Greeting />
            <SectionHeader text = "Featured Projects"/>
            <ImageList contents={props.contents} featured="featured"/>
            <Button href="/projects" type="primary" text="View All Projects"/>
        </div>
    );

}

export default Home;