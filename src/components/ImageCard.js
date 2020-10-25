import React from 'react';
import setup from '../setup.json';
import './style/ImageCard.css';

class ImageCard extends React.Component {

    constructor(props){
        super(props);

        this.state = { spans: 0 };

        this.imageRef = React.createRef();
    }

    componentDidMount(){
        
    }


    setSpan = () => {
        const height = this.imageRef.current.clientHeight;

        const spans = Math.ceil( height / 10 );

        this.setState ( { spans } );
    }

    onClick = (event) => {
        
        const url='/project/' + this.props.content.gsx$snippet.$t;

        // if users used right mouse button for options, return here (normal <a> action)
        if (event.metakey || event.ctrlKey){
            return;
        }
        
        // make sure it doesn't trigger the default action
        event.preventDefault();
        // make sure it updates URL to the href
        window.history.pushState({}, '', url);
        // make sure it fires the event that Route can listen to
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    }

    render(){

        const content = this.props.content;
        
        // thumbnail
        const thumbnails = content.gsx$thumb.$t.split(',').map(thumb => thumb.trim());;
        const imageUrl = setup.imagePath + thumbnails[0];
        let overlayImageUrl;
        if(thumbnails.length === 1){    
            overlayImageUrl = setup.imagePath + thumbnails[0];
        }else{
            overlayImageUrl = setup.imagePath + thumbnails[1];
        }

        return (
            <div onClick={this.onClick} className="image-card" key={ content.gsx$id.$t } to={ content.gsx$snippet.$t } >
                <div className="project-image">
                    <div className="img" style={{ background: `url(${imageUrl}) no-repeat`}}/>
                    <div className="img overlay" style={{ background: `url(${overlayImageUrl}) no-repeat`}}/>
                </div>
                <div className="project-detail">
                    <h2> { content.gsx$title.$t } </h2>
                    <p className="project-description"> { content.gsx$shortdescription.$t } </p>
                </div>
            </div>
            
        )
    }

    

}

export default ImageCard;