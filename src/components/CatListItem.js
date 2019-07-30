import React from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from "../actions/actions";

function CatListItem(props) {
    const dispatch = useDispatch();
    const {id, name, tasks, subCategory} = props.element;
    console.log(props.element);

    const payload = {
        id: `${id}`,
        todos: tasks
    };

    return (
        <span onClick={() => {
            dispatch(addTask(payload));
            props.updateTodos(payload);
            props.setParentState(!props.state);
            props.setToDoState(true)
        }}>
            {name}
        </span>
    )
}

export default CatListItem;