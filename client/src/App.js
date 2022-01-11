
import './App.css';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getUser,deleteUser} from './Actions/userAction';
import AddUser from './components/addUser';

function App() {
  const dispatch = useDispatch()
  const {userList} = useSelector(state => state.user)
  useEffect(() => {
    dispatch(getUser());
    
  }, [])
  const handleDelete = (id) => {
    dispatch(deleteUser(id))
  }
  
  return (

    <div className="App">
     
      <header className="App-header">
      <AddUser/>
        {userList && userList.map(user=>
          <div key={user._id} className='bodyinfo'>
          <h1>{user.username}</h1>
          <button onClick={()=>handleDelete(user._id)}>Delete</button>
          </div>)}
      </header>
    </div>
  );
}

export default App;
