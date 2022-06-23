import React from 'react'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

const slideImages = [
    {
        url:"./Images/mask.jpg",
        caption: 'Slide 1'
    },
    {
        url:"./Images/weapons.jpg",
        caption: 'Slide 2'
    },
]

const Home = () => {
    return (
        // <div className="container">
        //     <h1 className ="text-center" style = {{paddingTop:"30%"}}>
        //         Home
        //     </h1>
        // </div>
            <div className="slide-container">
            <Slide>
            {slideImages.map((slideImage, index)=> (
                <div className="each-slide" key={index}>
                    <div style={{'backgroundImage': `url(${slideImage.url})`}}>
                    <span>{slideImage.caption}</span>
                    </div>
                </div>
                ))} 
            </Slide>
        </div>
    )
}
export default Home;