import React from 'react';
import { Link } from 'react-router-dom';
import ReactTooltip from 'react-tooltip'

import '../styles/styles.css';

function TaskListItem(props) {
    let color = function () {
        let now = new Date();
        if (Date.parse(props.el.endDate) < Date.parse(now)) {
            return 'red';
        }

        return 'blue';
    };

    if (color() === 'red') {
        return (
            <Link to={`${props.match.url}/task/${props.num + 1}`}>
                <li data-tip="task expired" className={`${color()}`} onClick={() => {
                    const todos = props.todos;
                    todos.item = props.num;
                    props.updateTodos(todos);
                }}>
                    {props.el.title}
                </li>
                <ReactTooltip />
            </Link>
        )
    }

    return (
        <Link to={`${props.match.url}/task/${props.num + 1}`}>
            <li className={`${color()}`} onClick={() => {
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