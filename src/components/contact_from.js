import React from 'react'
import '../styles/contact.css'
export default function contact_from() {
    return (
        <form className="container" method="POST">
            
            
            <div className="left">
             <div className="header">
                <h2 className="animation a1"> Contact us</h2>  
                <div className="form">
            <input type="name"  className="form-field animation a3" placeholder="name"/>
            <input type="email" className=" form-field animation a4" placeholder ="email"/>
            
            <textarea type="message"  className="message" placeholder="message" rows="6">
                 
                </textarea>
            <button className="animation a6"
             type="Submit" value="Submit">
                 Submit
            </button>
            </div>
            </div> 
              
            </div>
            <div class="right"></div> 
        </form>
    )
}
