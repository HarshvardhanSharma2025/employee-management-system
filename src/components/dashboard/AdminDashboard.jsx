import React from 'react';
import CreateTaskList from './CreateTaskList';
import AllTask from './AllTask';
import HeaderAdmin from './HeaderAdmin';
const AdminDashboard = (props) => {
  return (
    <div className='h-screen w-full overflow-y-hidden'>
      <HeaderAdmin changeUser={props.changeUser}/>
      <div className="flex flex-col p-4">
        <CreateTaskList />
        <AllTask />
      </div>
    </div>
  )
}

export default AdminDashboard;