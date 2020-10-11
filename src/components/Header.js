import React from 'react';
import Link from './Link';

const Header = () => {
    return (
        <div className = "ui secondary pointing menu">
            <Link href="/" className = "item">
                Home
            </Link>
            <Link href="/process" className = "item">
                Process
            </Link>
            <Link href="/project" className = "item">
                Project
            </Link>
        </div>
    );
};
    
export default Header;
    