import React from 'react';
import Link from './Link';
import './style/Header.css';

const Header = (props) => {

    return (
        <div className = "header-nav">
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
    
export default Header;
    