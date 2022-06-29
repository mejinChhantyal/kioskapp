import "./Directory.css";
<<<<<<< Updated upstream
import { useState } from "react";

const Directory = () => {



  return <div className="app-container">
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
  </div>
=======
// import { useState } from "react";
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import pic1 from './map1.png'


const Directory = () => {
 return (
    <div>
     <AliceCarousel autoPlay> 
        <img src= {pic1}  className= "map" ></img>
        <img src= {pic1}  className= "map" ></img>
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
>>>>>>> Stashed changes
};

export default Directory;