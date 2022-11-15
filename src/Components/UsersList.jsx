import axios from 'axios';
import React, { useState } from 'react';


const UsersList = ({users, selectUser,getUsers,deleted}) => {

// --------------------------------- Delete User --------------------------
const deleteUser = (id) => {
    axios.delete(`https://users-crud1.herokuapp.com/users/${id}/` )
    .then(() =>{
     getUsers()
     deleted()
    })
}

    return (
        <div className='cardsContainer'>
            <h1>Users List</h1>
            <ul className='cards'>
                {
                    users.map(user => (
                        <li key={user.id}>
                            <div className="userCard">
                                <h2><i class="fa-solid fa-user"></i> {user["first_name"]}{" "}
                                    {user["last_name"]}</h2> <hr />
                                <h4><b className='info'>CORREO </b><br/><i class="fa-regular fa-paper-plane"></i> {user.email}</h4>
                                <h4><b className='info'>BIRTHDAY</b><br /> <i class="fa-regular fa-calendar"></i> {user.birthday}</h4>
                                <div className='cardsButtons'>
                                <button className='delete' onClick={() => deleteUser(user.id)}><i class="fa-solid fa-trash-can"></i></button>
                                <button className='edit' onClick={() => selectUser(user)}><i class="fa-solid fa-pen-to-square"></i></button>
                                </div>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default UsersList;

// isDeleted, setIsDeleted,