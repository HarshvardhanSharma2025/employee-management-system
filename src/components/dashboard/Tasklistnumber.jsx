import React from 'react'
import './Headeremployeedashboard.css';

const Tasklistnumber = ({data}) => {
  return (
    <div className='main-container'>
    <div className='item-box1'>
      <div className='item-1'></div>
      <h2 className='item-11'>{data.taskNumber.newTask}</h2>
      <h3 className='item-12'>New Task</h3>
    </div>
    <div className='item-box2'>
    <div className='item-2'></div>
    <h2 className='item-11'>{data.taskNumber.completed}</h2>
    <h3 className='item-12'>Completed Task</h3>
  </div>
  <div className='item-box3'>
  <div className='item-3'></div>
  <h2 className='item-11'>{data.taskNumber.active}</h2>
  <h3 className='item-12'>Active Task</h3>
</div>
<div className='item-box4'>
      <div className='item-4'></div>
      <h2 className='item-11'>{data.taskNumber.failure}</h2>
      <h3 className='item-12'>Failed Task</h3>
    </div>
    </div>
  )
}

export default Tasklistnumber;