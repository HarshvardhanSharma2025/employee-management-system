import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import './AdminDashboard.css';

const AllTask = () => {

    const data = useContext(AuthContext);
    return (
        <div className='p-3 rounded ml-11 -mt-20'>
            <div className='alltaskhead bg-red-400 mb-3 py-1 px-4 flex justify-between rounded h-fit w-full'>
                <h4 className='text-lg font-medium w-1/5 bg-red-400'>Employee Name</h4>
                <h4 className='text-lg font-medium w-1/5 bg-red-400'>Active Task</h4>
                <h4 className='text-lg font-medium w-1/5 bg-red-400'>New Task</h4>
                <h4 className='text-lg font-medium w-1/5 bg-red-400'>Completed</h4>
                <h3 className='text-lg font-medium w-1/5 bg-red-400'>Failed</h3>
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

                {data.employees.map(function (elem,idx) {
                    return <div key={idx} className='alltaskhead bg-emerald-300 mb-3 py-1 px-4 flex justify-between rounded h-fit w-full'
                    style={{
                        minHeight: '40px', // Set minimum height for each employee row
                        alignItems: 'center', // Center text vertically
                        padding: '10px 0', // Additional padding for spacing
                    }}
                    >
                        <h4 className='text-lg font-medium w-1/5 '>{elem.firstName}</h4>
                        <h3 className='text-lg font-medium w-1/5 text-yellow-300'>{elem.taskNumber.active}</h3>
                        <h4 className='text-lg font-medium w-1/5 text-blue-600'>{elem.taskNumber.newTask}</h4>
                        <h4 className='text-lg font-medium w-1/5 text-white-900'>{elem.taskNumber.completed}</h4>
                        <h4 className='text-lg font-medium w-1/5 text-red-800'>{elem.taskNumber.failure}</h4>
                    </div>
                })}                 
            </div>

        </div>
    )
}

export default AllTask