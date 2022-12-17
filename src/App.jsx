import './App.css'
import axios from 'axios'
import FormUsers from './components/FormUsers'
import { useEffect } from 'react'
import { useState } from 'react'
import UserCard from './components/UserCard'

const BASE_URL = "https://users-crud.academlo.tech/"

function App() {

  const [users, setUsers] = useState()
  const [dataToUpdate, setDataToUpdate] = useState()
  
  const getAllUsers = () => {
    const URL = `${BASE_URL}users/`
    axios.get(URL)
      .then(res => setUsers(res.data))
      .catch(err => console.log(err))
  }

  const createUsers = (data) => {
    const URL = `${BASE_URL}users/`
    axios.post(URL, data)
      .then(res => getAllUsers())
      .catch(err => console.log(err))
  }

  const deleteUser = (id) => {
    const URL = `${BASE_URL}users/${id}/`
    axios.delete(URL)
      .then(() => {
        getAllUsers()
        //Previene que el formulario quede en modo EDITAR
        //cuando el usario da clic en ACTUALIZAR USUARIO 
        //y sin guardar cambios, ELIMINA el usuario
        if (dataToUpdate)
          setDataToUpdate()
      })
      .catch(err => console.log(err))
  }

  const updateUser = (id, data) => {
    const URL = `${BASE_URL}users/${id}/`
    axios.put(URL, data)
      .then(() => {
        setDataToUpdate()
        getAllUsers()
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getAllUsers()
  }, [])

  return (
    <div className="App">
      <h1>Users register</h1>
      <FormUsers createUsers={createUsers} dataToUpdate={dataToUpdate} updateUser={updateUser} />
      <div className="users-list">
        {
          users?.map(user => (
            <UserCard key={user.id} user={user} deleteUser={deleteUser} setDataToUpdate={setDataToUpdate}/>
          ))
        }
      </div>
    </div>
  )
}

export default App
