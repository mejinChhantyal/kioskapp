import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import pic1 from './map1.png'


const Directory = () => {
 return (
    <div>
     <AliceCarousel autoPlay> 
        <img src= {pic1}  className= "map" alt='Floor 1'></img>
        <img src= {pic1}  className= "map" alt='Floor 2'></img>
    </AliceCarousel>
    </div>
 )
};

export default Directory;