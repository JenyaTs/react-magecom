import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import ReactTooltip from 'react-tooltip';
import DatePicker from "react-datepicker";
import updateTask from '../helpers/updateNewTask'

import '../styles/styles.css';
import "react-datepicker/dist/react-datepicker.css";

function TaskListItem(props) {
    const [startDate, setStartDate] = useState(props.el.startDate);
    const [endDate, setEndDate] = useState(props.el.endDate);
    const [state, setState] = useState(true);
     
    if (Date.parse(endDate) < Date.parse(startDate)) {
        return (
            <React.Fragment>
                <Link to={`${props.match.url}/task/${props.num + 1}`}>
                    <li data-tip="task expired" className='red' onClick={() => {
                        const todos = props.todos;
                        todos.item = props.num;
                        props.updateTodos(todos);
                    }}>
                        {props.el.title}
                    </li>
                    <ReactTooltip />
                </Link>
                <div className="estimate">
                    <strong>Reset task estimate:</strong>
                    <p>Start date</p>
                    <DatePicker
                        selected={startDate}
                        onChange={(date) => {
                            setStartDate(date);
                            if (Date.parse(endDate) < Date.parse(startDate)) {
                                let updatedTask = {
                                   ...props.el,
                                   startDate: date
                                }
                                console.log(updatedTask)
                                updateTask(props.categories, props.id, props.el.id, updatedTask);
                            }
                        }}
                    />
                    <p>End date</p>
                    <DatePicker
                        selected={endDate}
                        onChange={(date) => {
                            setEndDate(date);
                            if (Date.parse(endDate) < Date.parse(startDate)) {
                                let updatedTask = {
                                    ...props.el,
                                    endDate: date
                                }
                                console.log(updatedTask)
                                updateTask(props.categories, props.id, props.el.id, updatedTask);
                            }
                        }}
                    />
                    <Button onClick={() => {
                        console.log(Date.parse(endDate))
                        if (Date.parse(endDate) > Date.parse(startDate)) {
                            setState(!state);
                        }
            
                        // updateTask(this.props.categories, this.props.todos.id, this.data.id, newData);
                    }}>
                        Update
                    </Button>
                </div>  
            </React.Fragment>              
        )
    }

    return (
        <Link to={`${props.match.url}/task/${props.num + 1}`}>
            <li className='green' onClick={() => {
                const todos = props.todos;
                todos.item = props.num;
                props.updateTodos(todos);
            }}>
                {props.el.title}
            </li>
        </Link>
    )
}

export default TaskListItem;