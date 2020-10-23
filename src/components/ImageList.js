import React from 'react';
import ImageCard from './ImageCard';
import ButtonIcon from './ButtonIcon';
import './style/ImageList.css';

const ImageList = (props) => {

    const contents = props.contents.map( content => {
        
        // featured
        if(props.featured === "featured"){
            if(content.gsx$featured.$t !== ""){
                return <ImageCard key={ content.gsx$id.$t } content={content}/>;
            }else{
                return [];
            }
            
        }
        return <ImageCard key={ content.gsx$id.$t } content={content}/>
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