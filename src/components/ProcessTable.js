import React from 'react';

const ProcessTable = (props) => {

    let keyId = 0;
    const skill = props.skills.map( skill => {
        return <div className="process-skill" key={keyId+=1}><img alt={skill.name} title={skill.name} src={skill.icon} /></div>;
    });

    return (
        <div className={`process-table ${props.day.toLowerCase()}`} key={props.day.toLowerCase()}>

            <table className="process-table-container">
                <tbody>
                    <tr>
                        <td className={`process-day ${props.day.toLowerCase()}`}>{props.day}</td>
                        <td className="process-content">
                            <div className="process-category">{props.category}</div>
                            <div className="process-headline">{props.headline}</div>
                        </td>
                        <td className="process-skills">{skill}</td>
                    </tr>
                </tbody>
            </table>
 
        </div>
    );

}

export default ProcessTable;