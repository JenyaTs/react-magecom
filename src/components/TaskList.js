import React from 'react';
import TaskListItem from './TaskListItem';

function TaskList(props) {
    const tasks = props.categoriesArray.taskList.tasks;
    const id = props.categoriesArray.taskList.id;
    let list;
    if (tasks) {

        list = tasks.map((el, i) => {
            return <TaskListItem
                match={props.match}
                key={i}
                num={i}
                id={id}
                el={el}
                todos={tasks}
                dateState={props.dateState}
                setDateState={props.setDateState}
            />;
        });
    }
    
    return (
        <ul>
            {list}
        </ul>
    )
}

export default TaskList;