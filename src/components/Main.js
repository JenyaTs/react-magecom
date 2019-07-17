import React, {useState} from 'react';
import MainContent from "./MainContent";
import { Route } from 'react-router-dom';
import TaskDescription from "./TaskDescription";

function Main(props) {
    const [state, setState] = useState(false);
    const {todos, updateTodos, categories, updateCats, toDoState} = props;

    return (
        <div>
            <Route exact path={`/categories/${props.todos.id}`} render={(props) =>
                <MainContent
                    {...props}
                    todos={todos}
                    updateTodos={updateTodos}
                    categories={categories}
                    updateCats={updateCats}
                    parentState={state}
                    setParentState={setState}
                    toDoState={toDoState}
                />}
            />
            <Route path={`/categories/${props.todos.id}/task`} render={(props) =>
                <TaskDescription
                    {...props}
                    todos={todos}
                    updateTodos={updateTodos}
                    categories={categories}
                    updateCats={updateCats}
                    parentState={state}
                    setParentState={setState}
                    toDoState={toDoState}
                />}/>
        </div>

    );
}

export default Main;