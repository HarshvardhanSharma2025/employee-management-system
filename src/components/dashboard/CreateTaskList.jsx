import React from 'react';
import './AdminDashboard.css';

const CreateTaskList = () => {
    return (
        <div className="form-head flex items-center min-h-screen p-2 justify-center">
            <form className="bg-[#1c1c1c]  rounded-lg mt-5 shadow-lg mr-17 w-11/12 max-w-8xl flex flex-col justify-between h-[350px]">

                {/* Left Side: Inputs */}
                <div className="flex flex-row  justify-between">
                    <div className="w-3/4 pr-4 flex flex-col">
                        <div className="mb-1.5 mt-2">
                            <label className="block text-white mb-1" htmlFor="taskTitle">Task Title</label>
                            <input
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
