import React from 'react'
import Many_images from '../assets/jui.png'
import '../styles/about.css'
export default function about() {
    return (
      <div className="about">
           <img  className="aboutTop" src={Many_images} alt="" />
          <div className="aboutBottom">
               <h1>About Us</h1> 
               <p>We provide best quality to our customers this is just small 
                   
                   startup we have launch and we are also looking  forward to have our stores
                   
                   please if you want  to contact us go to contact page
                   </p>
          </div>
      </div>  
    )
}
