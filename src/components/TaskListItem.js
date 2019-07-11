import React from 'react';

function TaskListItem(props) {
    const {id, name, tasks, subCategory} = props.element; 

    const obj = {
        id: `${id}`,
        todos: tasks
    }

    return (
        <span onClick={() => {
            props.updateTodos(obj);
            props.setParentState(!props.state)
            props.setToDoState(true)
        }}>
            {name}
        </span>
    )
}

export default TaskListItem;