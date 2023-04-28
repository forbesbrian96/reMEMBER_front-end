import React from "react";

const Client = (props) => {
    return (
        <>
         <h3>{props.client.name}</h3>
       
         <h5>Next Appointment: {props.client.nextAppt}</h5>
         
         <h5>Service Needed: {props.client.serviceNeeded}</h5>
        
         <h5>Services Offered: {props.client.serviceOffered}</h5>
       
         <h5>Client Knowledge: {props.client.clientKnowledge}</h5>
       
         <h5>Continued Conversation: {props.client.continuedConversation}</h5>
       
        </>
    )
}

export default Client;