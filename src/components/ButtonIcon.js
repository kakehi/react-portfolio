import React from 'react';
import Link from './Link';

const ButtonIcon = (props) => {

    return (
        <div className="cta-container">
            <Link href={props.href} className={`cta ${props.type}`}>
                <div className="icon"><img src=".././svg/next.svg" /></div>
                <div className="text">View All Projects</div>
            </Link>
        </div>
    );

}

export default ButtonIcon;