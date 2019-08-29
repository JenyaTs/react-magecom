import React from 'react';
import TaskListItem from './TaskListItem';
import { taskDescriptionConnector } from '../connector/connector';

function TaskList(props) {
    let list;
    if (props.taskList) {

        list = props.taskList.tasks.map((el, i) => {
            return <TaskListItem
                match={props.match}
                key={i}
                num={i}
                id={props.taskList.tasks.id}
                el={el}
                todos={props.taskList.tasks}
                updateTodos={props.updateTodos}
                categories={props.categories}
                updateCats={props.updateCats}
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