import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import './AdminDashboard.css';

const AllTask = () => {

    const data = useContext(AuthContext);

    console.log(data);
    return (
        <div className='p-3 rounded ml-11 -mt-20 h-40 '>
            <div className='alltaskhead bg-red-400 mb-3 py-1 px-4 flex justify-between rounded h-fit w-full'>
                <h4 className='w-1/5 bg-red-400'>Employee Name</h4>
                <h4 className='w-1/5 bg-red-400'>Active Task</h4>
                <h4 className='w-1/5 bg-red-400'>New Task</h4>
                <h4 className='w-1/5 bg-red-400'>Completed</h4>
                <h3 className='w-1/5 bg-red-400'>Failed</h3>
            </div>
            <div style={{
                    maxHeight: '80px', // Set maximum height to enable scroll
                    overflowY: 'scroll',
                }}
                className="task-list-container"
            >
                <style>
                    {`
                      /* Hide scrollbar for Webkit-based browsers */
                      .task-list-container::-webkit-scrollbar {
                          display: none;
                      }
                    `}
                </style>

                {data.employees.map(function (elem) {
                    return <div className='alltaskhead bg-red-400 mb-3 py-1 px-4 flex justify-between rounded h-fit w-full'>
                        <h4 className='w-1/5 bg-red-400'>{elem.firstName}</h4>
                        <h3 className='w-1/5 bg-red-400'>{elem.taskNumber.active}</h3>
                        <h4 className='w-1/5 bg-red-400'>{elem.taskNumber.newTask}</h4>
                        <h4 className='w-1/5 bg-red-400'>{elem.taskNumber.completed}</h4>
                        <h4 className='w-1/5 bg-red-400'>{elem.taskNumber.failure}</h4>
                    </div>
                })}
            </div>

        </div>
    )
}

export default AllTask