import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
export default function order(props) {
    return (
       
    <div className="card">
         <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <h1>please confirm your order </h1>
          <Link to='/'>
          <button className="button_one">Confirm</button>
          </Link>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
    </div>
       
    )
}
