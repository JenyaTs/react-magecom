import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function TaskListItem(props) {
    const [modalState, setModalState] = useState(false);
    return (
        <Link to={`${props.match.url}/task/${props.num + 1}`}>
            <li onClick={() => {
                setModalState(!modalState);
            }}>
                {props.el}
            </li>
        </Link>
    )
}

export default TaskListItem;