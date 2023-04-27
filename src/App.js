// *****************************************************************
// IMPORTS
// *****************************************************************

import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Add from './components/Add';
import Edit from './components/Edit';
import Client from './components/Client';

// *****************************************************************
// APP FUNCTIONALITY
// *****************************************************************

const App = () => {
  // USE STATES
  let [client, setClient] = useState([]);
  let [display, setDisplay] = useState(false);

  //CREATE ROUTE
  const handleCreate = (addClient) => {
    axios.post("http://localhost:8080/clients", addClient).then((response) => {
      console.log(response);
      getClient();
    });
  };

  //GET ROUTE
  const getClient = () => {
    axios.get("http://localhost:8080/clients").then(
      (response) => setClient(response.data),
      (err) => console.log(err)
    );
  };

  //UPDATE ROUTE
  const handleUpdate = (editClient) => {
    console.log(editClient);
    axios
      .put("http://localhost:8080/clients/" + editClient.id, editClient)
      .then((response) => {
        getClient();
      });
  };

  //DELETE ROUTE
  const handleDelete = (event) => {
    axios
      .delete("http://localhost:8080/clients/" + event.id)
      .then((response) => {
        getClient();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //DISPLAYTOGGLE - Toggles the display State of a client object with a given id
  const displayToggle = (id) => {
    setClient(
      client.map((client) =>
        client.id === id ? { ...client, display: !client.display } : { ...client }
      )
    );
  };

  //USE EFFECT
  useEffect(() => {
    getClient();
  }, []);


// *****************************************************************
// RETURNS
// *****************************************************************
  return (
    <>

      {/*TERNERY - Maps through the clients, and reads their display States. If set to false, it will just show the name, and 
      next appointment. If true, it will show the entire Client.js file */}
      <ul>
        {client.map((client, i) => (
          <li key={i}>
            <div className="client-box">
            {client.display ? (
              <>
                {/*Client component*/} 
                <Client client={client} />
                {/*Edit form*/}
                <Edit client={client} handleUpdate={handleUpdate} />
                {/*Delete button*/}
                <button onClick={() => handleDelete(client)}>Remove Client</button>
                {/*Fewer details - Triggers the displayToggle, to switch display State to 'false'*/}
                <button onClick={() => displayToggle(client.id)}>Fewer Details</button>
              </>
            ) : (
              <>
                <div>
                  <h3>{client.name}</h3>
                  <h4>{client.nextAppt}</h4>
                  {/*More details - Triggers the displayToggle, to switch display State to 'true'*/}
                  <button onClick={() => displayToggle(client.id)}>More Details</button>
                </div>
              </>
            )}
            </div>
          </li>
        ))}
      </ul>

      <br/>
      {/*ADD FORM*/}
      <Add handleCreate={handleCreate} />

    </>
  );
};

export default App;