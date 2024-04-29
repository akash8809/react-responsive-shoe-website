import React, { useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import '../styles/navbar.css'
import Icon from '../styles/icon.png'

export default function Website_head() {
    const [link, setlink] = useState(false)

    const togglenavbar=()=>{
          setlink(!link)
    };
    return (
    <div className="navbar">

                <div className="navbar">
            <div className="leftSide" id={link ? "open" : "close"}>
                <h1>ShoeHub</h1>

                <div className="hiddenLinks" >
                    <Link to='/'> Home</Link>
                    <Link to='/menu'> Products</Link>
                    <Link to='/about'> About</Link>
                    <Link to='/Contact'> Contact</Link>
                </div>
            </div>
            <div className="rightSide">
                <Link to='/'> Home</Link>
                <Link to='/menu'> Products</Link>
                <Link to='/about'> About</Link>
                <Link to='/Contact'> Contact</Link>
                <button onClick={togglenavbar}>
                    <img src={Icon} alt="" />
                </button>
            </div>
        </div>
    </div>
      
    )
}
