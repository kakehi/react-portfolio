import React from 'react';
import ProcessSection from './ProcessSection';
import './style/Process.css'

const ProcessOverview = (props) => {

    return (
        <div className="process-overview-container">
            <ProcessSection type="brief" day="Monday" category="UX research" headline="Know the Great Ancestors" 
                skills={[
                    {icon: ".././svg/medium.svg", name: "Medium for researches"}, 
                ]}>
                Before everything, I start with research. Knowing the great products out there or in the past has always helped me project the direction of products. Sometimes, finding materials to do the right research is hard, just like not knowing what to type to search something. To be able to handle that well in real projects, I've been trying to write a quick research on random topics regularly.
            </ProcessSection>
        </div>
    );

}

export default ProcessOverview;