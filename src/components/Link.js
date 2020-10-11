import React from 'react';

const Link = ({ className, href, children }) => {

    const onClick = (event) => {

        // if users used right mouse button for options, return here (normal <a> action)
        if (event.metakey || event.ctrlKey){
            return;
        }

        // make sure it doesn't trigger the default action
        event.preventDefault();
        // make sure it updates URL to the href
        window.history.pushState({}, '', href);
        // make sure it fires the event that Route can listen to
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    };

    return( 
        <a onClick={onClick} className={className} href={href}>
            {children}
        </a>
    );
};

export default Link;