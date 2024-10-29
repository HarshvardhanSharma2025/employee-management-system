import React from 'react'
import Headeremployeedashboard from './Headeremployeedashboard';
import Tasklistnumber from './Tasklistnumber'
import Tasklist from './Tasklist';
import AllTask from './AllTask';

const EmployeeDashboard = () => {
  return (
    <div>
    <Headeremployeedashboard/>
    <Tasklistnumber/>
    <Tasklist/>
    </div>
  )
}

export default EmployeeDashboard