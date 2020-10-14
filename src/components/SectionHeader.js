import React from 'react';
import './style/SectionHeader.css'

const SectionHeader = (props) => {

    return (
        <div className="section-header">
            <h1>{props.text}</h1>
        </div>
    );

}

export default SectionHeader;