import React from 'react'
import shoes from '../assets/kio.png'
import '../styles/home.css'
import '../styles/footer.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
export default function home() {
    return (
        <div className="home">
            <div className="headerContainer" >

                <h1>Sale 50% off</h1>
                <br />
                <br/>
                <Link to="/menu">
                    <button> Buy Now</button>
                </Link>
            </div>
        </div>
    )
}
