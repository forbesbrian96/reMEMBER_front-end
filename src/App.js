import './App.css';
import {useState, useEffect} from 'react'
import axios from 'axios'
import Add from './components/Add';
import Edit from './components/Edit';

const App = () => {

  let [client, setClient] = useState([])

  const handleCreate = (addClient) => {
    axios
    .post('http://localhost:8080/clients', addClient)
    .then((response) => {
      console.log(response)
      getClient()
    })
  }
  
  const getClient = () => {
    axios
    .get('http://localhost:8080/clients')
    .then((response) => setClient(response.data), (err) => console.log(err))
  }

  const handleUpdate = (editClient) => {
    console.log(editClient)
    axios
    .put('http://localhost:8080/clients' + editClient.id, editClient)
    .then((response) => {
      getClient()
    })
  }

  const handleDelete = (event) => {
    axios
    .delete('http://localhost:8080/clients' + event.target.value)
    .then((response) => {
      getClient()
    })
  }

  useEffect(() => {
    getClient()
  }, [])
  
  return (
    <>

    <Add handleCreate={handleCreate} />

    {client.map((client) => {
      return (
        <>
        <div key={client.id}>
        <h3>{client.name}</h3>
        <ul>
          <li>
            {client.nextAppt}
          </li>
          <li>
            {client.serviceNeeded}
          </li>
          <li>
            {client.serviceOffered}
          </li>
          <li>
            {client.clientKnowledge}
          </li>
          <li>
            {client.continuedConversation}
          </li>
        </ul>
        <Edit client={client} handleUpdate={handleUpdate} />
        <button onClick={() => {
          handleDelete(client.id)
        }}
        >Remove Client</button>
        </div>
        </>
      )
    })}
    
    </>
  )

}

export default App;
