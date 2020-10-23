import React from 'react';
import './style/Greeting.css';

const Greeting = () => {

    return (
        <div className="greeting-container">
            <div className="main-text">
                <h1 className="v-padding-l">Nice to See You!</h1>
                <p className="my-title v-padding-l">I'm Takuma, a Product and Interactive Designer.</p>
            </div>
            <div className="media-container">
                <a className="media email" href="mailto:takuma.kakehi@gmail.com">
                    <div>
                        <img width="48" src="/.././svg/email_outline.svg" />
                    </div>
                    <div>
                        Contact me
                    </div>
                </a>
                <a className="media dribbble" href="https://dribbble.com/tkakehi" target="_blank">
                    <div>
                        <img width="48" src="/.././svg/dribbble_outline.svg" />
                    </div>
                    <div>
                        Dribbble
                    </div>
                </a>
                <a className="media medium" href="https://medium.com/@takuma.kakehi" target="_blank">
                    <div>
                        <img width="48" src="/.././svg/medium_outline.svg" />
                    </div>
                    <div>
                        Medium
                    </div>
                </a>
            </div>
        </div>
    );

}

export default Greeting;