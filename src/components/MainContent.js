import React, {useState} from 'react';
import TaskAdder from "./TaskAdder";
import TaskList from "./TaskList";
import { sidebarConnector } from '../connector/connector';

const ConnectedTaskAdder = sidebarConnector(TaskAdder);

function MainContent(props) {
    const [state, setState] = useState(false);

    if (props.toDoState) {
        return (
            <React.Fragment>
                <ConnectedTaskAdder
                    todos={props.todos}
                    updateTodos={props.updateTodos}
                    categories={props.categoriesArray}
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