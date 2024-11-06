import React, { useState } from 'react'
import './Headeremployeedashboard.css';
import { setLocalStorage } from '../../utils/LocalStorage';

const Headeremployeedashboard = ({data}) => {

  /*const [username, setusername] = useState('');
  if(!data){
    setusername('Admin');
  }else{
    setusername('data.firstName');
  }*/

    const logoutUser = () => {
      // Clear the user session in localStorage and reload
      localStorage.removeItem('loggedInUser');
      window.location.reload();
    };

  return (
    <div>
    <div className='header-employee'><h1 className='font-medium'>Hello <br/> <span className='text-5xl font-semibold'>firstName 👋</span></h1></div>
    <button onClick={logoutUser} className='logout-button'>Log Out</button>
    
    </div>
  )
}

export default Headeremployeedashboard;