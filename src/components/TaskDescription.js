import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function TaskDescription(props) {
    return (
        <React.Fragment>
            <h4>Description</h4>
            <div className="task-info">
                <p className="id">
                    Task id: {props.todos.id}
                </p>
            </div>
            <Button variant="secondary" onClick={() => {

            }}>
                Edit
            </Button>

            <Button variant="secondary" onClick={() => {

            }}>
                Save
            </Button>
            <Link to={`${props.match.url.slice(0, -5)}`}>
                <Button variant="secondary" onClick={() => {
                }}>
                    Cancel
                </Button>
            </Link>
        </React.Fragment>
    )
}

export default TaskDescription;