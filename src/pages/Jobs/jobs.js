import React from 'react'
import hiba from './Image/jobcode.png'
import Card from "react-bootstrap/Card";
import './Job.css'

function jobs() {
return (
    <div>
    <Card className='scan'>
        <Card.Header as="h3">Interested in joining Milwaukee County?</Card.Header>
        <Card.Body>
            <Card.Title>Job Openings</Card.Title>
            <Card.Text>
                Milwaukee County is searching for authentic people who are out to change the game and bring their whole selves to work every day.
                Come and join our team and discover our diverse and versatile community of independent spirits and unique talents, 
                we are redefining the way you think about Milwaukee County!
            </Card.Text>
            <Card.Text>Scan the QR code to go through Milwaukee County website, under jobs section, and search Req ID to apply with login account.</Card.Text>
        </Card.Body>
    </Card>
    <img className='qrcode' src= {hiba}></img>
    </div>
)
}

export default jobs
