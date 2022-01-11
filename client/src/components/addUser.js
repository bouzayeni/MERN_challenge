import React from 'react'
import {useDispatch} from 'react-redux'
import {useState} from 'react'
import {addUser} from '../Actions/userAction'


const AddUser = () => {
    const dispatch = useDispatch()
    const [input, setInput]= useState({})
    const handleChange=(e)=>{
        setInput({...input,[e.target.name]:e.target.value})
    };
    const handleSubmit=(e)=>{
        e.preventDefault()
        dispatch(addUser(input))
    }
    return (
        <div>
            <form>
                <input type='text' name='username' onChange={handleChange} placeholder='userName'/>
                <input type='email' name='email' placeholder='email' onChange={handleChange}/>
                <input type='number' name='age' placeholder='age' onChange={handleChange}/>
                <input type='password' name='password' placeholder='password' onChange={handleChange}/>
                <button type='submit' onClick={handleSubmit}>Add</button>
            </form>
        </div>
    )
}

export default AddUser
