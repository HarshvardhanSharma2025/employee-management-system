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
                    return <TaskListComponent key={idx} data={item}/>
                }
                if(item.newTask){
                    return <NewTask key={idx} data={item}/>
                }
                if(item.completed){
                    return <CompletedTask key={idx} data={item}/>
                }
                if(item.failure){
                    return <FailedTask key={idx} data={item}/>
                }

            })}
            
        </div>
    )
}

export default Tasklist;