import React from 'react';
import ImageCard from './ImageCard';
import './style/ImageList.css';

const ImageList = (props) => {

    const contents = props.contents.map( content => {
        return <ImageCard key={ content.id } content={content}/>
    });

    return <div className = "image-list" >{contents}</div>;

}

export default ImageList;