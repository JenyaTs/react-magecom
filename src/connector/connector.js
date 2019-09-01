import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        categoriesArray: state.categories
    }
}

const mapStateToTask = (state) => {
    return {
        categoriesArray: state.categories,
        taskList: state.taskList
    };
}

const mapStateToDescription = (state) => {
    return {
        task: state.task
    };
}

export const sidebarConnector = connect(
    mapStateToProps
);

export const taskListConnector = connect(
    mapStateToTask
);

export const taskDescriptionConnector = connect(
    mapStateToDescription
);
