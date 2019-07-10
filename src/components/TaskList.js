import React from 'react';

function TaskList(props) {
    let list;

    if (props.todos) {
        list = props.todos.map((el, i) => {
            return <li key={i}>{el}</li>
        });
    }
    
    return (
        <ul>
            {list}
        </ul>
        
    )
}

export default TaskList;