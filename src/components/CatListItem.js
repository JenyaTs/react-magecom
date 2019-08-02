import React from 'react';
import { useDispatch } from 'react-redux';
import { showTasks } from "../actions/actions";

function CatListItem(props) {
    const dispatch = useDispatch();
    const {id, name, tasks, subCategory} = props.element;

    const payload = {
        id: `${id}`,
        todos: tasks
    };

    return (
        <span onClick={() => {
            dispatch(showTasks(payload));
            props.updateTodos(payload);
            props.setParentState(!props.state);
            props.setToDoState(true)
        }}>
            {name}
        </span>
    )
}

export default CatListItem;