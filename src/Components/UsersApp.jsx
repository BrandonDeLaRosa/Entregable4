import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import ClearWindow from './ClearWindow';
import CreatedWindow from './CreatedWindow';
import DeleteWindow from './DeleteWindow';
import UpdateWindow from './UpdateWindow';


const UsersApp = ({getUsers,selectedUser, deselectUser}) => {

    const {register,handleSubmit,reset} = useForm()
    const [isCreated, setIsCreated] =useState(false)
    const [isUpdated, setIsUpdated] = useState(false)
    const [isClear, setIsClear] = useState(false)
    const [newElement, setNewElement] = useState(false)

    useEffect(() => {
        if(selectedUser){
          reset(selectedUser)
        }
    },[selectedUser])

    const clearinputs= () => {
        setIsClear(!isClear)
    }
    
    const newUser = () =>{
        setIsCreated(!isCreated)
    }

    const updated= () => {
        setIsUpdated(!isUpdated)
    }

    const clear = () => {
        // alert("Cleaning inputs")
        reset({
            email: "",
            password:"",
            first_name: "",
            last_name:"", 
            birthday:""
        })
        deselectUser()
        clearinputs()
    }

    const  submit = (data) => {
        if(selectedUser){
            axios.put(`https://users-crud1.herokuapp.com/users/${selectedUser.id}/`,data)
             .then(() => {
                getUsers()
                updated()        
            } )
        }else {
        axios.post("https://users-crud1.herokuapp.com/users/", data)
         .then(() => {
         getUsers()
         newUser()
         }
         )
         .catch(error => console.log(error.response))
        }
        clear()
    }

    return (
        <form onSubmit={handleSubmit (submit)} className="form">
            
            {isUpdated? <UpdateWindow isUpdated={isUpdated} setIsUpdated={setIsUpdated}/> : null}
            {isCreated? <CreatedWindow isCreated={isCreated} setIsCreated={setIsCreated}/> : null}
            {isClear? <ClearWindow isClear={isClear} setIsClear={setIsClear}/> : null}
            <button type='button' className='addUser' onClick={() => setNewElement(!newElement)} ><i class="fa-solid fa-user-plus"></i> New User</button>
            <h1>Users App</h1>
            {newElement? (<>
                <div className="inputContainer">
                <label htmlFor="first_name"><i class="fa-solid fa-user"></i></label>
                <input type="text" id='first_name' 
                {...register("first_name")} placeholder="First Name" className='name'/>
                 <label htmlFor="last_name"></label>

                <input type="text" id='last_name'
                {...register("last_name")} placeholder="Last Name" className='name'/>
            </div>
            <div className="inputContainer">
                <label htmlFor="email"><i class="fa-solid fa-envelope"></i></label>
                <input type="text" id='email' 
                {...register("email")} placeholder="Email" className='email'/>
            </div>
            <div className="inputContainer">
                <label htmlFor="password"><i class="fa-solid fa-lock"></i></label>
                <input type="text" id='password' 
                {...register("password")} placeholder="Password" className='password'/>
            </div>
            <div className="inputContainer">
                <label htmlFor="birthday"><i class="fa-solid fa-calendar-days"></i></label>
                <input type="date" id='birthday' 
                {...register("birthday")} placeholder="Birthday" className='birthday'/>
            </div><br />
            <button className='create'>{selectedUser? "Update User" : "Create User"}</button>
            <button className='clear' onClick={clear} type="button">Clear</button> 
            </>)
           : null}
            
        </form>
    );
};

export default UsersApp;

/*
{newElement? (<>
                <div className="inputContainer">
                <label htmlFor="first_name"><i class="fa-solid fa-user"></i></label>
                <input type="text" id='first_name' 
                {...register("first_name")} placeholder="First Name" className='name'/>
                 <label htmlFor="last_name"></label>

                <input type="text" id='last_name'
                {...register("last_name")} placeholder="Last Name" className='name'/>
            </div>
            <div className="inputContainer">
                <label htmlFor="email"><i class="fa-solid fa-envelope"></i></label>
                <input type="text" id='email' 
                {...register("email")} placeholder="Email" className='email'/>
            </div>
            <div className="inputContainer">
                <label htmlFor="password"><i class="fa-solid fa-lock"></i></label>
                <input type="text" id='password' 
                {...register("password")} placeholder="Password" className='password'/>
            </div>
            <div className="inputContainer">
                <label htmlFor="birthday"><i class="fa-solid fa-calendar-days"></i></label>
                <input type="date" id='birthday' 
                {...register("birthday")} placeholder="Birthday" className='birthday'/>
            </div><br />
            <button className='create'>{selectedUser? "Update User" : "Create User"}</button>
            <button className='clear' onClick={clear} type="button">Clear</button> 
            </>)
           : null}
*/