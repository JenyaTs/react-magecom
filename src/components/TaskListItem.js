import React from 'react';
import { Link } from 'react-router-dom';

function TaskListItem(props) {
    return (
        <Link to={`${props.match.url}/task/${props.num + 1}`}>
            <li onClick={() => {
                const todos = props.todos;
                todos.item = props.num;
                props.updateTodos(todos);
            }}>
                {props.el.title}
            </li>
        </Link>
    )
}

export default TaskListItem;