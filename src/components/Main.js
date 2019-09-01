import React, {useState} from 'react';
import MainContent from "./MainContent";
import { Route } from 'react-router-dom';
import TaskDescription from "./TaskDescription";
import { taskDescriptionConnector } from '../connector/connector';

const ConnectedTaskDescription = taskDescriptionConnector(TaskDescription);

function Main(props) {
    const [state, setState] = useState(false);
    const [dateState, setDateState] = useState(true);
    const {todos, updateTodos, categories, updateCats, toDoState} = props;


    return (
        <div>
            <Route exact path={`/categories/${props.todos.id}`} render={(props) =>
                <MainContent
                    {...props}
                    // todos={todos}
                    // updateTodos={updateTodos}
                    parentState={state}
                    setParentState={setState}
                    toDoState={toDoState}
                    dateState={dateState}
                    setDateState={setDateState}
                />}
            />
            <Route path={`/categories/${props.todos.id}/task`} render={(props) =>
                <ConnectedTaskDescription
                    {...props}
                    // todos={todos}
                    updateTodos={updateTodos}
                    parentState={state}
                    setParentState={setState}
                    toDoState={toDoState}
                    dateState={dateState}
                    setDateState={setDateState}
                />}/>
        </div>

    );
}

export default Main;