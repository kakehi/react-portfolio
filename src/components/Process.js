import React, { Component } from "react";
import ProcessSection from './ProcessSection';
import './style/Process.css'

const Process = () => {
    return (
        <div className="process-container">
            <ProcessSection type="brief"  day="Monday" category="Product Research" headline="Understand the Great Ancestors" src="https://minutes.co/wp-content/uploads/2019/06/research-and-scholarship.jpg" 
                skills={[
                    {icon: ".././svg/medium.svg", name: "Medium for researches"}, 
                    ]}>
                Before everything, I start with research. Knowing the great products out there or in the past has always helped me project the direction of products. Sometimes, finding materials to do the right research is hard, just like not knowing what to type to search something. To be able to handle that well in real projects, I've been trying to write a quick research on random topics regularly.
            </ProcessSection>
            <ProcessSection type="brief" day="Tuesday"  category="Product Design" headline="Visualize for Better Talks" src="https://i.pinimg.com/originals/48/f0/3f/48f03f33c7fff0febd5bfe085076de59.png" 
                skills={[
                    {icon: ".././svg/invision.svg", name: "inVision freehand for collaborations"}, 
                    {icon: ".././svg/sketch.svg", name: "Sketch for rapid prototyping"}, 
                    {icon: ".././svg/figma.svg", name: "Figma for collaborative prototyping"},
                    {icon: ".././svg/draw-io.svg", name: "Draw.io for sitemapping"}
                    ]}>
                I immediately create wireframes, not to propose the ultimate solutions, but to expose opportunities and talk about them.
            </ProcessSection>
            <ProcessSection type="brief" day="Wednesday" category="Interaction Design" headline="Let me Make Those Designs Feel Real" src=".././img/gabriel-riva-05.gif" 
                skills={[
                    {icon: ".././svg/sketch.svg", name: "Sketch for interactive prototyping"}, 
                    {icon: ".././svg/principle.svg", name: "Principle for micro interactions"}, 
                    {icon: ".././svg/after-effects.svg", name: "After Effects for presentations"},
                    {icon: ".././svg/html-5.svg", name: "HTML"}, 
                    {icon: ".././svg/sass.svg", name: "CSS, SASS, SCSS"}, 
                    {icon: ".././svg/javascript.svg", name: "javaScript"}
                    ]}>
                Interactive flash websites from the early 2000s were the reasons why I'm brought into this field from my previous field, architecture. Those attention to the details are the core and the joy. To convey how exciting it is to even place your cursor on a single button, I won't be holding back from spending time on making my prototypes feel real.
            </ProcessSection>
            <ProcessSection type="brief" day="Thursday" category="Project Management" headline="Iterative Documentation" src=".././img/gabriel-riva-05.gif" 
                skills={[
                    {icon: ".././svg/sketch.svg", name: "File organizations and libraries in Sketch"},
                    {icon: ".././svg/figma.svg", name: "Figma for dev ready assets and communications"}, 
                    {icon: ".././svg/adobe-xd.svg", name: "Adobe XD"},
                    {icon: ".././svg/zeplin.svg", name: "Zeplin for inspectable files"},
                    {icon: ".././svg/google-drive.svg", name: "Ultimately, slides are practical, clear, and awesome..."},
                    ]}>
                Before everything, I start with research. Knowing the great products out there or in the past has always helped me project the direction of products. Sometimes, finding materials to do the right research is hard, just like not knowing what to type to search something. To be able to handle that well in real projects, I've been trying to write a quick research on random topics regularly. 
            </ProcessSection>
            <ProcessSection type="brief" day="Friday" category="Product Management" headline="Follow Up with Facts" src=".././img/gabriel-riva-05.gif" 
                skills={[
                    {icon: ".././svg/google-analytics.svg", name: "Google Analytics"},  
                    {icon: ".././svg/tableau.svg", name: "Tableau for data analytics"}, 
                    {icon: ".././svg/app-store.svg", name: "App Store for reviews and analytics"}
                    ]}>
                <p>As much as shaping a product is important, reevaluating the outcome based on the hypothesis gives hints for our next action items. Products are living things. Qualitative or quantitative evaluations are up to how the original hypothesis was framed.</p>
                <p>Simultaneously, support messages and reviews are other components to access the health of products. More importantly, messages we see in these channels are users' true voices. Although getting caught up on particular feedback may risk losing our focus on product directions, they serve as great inspirations for next week.
                </p>
            </ProcessSection>
            <ProcessSection type="brief" day="Saturday" category="Learning New Skills" headline="Tools Are Just Tools ...But" src=".././img/gabriel-riva-05.gif" 
                skills={[
                    {icon: ".././svg/react.svg", name: "react"}, 
                    {icon: ".././svg/unity-3d.svg", name: "Unity3D"},
                    {icon: ".././svg/c-plus-plus.svg", name: "C++ with Unity3D"},
                    {icon: ".././svg/angular.svg", name: "Angular"}
                    ]}>
                Before everything, I start with research. Knowing the great products out there or in the past has always helped me project the direction of products. Sometimes, finding materials to do the right research is hard, just like not knowing what to type to search something. To be able to handle that well in real projects, I've been trying to write a quick research on random topics regularly.
            </ProcessSection>
            <ProcessSection type="brief" day="Sunday" category="Creative Coding" headline="Sometimes, Logic Is Not Everything" src=".././img/gabriel-riva-05.gif" 
                skills={[
                    {icon: ".././img/assets/cinema-4d.png", name: "Cinema4D"}, 
                    {icon: ".././svg/unity-3d.svg", name: "Unity3D"},
                    {icon: ".././svg/after-effects.svg", name: "After Effects"},
                    {icon: ".././svg/c-sharp.svg", name: "C# for OpenFrameworks"},
                    {icon: ".././svg/dribbble.svg", name: "dribbble"}
                    ]}>
                Before everything, I start with research. Knowing the great products out there or in the past has always helped me project the direction of products. Sometimes, finding materials to do the right research is hard, just like not knowing what to type to search something. To be able to handle that well in real projects, I've been trying to write a quick research on random topics regularly.
            </ProcessSection>
        </div>
    );

};

export default Process;
