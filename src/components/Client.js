import React from "react";

const Client = (props) => {
    return (
        <>
         <h3>{props.client.name}</h3>
        <ul>
          <li>
            {props.client.nextAppt}
          </li>
          <li>
            {props.client.serviceNeeded}
          </li>
          <li>
            {props.client.serviceOffered}
          </li>
          <li>
            {props.client.clientKnowledge}
          </li>
          <li>
            {props.client.continuedConversation}
          </li>
        </ul>
        </>
    )
}

export default Client;