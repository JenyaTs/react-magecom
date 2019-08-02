import React, {useState} from 'react';
import newTaskAdder from '../helpers/addNewTask';
import { addTask } from "../actions/actions";
import { useDispatch } from 'react-redux';

function TaskAdder(props) {
    console.log(props);
    
    const [value, setValue] = useState(''); 
    const dispatch = useDispatch();
    
    const 
        categories = props.categoriesArray.slice(),
        id = props.taskList.id;
    
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
                    if (value) {
                        dispatch(addTask({categories, id, value}));
                        setValue('');
                    }
                }}>
                    Add
                </button>
            </form>
        </React.Fragment>
        
    )
}

export default TaskAdder;