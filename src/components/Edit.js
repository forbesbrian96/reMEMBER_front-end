import React, { useState } from "react";

const Edit = (props) => {
  const [client, setClient] = useState({ ...props.client });

  const handleChange = (event) => {
    setClient({ ...client, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleUpdate(client);
  };

  return (
    <>
      <div>
        <details>
          <summary>Edit Client</summary>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              value={client.name}
            />
            <br />
            <br />
            <label htmlFor="nextAppt">Next Appointment: </label>
            <input
              type="text"
              name="nextAppt"
              onChange={handleChange}
              value={client.nextAppt}
            />
            <br />
            <br />
            <label htmlFor="serviceNeeded">Service Needed: </label>
            <input
              type="text"
              name="serviceNeeded"
              onChange={handleChange}
              value={client.serviceNeeded}
            />
            <br />
            <br />
            <label htmlFor="serviceOffered">Services Offered: </label>
            <input
              type="text"
              name="serviceOffered"
              onChange={handleChange}
              value={client.serviceOffered}
            />
            <br />
            <br />
            <label htmlFor="clientKnowledge">Client Knowledge: </label>
            <input
              type="text"
              name="clientKnowledge"
              onChange={handleChange}
              value={client.clientKnowledge}
            />
            <br />
            <br />
            <label htmlFor="continuedConversation">
              Continued Conversation:{" "}
            </label>
            <input
              type="text"
              name="continuedConversation"
              onChange={handleChange}
              value={client.continuedConversation}
            />
            <br />
            <br />
            <input type="submit" />
          </form>
        </details>
      </div>
    </>
  );
};

export default Edit;