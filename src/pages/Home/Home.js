import React from 'react';                
import 'react-slideshow-image/dist/styles.css';
import homeImage from './Images/mask.jpg';
import weapon from'./Images/weapons.jpg';
import zeroTolerance from './Images/tolerance.png';
import summerfest from './Images/summerfest.jpg';
import zoo from './Images/WonderGiraffe.jpg'
import './Home.css';


const Home = () => {
    return (
        <div class = "sliderr">
            <div class= "slide-track">
                <div class = "sliderr">
                    <img src= {homeImage}></img>
                </div>
                <div class = "sliderr">
                    <img src= {weapon}></img>
                </div>
                <div class = "sliderr">
                    <img src= {zeroTolerance}></img>
                </div>
                <div class = "sliderr">
                    <img src= {summerfest}></img>
                </div>
                <div class = "sliderr">
                    <img src= {zoo}></img>
                </div>
                <div class = "sliderr">
                    <img src= {homeImage}></img>
                </div>
                <div class = "sliderr">
                    <img src= {weapon}></img>
                </div>
                <div class = "sliderr">
                    <img src= {zeroTolerance}></img>
                </div>
                <div class = "sliderr">
                    <img src= {summerfest}></img>
                </div>
                <div class = "sliderr">
                    <img src= {zoo}></img>
                </div>
            </div>


        </div>
    )
}
export default Home;