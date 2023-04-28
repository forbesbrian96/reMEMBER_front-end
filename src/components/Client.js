import React from "react";

const Client = (props) => {
    return (
        <>
         <h1>{props.client.name}</h1>
       
         <h5><div className="bold">Next Appointment:</div> {props.client.nextAppt}</h5>
         
         <h5><div className="bold">Service Needed:</div> {props.client.serviceNeeded}</h5>
        
         <h5><div className="bold">Services Offered:</div> {props.client.serviceOffered}</h5>
       
         <h5><div className="bold">Client Knowledge:</div> {props.client.clientKnowledge}</h5>
       
         <h5><div className="bold">Continued Conversation:</div> {props.client.continuedConversation}</h5>
       
        </>
    )
}

export default Client;