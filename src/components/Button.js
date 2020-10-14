import React from 'react';
import Link from './Link';

const Button = (props) => {

    return (
        <div className="cta-container">
            <Link href={props.href} className={`cta ${props.type}`}>
                <h4>{props.text}</h4>
            </Link>
        </div>
    );

}

export default Button;