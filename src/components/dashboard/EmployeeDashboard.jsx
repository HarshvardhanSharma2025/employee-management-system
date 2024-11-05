import React from 'react'
import Headeremployeedashboard from './Headeremployeedashboard';
import Tasklistnumber from './Tasklistnumber'
import Tasklist from './Tasklist';
import AllTask from './AllTask';

const EmployeeDashboard = ({data}) => {
  return (
    <div>
    <Headeremployeedashboard data={data} />
    <Tasklistnumber data={data}/>
    <Tasklist data={data}/>
    </div>
  )
}

export default EmployeeDashboard