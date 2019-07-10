import React, {useState} from 'react';

function CategoryAdder(props) {
    const [state, setState] = useState(false);
    const Comp = props.component;

    return (
        <Comp 
            state={state}
            categories={props.categories}
            setParentState={setState}     
            updateCats={props.updateCats}
            todos={props.todos} 
            updateTodos={props.updateTodos}
            setToDoState={props.setToDoState}
        />
    )
}

export default CategoryAdder;