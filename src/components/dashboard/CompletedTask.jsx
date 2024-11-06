import React from 'react'

const CompletedTask = ({data}) => {
    return (
        <div className='tast-list-item bg-green-600'>
            <div className="flex justify-between  w-full p-4">
                <h3 className="bg-red-400 text-xl text-white py-1 px-1 rounded self-start">{data.taskCategory}</h3>
                <h4 className="text-base text-white py-1 px-1 rounded self-start">{data.taskDate}</h4>
            </div>
            <div className="w-full -mt-12 px-4">
                <h2 className='mt-5 text-2xl font-bold'>{data.taskTitle}</h2>
                <p>{data.taskDescription}</p>
            </div>
            <div className='mt-2'>
                <button className='w-full'>Completed</button>
            </div>
        </div>
    )
}

export default CompletedTask