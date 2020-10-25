import React from 'react';

import ImageCard from './ImageCard';
import ButtonIcon from './ButtonIcon';
import './style/ImageList.css';

const ImageList = (props) => {

    const urlParams = new URLSearchParams(window.location.search).get('key');
    
    let featuredCount = 0;
    let featuredFilled = false;
    const contents = props.contents.map( content => {
        console.log(featuredCount);
        // visibility changes based on the pivacy. If the privacy column is not empty AND url param is wrong, turn off.
        let visibility = ( content.gsx$private.$t !== "" && urlParams !== "6vMr6t" ? false : true);

        // if it is featured content and not home, turn visibility off
        if((props.featured === "featured" && content.gsx$featured.$t === "") || featuredFilled){
            visibility = false;
        }

        if(props.featured === "featured" && content.gsx$featured.$t !== "" && visibility){
            if(featuredCount < 7){
                featuredCount ++;
            }else{
                featuredFilled = true;
            }
        }

        return (visibility ? <ImageCard key={ content.gsx$id.$t } content={content}/>: "");

    });


    let nextCta = <div></div>;
    if(props.featured === "featured"){
        nextCta = <ButtonIcon href="/projects" type="cta-icon in-projects" className="center" text="View All Projects"/>;
    }

    return (
        <div className = "image-list" >
            {contents}
            {nextCta}
        </div>
    );

}

export default ImageList;
