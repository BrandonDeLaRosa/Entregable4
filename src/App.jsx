import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import UsersList from './Components/UsersList'
import UsersApp from './Components/UsersApp'
import DeleteWindow from './Components/DeleteWindow'

function App() {
 
  // -------------------------------- READ ---------------------------- 
  const [users, setUsers] = useState([])
  const [selectedUser,setSelectedUser] = useState(null)

  useEffect(() => {
    axios.get("https://users-crud1.herokuapp.com/users/")
    .then(res => setUsers(res.data))
  },[])
  console.log(users);
//  --------------------------------- Auto refresh ----------------------
  const getUsers = () => {
    axios.get("https://users-crud1.herokuapp.com/users/")
    .then(res => setUsers(res.data))
  }
//  ------------------------------- EDIT --------------------------------
const selectUser = (user) => {
setSelectedUser(user) 
}
// --------------------------------- deselect user ------------------------
const deselectUser = () => setSelectedUser(null)

// --------------------------------- Modal windows --------------------------------------

const [isDeleted, setIsDeleted] = useState(false)

const deleted = () => {
  setIsDeleted(!isDeleted)
}

  return (
    <div className="App">  
      {isDeleted? <DeleteWindow isDeleted={isDeleted} setIsDeleted={setIsDeleted}/> : null}         
      <UsersApp getUsers={getUsers} selectedUser={selectedUser} deselectUser={deselectUser}/>
      <UsersList users={users} selectUser={selectUser} getUsers={getUsers} isDeleted={isDeleted} setIsDeleted={setIsDeleted} deleted={deleted} /> 
    </div>
  )
}

export default App

// http://144.126.218.162:3000/swagger/

// axios.post("http://144.126.218.162:3000/todos/")
// .catch(error => console.log(error.response));

//  http://144.126.218.162:9000/swagger/