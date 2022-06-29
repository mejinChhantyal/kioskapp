import React, { useState } from 'react'
import './About.css'
// import {Button} from 'react-bootstrap'
 import Card from "react-bootstrap/Card";


const About = () => {
    return (
        <div>
            <div>
    <Card style ={{width:'20rem'}}>
        <Card.Header as="h3">Milwaukee County</Card.Header>
        <Card.Body>
            <Card.Title>Information</Card.Title>
            <Card.Text>
                Milwaukee County was formed in 1835 when it was part of the Michigan Territory. Prior to that,
                the area had been settled by a variety of Native American tribes and was explored by French
                Priests and traders as far back as 1674. The name “Milwaukee” is generally believed to be
                derived from a Native American term meaning “good land.”.
            </Card.Text>
        </Card.Body>
    </Card> 
    
    </div>
</div>

        /* // <div className="container">
        //     <h1 className ="text-center" style = {{paddingTop:"2%"}}>
        //         Milwaukee County
        //     </h1>
        //     <p styles={{fontsize: "30px"}}>Milwaukee County was formed in 1835 when it was part of the Michigan Territory. Prior to that,
        //     the area had been settled by a variety of Native American tribes and was explored by French
        //     Priests and traders as far back as 1674. The name “Milwaukee” is generally believed to be
        //     derived from a Native American term meaning “good land.”</p>
        //     <p>Today Milwaukee County is, by population, the largest county in the State of Wisconsin and the
        //     47th largest in the United States with 951,448 residents. Located on the shores of Lake Michigan
        //     and covering 241 square miles, Milwaukee County is a mixture of metropolitan, suburban, and
        //     rural living. Milwaukee County is one of the few fully incorporated counties in the United States
        //     and includes 19 municipalities that range from a large urban center in the City of Milwaukee
        //     with 595,047 residents to small villages such as River Hills with a population of 1,597.</p>
        //     <p>Milwaukee County is governed by a county executive as the county’s chief executive officer,
        //     with legislative power exercised by the county board of supervisors, generally through the
        //     enactment of ordinances and the adoption of resolutions. Other county elected officials are
        //     required by either the state constitution or state statute and include the sheriff, district
        //     attorney, clerk, treasurer, register of deeds, judges, and a clerk of circuit court.</p>
        //     <p>As a unit of local government, Milwaukee County collects property taxes, constructs and
        //     maintains county highways, engages in land use planning, and maintains parks and recreational
        //     facilities. In Wisconsin, counties are also considered an administrative arm of the state because
        //     they are required to carry out or enforce certain state laws. For example, counties are required
        //     to maintain judicial court records, manage state elections, keep vital statistics and property
        //     records (birth and death certificates, marriage licenses, and property deeds), and enforce and
        //     prosecute state criminal laws. Milwaukee County is also required to carry out various state
        //     programs, such as health and human services programs.</p>
        //     <p>Milwaukee County is a Midwestern hub for business, travel, industry, recreation, and culture. A
        //     strong sense of community makes Milwaukee County a great place to live, work, and raise a
        //     family.</p>

        // </div> */
    )
}
export default About;