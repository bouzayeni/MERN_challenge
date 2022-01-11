import {DELETE_USER,DISPLAY_ALL,ADD_USER} from './types';
import axios from 'axios';

export const getUser = () => (dispatch) => {
    dispatch ({type:DISPLAY_ALL});
    axios.get('http://localhost:8000/api/user/allusers')
    .then((res)=>dispatch({type:DISPLAY_ALL,payload:res.data}))
    .catch((err)=>dispatch({type:'error', payload:err}))
};

export const addUser = (userInfo) => (dispatch) => {
    const user = {...userInfo, age: +userInfo.age}
    console.log(user)
    axios.post('http://localhost:8000/api/user/newuser', user)
    .then((res)=>dispatch(getUser()))
    .catch((err)=>dispatch({type:'error', payload:err}))
};

export const deleteUser = (userId) => (dispatch) => {
    axios.delete(`http://localhost:8000/api/user/user/delete/${userId}`)
    .then((res)=>dispatch(getUser()))
    .catch((err)=>dispatch({type:'error', payload:err}))
};