// import { useState } from "react";
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
        <img src= {pic1}  className= "map" ></img>
        <img src= {pic2}  className= "map" ></img>
        <img src= {pic3}  className= "map" ></img>
        <img src= {pic4}  className= "map" ></img>
        <img src= {pic5}  className= "map" ></img>
        <img src= {pic6}  className= "map" ></img>
    </AliceCarousel>
    </div>

/* <div className="app-container">
    <table>
   <thead>
         <tr>
           <th>JUDGE</th>
           <th>DEPUTY COURT CLERK</th>
           <th>ROOM</th>
           <th>BUILDING</th>
          <th>DEPARTMENT</th>
          <th>PHONE</th>
         </tr>
       </thead>
    <tbody>
       </tbody>
     </table> 
 </div>  */
 )
};

export default Directory;