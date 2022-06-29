import React from 'react';                
import 'react-slideshow-image/dist/styles.css';
import homeImage from './Images/mask.jpg';
import weapon from'./Images/weapons.jpg';
import zeroTolerance from './Images/tolerance.png'
import './Home.css';


const Home = () => {
    return (
<<<<<<< Updated upstream
        // <div className="container">
        //     <h1 className ="text-center" style = {{paddingTop:"30%"}}>
        //         Home
        //     </h1>
        // </div>
            <div className="slide-container">
            <Slide>
            {slideImages.map((slideImages, index)=> (
                <div className="each-slide" key={index}>
                    <div style={{'backgroundImage': `url(${slideImages.url})`}}>
                    <span>{slideImages.caption}</span>
                    </div>
=======
        <div class = "slider">
            <div class= "slide-track">
                <div class = "slide">
                    <img src= {homeImage}></img>
>>>>>>> Stashed changes
                </div>
                <div class = "slide">
                    <img src= {weapon}></img>
                </div>
                <div class = "slide">
                    <img src= {zeroTolerance}></img>
                </div>
            </div>


        </div>
    )
}
export default Home;