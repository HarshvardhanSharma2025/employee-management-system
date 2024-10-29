import React from 'react';
import './AdminDashboard.css';

const AllTask = () => {
    return (
        <div className='p-3 rounded ml-11 -mt-20 h-40 overflow-y-auto'>
            <div className='alltaskhead bg-red-400 mb-3 py-1 px-4 flex justify-between rounded h-fit w-full'>
                <h4>Harsh</h4>
                <h3>Make a UI Design</h3>
                <h4>Status</h4>
            </div>
            <div className='alltaskhead bg-blue-400 mb-3 py-1 px-4 flex justify-between rounded h-fit w-full'>
                <h4>Harsh</h4>
                <h3>Make a UI Design</h3>
                <h4>Status</h4>
            </div>
            <div className='alltaskhead bg-green-400 mb-3 py-1 px-4 flex justify-between rounded h-fit w-full'>
                <h4>Harsh</h4>
                <h3>Make a UI Design</h3>
                <h4>Status</h4>
            </div>
            <div className='alltaskhead bg-yellow-400 mb-3 py-1 px-4 flex justify-between rounded h-fit w-full'>
                <h4>Harsh</h4>
                <h3>Make a UI Design</h3>
                <h4>Status</h4>
            </div>
        </div>
    )
}

export default AllTask