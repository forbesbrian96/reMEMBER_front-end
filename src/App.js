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
    axios.post("https://powerful-badlands-84110.herokuapp.com/clients", addClient).then((response) => {
      console.log(response);
      getClient();
    });
  };

  //GET ROUTE
  const getClient = () => {
    axios.get("https://powerful-badlands-84110.herokuapp.com/clients").then(
      (response) => setClient(response.data),
      (err) => console.log(err)
    );
  };

  //UPDATE ROUTE
  const handleUpdate = (editClient) => {
    console.log(editClient);
    axios
      .put("https://powerful-badlands-84110.herokuapp.com/clients/" + editClient.id, editClient)
      .then((response) => {
        getClient();
      });
  };

  //DELETE ROUTE
  const handleDelete = (event) => {
    axios
      .delete("https://powerful-badlands-84110.herokuapp.com/clients/" + event.id)
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

    <style>
      @import url('https://fonts.googleapis.com/css2?family=Overpass:wght@300;500&family=Poltawski+Nowy&display=swap');
    </style>

    <div className="body-card"> 

    <h1 className="title">
      <div className="re-box">re</div>
      <div className="colon">:</div>MEMEBER</h1>

      {/*TERNERY - Maps through the clients, and reads their display States. If set to false, it will just show the name, and 
      next appointment. If true, it will show the entire Client.js file */}
      <ul>
        {client.map((client, i) => (
          <li key={i}>
            <div className="client-card">
            {client.display ? (
              <>
                {/*Client component*/} 
                <Client client={client} />
                {/*Edit form*/}
                <Edit client={client} handleUpdate={handleUpdate} />
                <br/>
                <div className="button-box">
                {/*Delete button*/}
                <button onClick={() => handleDelete(client)}>Remove Client</button>
                {/*Fewer details - Triggers the displayToggle, to switch display State to 'false'*/}
                <button onClick={() => displayToggle(client.id)}>Fewer Details</button>
                </div>
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

      </div>

    </>
  );
};

export default App;