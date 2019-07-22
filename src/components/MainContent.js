import React, {useState} from 'react';
import TaskAdder from "./TaskAdder";
import TaskList from "./TaskList";

function MainContent(props) {
    const [state, setState] = useState(false);

    if (props.toDoState) {
        return (
            <React.Fragment>
                <TaskAdder
                    todos={props.todos}
                    updateTodos={props.updateTodos}
                    categories={props.categories}
                    updateCats={props.updateCats}
                    parentState={state}
                    setParentState={setState}
                />
                <TaskList
                    todos={props.todos}
                    updateTodos={props.updateTodos}
                    match={props.match}
                    categories={props.categories}
                    updateCats={props.updateCats}
                    dateState={props.dateState}
                    setDateState={props.setDateState}
                />
            </React.Fragment>
        )
    }

    return null;
}

export default MainContent;