import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import pic1 from './map1.png'
import pic2 from './map2.png'
import pic3 from './map3.png'
import pic4 from './map4.png'
import pic5 from './map5.png'
import pic6 from './map6.png'


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