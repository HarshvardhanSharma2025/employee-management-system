import React, { useState } from 'react';
import './AdminDashboard.css';

const CreateTaskList = () => {

    

    const [taskTitle, settaskTitle] = useState('');
    const [AssignedTo, setAssignedTo] = useState('');
    const [category, setcategory] = useState('');
    const [taskDate, settaskDate] = useState('');
    const [description, setdescription] = useState('');

    const [task, settask] = useState({});

    const submitHandler = (e) => {
        e.preventDefault();

        // Update task state
        settask({
            taskTitle,
            taskDate,
            description,
            category,
            active: false,
            newTask: true,
            completed: false,
            failure: false,
        });

        // Clear input fields
        setAssignedTo('');
        setcategory('');
        setdescription('');
        settaskDate('');
        settaskTitle('');

        const data = JSON.parse(localStorage.getItem('employees')) || [];

        data.forEach(function (elem) {
            if (AssignedTo === elem.firstName) {
                elem.tasks.push(task);
                console.log(elem);
            }
        })

        localStorage.setItem('employees', JSON.stringify(data));
    };



    return (


        <div className="form-head flex items-center min-h-screen p-2 justify-center">
            <form onSubmit={(e) => {
                submitHandler(e);
            }} className="bg-[#1c1c1c]  rounded-lg mt-5 shadow-lg mr-17 w-11/12 max-w-8xl flex flex-col justify-between h-[350px]">

                {/* Left Side: Inputs */}
                <div className="flex flex-row  justify-between">
                    <div className="w-3/4 pr-4 flex flex-col">
                        <div className="mb-1.5 mt-2">
                            <label className="block text-white mb-1" htmlFor="taskTitle">Task Title</label>
                            <input

                                value={taskTitle}
                                onChange={(e) => {
                                    settaskTitle(e.target.value);
                                }}
                                type="text"
                                id="taskTitle"
                                className="w-full p-1 bg-gray-700 text-white rounded border border-gray-600 focus:outline-none focus:border-blue-500"
                                placeholder="Enter task title"
                                required
                            />
                        </div>

                        <div className="mb-1.5">
                            <label className="block text-white mb-1" htmlFor="assignedTo">Assigned To</label>
                            <input
                                value={AssignedTo}
                                onChange={(e) => {
                                    setAssignedTo(e.target.value);
                                }}
                                type="text"
                                id="assignedTo"
                                className="w-full p-1 bg-gray-700 text-white rounded border border-gray-600 focus:outline-none focus:border-blue-500"
                                placeholder="Assign to"
                                required
                            />
                        </div>

                        <div className="mb-1.5">
                            <label className="block text-white mb-1" htmlFor="category">Category</label>
                            <select
                                value={category}
                                onChange={(e) => {
                                    setcategory(e.target.value);
                                }}
                                id="category"
                                className="w-full p-1 bg-gray-700 text-white rounded border border-gray-600 focus:outline-none focus:border-blue-500"
                                required
                            >
                                <option value="">Select a category</option>
                                <option value="work">Work</option>
                                <option value="personal">Personal</option>
                                <option value="urgent">Urgent</option>
                                <option value="misc">Miscellaneous</option>
                            </select>
                        </div>

                        <div className="mb-1.5">
                            <label className="block text-white mb-1" htmlFor="dueDate">Due Date</label>
                            <input
                                value={taskDate}
                                onChange={(e) => {
                                    settaskDate(e.target.value);
                                }}
                                type="date"
                                id="dueDate"
                                className="w-full p-1 bg-gray-700 text-white rounded border border-gray-600 focus:outline-none focus:border-blue-500"
                                required
                            />
                        </div>
                    </div>

                    {/* Right Side: Description */}
                    <div className="w-1/2 pl-2 flex flex-col">
                        <div className=" flex-grow mt-2">
                            <label className="block text-white mb-1" htmlFor="description">Description</label>
                            <textarea
                                value={description}
                                onChange={(e) => {
                                    setdescription(e.target.value);
                                }}
                                id="description"
                                className="w-full p-1 bg-gray-700 text-white rounded border border-gray-600 focus:outline-none focus:border-blue-500"
                                placeholder="Enter task description"
                                rows="4" // Keep this as it is for better usability
                                required
                            ></textarea>
                        </div>
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-1.5 rounded hover:bg-blue-700 transition duration-200"
                >
                    Create Task
                </button>
            </form>
        </div>
    );
}

export default CreateTaskList;
