import React , {useState, 
    
    useEffect} from 'react'
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import $ from 'jquery';
import logo from './logo.png'


const Navbar = () => {
    const [dateState, setDateState] = useState(new Date());
    useEffect(() => {
    setInterval(() => setDateState(new Date()), 30000);
}, []);

function animation(){
    var tabsNewAnim = $('#navbarSupportedContent');
    var activeItemNewAnim = tabsNewAnim.find('.active');
    var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
    var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    var itemPosNewAnimTop = activeItemNewAnim.position();
    var itemPosNewAnimLeft = activeItemNewAnim.position();
    $(".hori-selector").css({
    "top":itemPosNewAnimTop.top + "px", 
    "left":itemPosNewAnimLeft.left + "px",
    "height": activeWidthNewAnimHeight + "px",
    "width": activeWidthNewAnimWidth + "px"
    });
    $("#navbarSupportedContent").on("click","li",function(e){
    $('#navbarSupportedContent ul li').removeClass("active");
    $(this).addClass('active');
    var activeWidthNewAnimHeight = $(this).innerHeight();
    var activeWidthNewAnimWidth = $(this).innerWidth();
    var itemPosNewAnimTop = $(this).position();
    var itemPosNewAnimLeft = $(this).position();
    $(".hori-selector").css({
        "top":itemPosNewAnimTop.top + "px", 
        "left":itemPosNewAnimLeft.left + "px",
        "height": activeWidthNewAnimHeight + "px",
        "width": activeWidthNewAnimWidth + "px"
    });
    });
}
useEffect(() => {
    
    animation();
    $(window).on('resize', function(){
    setTimeout(function(){ animation(); }, 500);
    });
    
}, []);

return (
<nav className="navbar navbar-expand-lg navbar-mainbg">
    <NavLink className="navbar-brand navbar-logo" to="/" exact>
    <img className='navbar-logo' src= {logo}></img>
    </NavLink>
     {/* <button className="navbar-toggler"onClick={ function(){
        setTimeout(function(){ animation(); });
        }}
        type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i className="fas fa-bars text-white"></i>
    </button>  */}

    <div 
        className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
            <div className="hori-selector">
            <div className="left"></div>
            <div className="right"></div>
            </div>
            
            <li className="nav-item active">
            <NavLink className="nav-link" to="/home" exact>
                <i 
                className="fas fa-home">
                </i>Home
            </NavLink>
            </li>
            {/* <li className="nav-item">
            <NavLink className="nav-link" to="/about" exact>
                <i 
                className="far fa-address-book">
                </i>About
            </NavLink> 
            </li> */}
            <li className="nav-item">
            <NavLink className="nav-link" to="/directory" exact>
                <i 
                className="far fa-map">
                </i>Directory
            </NavLink> 
            </li>
            <li className="nav-item">
            <NavLink className="nav-link" to="/maps" exact>
                <i  
                className="fas fa-map-marker-alt">
                </i>Map
            </NavLink> 
            </li>
            <li className="nav-item">
            <NavLink className="nav-link" to="/event" exact>
                <i 
                className="far fa-calendar">
                </i>Events
            </NavLink> 
            </li>
            <li className="nav-item">
            <NavLink className="nav-link" to="/jobs" exact>
                <i 
                className="far fa-handshake">
                </i>Jobs
            </NavLink> 
            </li>
            <li className="nav-item">
            <NavLink className="nav-link" to="/service" exact>
                <i 
                className="far fa-clone">
                </i>Services
            </NavLink>
            </li>
            {/* <li className="nav-item">
            <NavLink className="nav-link" to="/contact" exact>
                <i 
                className="far fa-address-book">
                </i>Contact Us
            </NavLink>
            </li> */}
            <li className="nav-item">
            <NavLink className="nav-link" to="/feedback" exact>
                <i 
                className="far fa-comment">
                </i>Feedback
            </NavLink>
            </li>        
        </ul>
        <div className="time">
            <div className='date'>
            <p> 
            {' '}
            {dateState.toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
            })}
             </p>
            <p> 
            {dateState.toLocaleString('en-US', {
                hour: 'numeric',
                minute: 'numeric',
                hour12: true,
            })}
            
            
            </p>
            </div>
        </div>
    </div>
    
</nav>

)
}

export default Navbar;