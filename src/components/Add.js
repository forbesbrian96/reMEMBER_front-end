import React, { useState } from "react";

const Add = ({ handleCreate }) => {
  const [name, setName] = useState("");
  const [nextAppt, setNextAppt] = useState("");
  const [serviceNeeded, setServiceNeeded] = useState("");
  const [serviceOffered, setServiceOffered] = useState("");
  const [clientKnowledge, setClientKnowledge] = useState("");
  const [continuedConversation, setContinuedConversation] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newClient = {
      name,
      nextAppt,
      serviceNeeded,
      serviceOffered,
      clientKnowledge,
      continuedConversation,
    };
    handleCreate(newClient);
    setName("");
    setNextAppt("");
    setServiceNeeded("");
    setServiceOffered("");
    setClientKnowledge("");
    setContinuedConversation("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Client</h2>
      <div>
        <label>Name:</label>
        <input
          type="text"
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div>
        <label>Next Appointment:</label>
        <input
          type="text"
          onChange={(event) => setNextAppt(event.target.value)}
        />
      </div>
      <div>
        <label>Service Needed:</label>
        <input
          type="text"
          onChange={(event) => setServiceNeeded(event.target.value)}
        />
      </div>
      <div>
        <label>Services Offered:</label>
        <input
          type="text"
          onChange={(event) => setServiceOffered(event.target.value)}
        />
      </div>
      <div>
        <label>Client Knowledge:</label>
        <input
          type="text"
          onChange={(event) => setClientKnowledge(event.target.value)}
        />
      </div>
      <div>
        <label>Continued Conversation:</label>
        <input
          type="text"
          onChange={(event) => setContinuedConversation(event.target.value)}
        />
      </div>
      <button type="submit">Add Client</button>
    </form>
  );
};

export default Add;
