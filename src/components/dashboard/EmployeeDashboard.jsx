import React from 'react'
import Headeremployeedashboard from './Headeremployeedashboard';
import Tasklistnumber from './Tasklistnumber'
import Tasklist from './Tasklist';
import AllTask from './AllTask';

const EmployeeDashboard = (props) => {
  return (
    <div>
    <Headeremployeedashboard changeUser={props.changeUser} data={props.data} />
    <Tasklistnumber data={props.data}/>
    <Tasklist data={props.data}/>
    </div>
  )
}

export default EmployeeDashboard