import React from 'react';                
import 'react-slideshow-image/dist/styles.css';
import homeImage from './Images/mask.jpg';
import weapon from'./Images/weapons.jpg';
import zeroTolerance from './Images/tolerance.png'
import './Home.css';


const Home = () => {
    return (
        <div class = "slider">
            <div class= "slide-track">
                <div class = "slide">
                    <img src= {homeImage}></img>
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