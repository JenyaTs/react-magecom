import React from 'react';

function CatListItem(props) {
    const {id, name, tasks, subCategory} = props.element;
    console.log(props.element);

    const obj = {
        id: `${id}`,
        todos: tasks
    };

    return (
        <span onClick={() => {
            props.updateTodos(obj);
            props.setParentState(!props.state);
            props.setToDoState(true)
        }}>
            {name}
        </span>
    )
}

export default CatListItem;