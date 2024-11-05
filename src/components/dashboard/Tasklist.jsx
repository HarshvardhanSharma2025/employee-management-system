import React from 'react';
import TaskListComponent from './TaskListComponent';
import NewTask from './NewTask';
import CompletedTask from './CompletedTask';
import FailedTask from './FailedTask';

const Tasklist = ({data}) => {
    return (
        <div className="task-list">
            {data.tasks.map((item,idx)=>{
                if(item.active){
                    return <TaskListComponent key={idx}/>
                }
                if(item.newTask){
                    return <NewTask key={idx}/>
                }
                if(item.completed){
                    return <CompletedTask key={idx}/>
                }
                if(item.failure){
                    return <FailedTask key={idx}/>
                }

            })}
            
        </div>
    )
}

export default Tasklist;