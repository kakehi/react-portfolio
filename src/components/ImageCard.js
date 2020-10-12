import React from 'react';
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
        const id = this.props.content.gsx$id.$t;

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

        const { id, title, description, urls } = this.props.content;
        const content = this.props.content;
        const imageUrl = '.././img/' + content.gsx$thumb.$t;

        return (
            <div onClick={this.onClick} className="image-card" key={ content.gsx$id.$t } to={ content.gsx$snippet.$t } >
                <div className="project-image">
                    <div className="img" style={{ background: `url(${imageUrl}) no-repeat`}}/>
                </div>
                <div className="project-detail">
                    <h1> { content.gsx$title.$t } </h1>
                    <p className="project-description"> { content.gsx$shortdescription.$t } </p>
                </div>
            </div>
            
        )
    }

    

}

export default ImageCard;