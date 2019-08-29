import React, {useState} from 'react';

function CategoryAdder(props) {
    const [state, setState] = useState(false);
    const Comp = props.component;

    return (
        <Comp 
            state={state}
            setParentState={setState}
            todos={props.todos} 
            updateTodos={props.updateTodos}
            setToDoState={props.setToDoState}
            match={props.match}
        />
    )
}

export default CategoryAdder;