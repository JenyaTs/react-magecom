import React from 'react';
import TaskListItem from './TaskListItem';

function TaskList(props) {
    let list;
    if (props.todos) {
        list = props.todos.todos.map((el, i) => {
            return <TaskListItem
                match={props.match}
                key={i}
                num={i}
                id={props.todos.id}
                el={el}
                todos={props.todos}
                updateTodos={props.updateTodos}
                categories={props.categories}
                updateCats={props.updateCats}
                dateState={props.dateState}
                setDateState={props.setDateState}
            />;
        });
    }
    
    return (
        <ul>
            {list}
        </ul>
    )
}

export default TaskList;