import React from 'react'
import './Headeremployeedashboard.css';

const Headeremployeedashboard = ({data}) => {
  return (
    <div>
    <div className='header-employee'><h1 className='font-medium'>Hello <br/> <span className='text-5xl font-semibold'>{data.firstName} 👋</span></h1></div>
    <button className='logout-button'>Log Out</button>
    
    </div>
  )
}

export default Headeremployeedashboard;