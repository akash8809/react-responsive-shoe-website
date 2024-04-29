import React from 'react'
import Order from './order'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default function things(props) {
    return (

        <div className="menuItem">
          
         <img src={props.storage.image} alt="" />
          <h1>{props.storage.brand}</h1>
          <b>{props.storage.name}</b>
          <p>{props.storage.price}</p> 
              <Link to='/order'><button className='button_one'> Order now</button></Link>
              
            
        </div>
    )
}
