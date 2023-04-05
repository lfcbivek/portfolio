import React, {useState} from 'react';
import {db} from '../../data/firebase';
import { doc, getDocs, collection } from 'firebase/firestore';
import './experience.css'


function GetData() {
    const [entries,setEntry] = useState([]);
    const dbRef = collection(db,"experience");
    useState(() => {
        const getData = async() => {
            const data = await getDocs(dbRef);
            data.forEach( d => console.log(d.data()))
            setEntry(data)
            console.log(JSON.stringify(data,null,4))
            console.log("set entry",JSON.stringify(setEntry,null,4))
        }
        console.log(getData())
    }, [])

    const onCompanyHover = (e) => {
        console.log("hover")
        e.target.style.background = 'red';
    }

    const onMouseOut = e => {
        e.target.style.background = 'white';
    }
    return(
        // <div className='App'>{entries.map((entry) => {
        //     return(
        //         <{entry}>
        //     )
        // })}</div>

        <div className='experience-component'>
            <div className = 'title'>
                <h1 className='clear-sans-bold-italic'> 01 - Professional Experience</h1>
            </div>
            <div className = "company-list">
                <div className= "vertical-line"></div>
                <div className = "companies" onMouseOver={onCompanyHover} onMouseOut={onMouseOut}>ABC</div>
            </div>
        </div>
    )
    
        
}

export default GetData