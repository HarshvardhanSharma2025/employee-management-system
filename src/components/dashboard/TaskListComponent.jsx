import React from 'react';

const TaskListComponent = () => {
    return (
        <div className='tast-list-item bg-yellow-600'>

            <div className="flex justify-between  w-full p-4">
                <h3 className="bg-red-400 text-xl text-white py-1 px-1 rounded self-start">High</h3>
                <h4 className="text-base text-white py-1 px-1 rounded self-start">26-Feb-2024</h4>
            </div>
            <div className="w-full -mt-12 px-4">
                <h2 className='mt-5 text-2xl font-bold'>This is a new Task.</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. At mollitia, harum voluptatibus delectus magnam illo nobis ipsam aliquid cumque accusantium optio, consectetur saepe facere eius cum nemo. Itaque, ullam non!</p>
            </div>
            <div className='flex justify-between mt-4'>
                <button className='bg-green-300 py-1 px-2 text-sm'>Mark as Completed </button>
                <button className='bg-red-300 py-1 px-2 text-sm'>Mark as Failed </button>
            </div>
        </div>
    )
}

export default TaskListComponent;