import {DELETE_USER,DISPLAY_ALL,ADD_USER} from '../Actions/types';
const initState = {userList:[]}
const userReducer  = ( state = initState, {type,payload})=> {
    switch (type) {
        case DISPLAY_ALL:
            return{...state, userList:payload}

    
        default:
           return state;
    }
}
export default userReducer;