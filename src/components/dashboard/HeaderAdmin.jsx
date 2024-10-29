import React from 'react'

import './AdminDashboard.css';

const HeaderAdmin = () => {
  return (
    <div>
    <div><h1 className='font-semibold text-3xl p-2' >Hello <br/> <span className='text-4xl font-semibold]'>Harsh 👋</span></h1></div>
    <button className=' flex logout-button1'>Log Out</button>
    </div>
  )
}

export default HeaderAdmin;