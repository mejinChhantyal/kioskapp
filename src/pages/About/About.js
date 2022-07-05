import React, { useState } from 'react'
import './About.css'
// import {Button} from 'react-bootstrap'
 import Card from "react-bootstrap/Card";

const About = () => {
    
    return (
    <div class="containers">
       <div class="card">
            <div class="front">Background Information</div>
            <div class="back">Milwaukee County was formed in 1835 
            when it was part of the Michigan Territory. Prior to that, the area had been settled by a 
            variety of Native American tribes and was explored by French
            Priests and traders as far back as 1674. The name “Milwaukee” is generally believed to be
            derived from a Native American term meaning “good land.”</div>
            </div>
            <div class="card">
           <div class="front">Mission</div>
           <div class="back">We enhance the quality of life in Milwaukee County 
            through great public service.</div>
            </div>
           <div class="card">
           <div class="front">Vision</div>
           <div class="back">By achieving racial equity, Milwaukee County is the 
           healthiest county in Wisconsin.</div>
       </div>
   </div>  
  );
}
export default About;