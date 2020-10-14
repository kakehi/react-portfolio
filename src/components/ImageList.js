import React from 'react';
import ImageCard from './ImageCard';
import './style/ImageList.css';

const ImageList = (props) => {

    const contents = props.contents.map( content => {
        
        // featured
        if(props.featured === "featured"){
            if(content.gsx$featured.$t !== ""){
                return <ImageCard key={ content.gsx$id.$t } content={content}/>;
            }else{
                return;
            }
            
        }
        return <ImageCard key={ content.gsx$id.$t } content={content}/>
    });

    return <div className = "image-list" >{contents}</div>;

}

export default ImageList;