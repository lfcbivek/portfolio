import React, {useEffect, useState} from 'react';
import {Experience} from '../../data/portfolio';
import './experience.css'


function GetData() {

    const [selectedIndex, setSelectedIndex] = useState(0);
    const onCompanyHover = (e) => {
        console.log("hover")
        e.target.style.background = 'grey';
    }

    const onMouseOut = e => {
        e.target.style.background = '#61dafb';
    }
    return(
        <div className='experience-component'>
            <div className = 'title'>
                <h1 className='clear-sans-bold-italic'> Professional Experience</h1>
            </div>
            <div className='description-component'>
                <div className='experience'>
                    {Experience && Experience.map(company => {
                        return (
                            <span onMouseOver={onCompanyHover} onMouseOut={onMouseOut}>
                            {/* <span> */}
                                <div className = "company-list">
                                    <div className= "vertical-line"></div>
                                    <div className = "companies">{company["Company"]}</div>
                                </div>
                            </span>
                        );
                        })
                    }
                </div>
                <div className='job-description'>
                    <h2>{Experience[selectedIndex]['Company']}</h2>
                    <br />
                    <ul>
                        {Experience[selectedIndex]['Description'].map(data => (<div><li> {data}</li><br/></div>))}    
                    </ul>
                </div>
            </div>
        </div>
    )
    
        
}

export default GetData