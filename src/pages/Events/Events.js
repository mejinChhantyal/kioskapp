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
            { title: 'I.C. Stars', date: '2022-06-24' },
            { title: 'Events.', date: '2022-06-22' },
            {title:'Taizon', date: '2022-06-27'},
            {title:'hiba gift', date:'2022-06-28'}
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