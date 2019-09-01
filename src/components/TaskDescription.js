import React  from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import DatePicker from "react-datepicker";
import updateTask from "../helpers/updateNewTask";

import "react-datepicker/dist/react-datepicker.css";

export default class TaskDescription extends React.Component {

    constructor(props) {
        super(props);
        console.log(props);
        this.data = props.task;
        this.state = {
            state: false,
            title: this.data.title,
            description: this.data.description,
            startDate: this.data.startDate,
            endDate: this.data.endDate,
            isDone: this.data.isDone,
            dod: this.data.dod
        };

        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleStartDateChange = this.handleStartDateChange.bind(this);
        this.handleEndDateChange = this.handleEndDateChange.bind(this);
        this.checkComplete = this.checkComplete.bind(this);
    }

    handleTitleChange(event) {
        this.setState({title: event.target.value});
    }

    handleDescriptionChange(event) {
        this.setState({description: event.target.value});
    }

    handleStartDateChange(date) {
        this.setState({startDate: date});
    }

    handleEndDateChange(date) {
        this.setState({endDate: date});
    }

    checkComplete() {
        if (this.state.dod) {
            return 'Uncomplete'
        }
        return 'Complete'
    }

    render() {
        if(this.state.state) {
            return (
                <React.Fragment>
                    <h4>Description</h4>
                    <div className="task-info">
                        <div className="title">
                            <strong>Task title:</strong>
                            <input value={this.state.title} onChange={this.handleTitleChange}/>
                        </div>
                        <div className="description">
                            <strong>Task description:</strong>
                            <textarea value={this.state.description} onChange={this.handleDescriptionChange}/>
                        </div>
                        <div className="estimate">
                            <strong>Task estimate:</strong>
                            <p>Start date</p>
                            <DatePicker
                                selected={this.state.startDate}
                                onChange={this.handleStartDateChange}
                            />
                            <p>End date</p>
                            <DatePicker
                                selected={this.state.endDate}
                                onChange={this.handleEndDateChange}
                            />
                        </div>
                        <div className="dod">
                            <strong>SMART</strong>  {this.state.isDone}
                        </div>
                        <div className="is-complete">
                            <strong>Is task completed:</strong>  {this.state.dod.toString()}
                            <Button onClick={() => {
                                this.setState(() => ({
                                    dod: !this.state.dod
                                }));
                            }}>
                                {this.checkComplete()}
                            </Button>
                        </div>
                    </div>

                    <Button onClick={() => {
                        let newData = Object.assign({}, this.data, this.state);
                        delete newData.state;
                        updateTask(this.props.categories, this.props.todos.id, this.data.id, newData);
                        this.setState(() => ({
                            state: false
                        }));
                    }}>
                        Save
                    </Button>

                    <Button variant="secondary" onClick={() => {
                        this.setState(() => ({
                            state: false,
                            title: this.data.title,
                            description: this.data.description,
                            startDate: this.data.startDate,
                            endDate: this.data.endDate,
                            isDone: this.data.isDone,
                            dod: this.data.dod
                        }));
                    }}>
                        Cancel
                    </Button>
                </React.Fragment>
            )
        }
        return (
            <React.Fragment>
                <h4>Description</h4>
                <div className="task-info">
                    <div className="title">
                        <strong>Task title:</strong>  {this.state.title}
                    </div>
                    <div className="description">
                        <strong>Task description:</strong>  {this.state.description}
                    </div>
                    <div className="estimate">
                        <strong>Task estimate:</strong>
                        <p>Start date</p>
                        {
                            this.state.startDate.toDateString()
                        }
                        <p>End date</p>
                        {
                            this.state.endDate.toDateString()
                        }
                    </div>
                    <div className="dod">
                        <strong>SMART:</strong>  {this.state.isDone}
                    </div>
                    <div className="is-complete">
                        <strong>Is task completed:</strong>  {this.state.dod.toString()}
                    </div>
                </div>
                <Button variant="secondary" onClick={() => {
                    this.setState((state) => ({
                        ...state,
                        state: true
                    }));
                }}>
                    Edit
                </Button>
                <Link to={`${this.props.match.url.slice(0, -5)}`}>
                    <Button variant="secondary" onClick={() => {
                    }}>
                        Back
                    </Button>
                </Link>
            </React.Fragment>
        )
    }
}
