import React, {useState} from 'react';
import newTaskAdder from '../helpers/addNewTask';

function TaskAdder(props) {
    console.log(props);
    const [value, setValue] = useState(''); 
    
    const 
        categories = props.categoriesArray.slice(),
        id = props.todos.id;
    
    return (
        <React.Fragment>
            <p>Add new task</p>
            <form onSubmit={e => e.preventDefault()}>
                <input
                    value={value}
                    onChange={(e) => {
                        setValue(e.target.value);
                    }}
                />
                <button onClick={() => {
                    // if (value) {
                    //     newTaskAdder(categories, id, value);
                    //     props.setParentState(!props.parentState);
                    //     setValue('');
                    // }
                }}>
                    Add
                </button>
            </form>
        </React.Fragment>
        
    )
}

export default TaskAdder;