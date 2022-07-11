import React from "react";
import './Events.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/umd/popper.min.js'
import $ from 'jquery';

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction";


const Events = () => {
    return (
        // <div className="container">
        //     <h1 className ="text-center" style = {{paddingTop:"30%"}}>
        //        Events
        //     </h1>
        // </div>
        <div className="MainDiv">
    {/* <div class="jumbotron text-center">
    <h1>Calender</h1>
    </div> */}
    <div className="container">
        <FullCalendar
            plugins={[ dayGridPlugin, interactionPlugin ]}
            //Dayclick open sweetalert
            dateClick={function(arg) {
            $("#myModal").modal("show");
            $(".modal-body").html("");
            $(".modal-body").html("<h3>"+arg.dateStr+"</h3>");
            }}
            initialView="dayGridMonth"
            events={[
            { title: 'Mitchell Park Domes Summer Show: Faerie Gardens', date: '2022-06-10' },
            { title: 'Little Wonders: Froggy Fun, at Wehr Nature Center.', date: '2022-06-11' },
            {title:'Milwaukee County Board of Supervisors', date: '2022-07-28'},
            {title:'Economic and Community Development Committee', date:'2022-07-25'},
            {title:'Parks, Energy Environment Committee', date:'2022-07-19'},
            {title:'Independence Day', date:'2022-07-04'},
            {title:'Finance Committee', date:'2022-07-21'},
            {title:'Commission on Aging', date:'2022-07-28'},
            {title:'Audit Committee', date:'2022-07-20'},    
            ]}
        />
        </div>
        <div class="modal" id="myModal">
            <div class="modal-dialog">
            <div class="modal-content">
            
                <div class="modal-header">
                <h4 class="modal-title align-center">Add Event</h4>
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>
                
                <div class="modal-body text-center">
                
                </div>
            
                {/* <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button> */}
                {/* </div> */}
            </div>
        </div>
        </div>
    </div>
    );
}
export default Events;