import React from 'react';
import { withRouter } from 'react-router';

import Link from './Link';

import './style/Header.css';


class Header extends React.Component {

    constructor(props){
        super(props);
        this.state = {
           className: ""
        };
    }
    
    componentDidMount = () => {
        
        // update the path 
        this.pathUpdate = (path) => {
            let className = (
                path.pathname.split('/').slice(-1).pop() === "" ? 'home': path.pathname.split('/').slice(-1).pop());
            this.setState({className: className});
        }

        // run the function
        this.pathUpdate(this.props.location);
        
        this.unlisten = this.props.history.listen((location, action) => {
            this.pathUpdate(location);
        });
    }

    componentWillUnmount() {
        this.unlisten();
    }
    

    render (){        

        return (
            <div className = {`header-nav ${this.state.className}`}>
                <div className="header-nav-item">
                    <Link href="/" className = "link-item">
                        Home
                    </Link>
                </div>
                <div className="header-nav-item">
                    <Link href="/process" className = "link-item">
                        Process
                    </Link>
                </div>
                <div className="header-nav-item">
                    <Link href="/projects" className = "link-item">
                        Projects
                    </Link>
                </div>
            </div>
        );
    };

};
    
export default withRouter(Header);
    