import React, {useState} from 'react';
import addNewTask from '../helpers/addNewTask';

function TaskAdder(props) {
    const [value, setValue] = useState(''); 
    
    const 
        categories = props.categories.slice(),
        id = props.todos.id;
    
    return (
        <form onSubmit={e => e.preventDefault()}>
            <input
                value={value}
                onChange={(e) => {
                    setValue(e.target.value);
                }}
            />            
            <button onClick={() => {
                if (value) {
                    addNewTask(categories, id, value);                  
                    props.setParentState(!props.parentState);
                    setValue('');
                }
            }}>
                Add Task
            </button>
        </form>
        
    )
}

export default TaskAdder;