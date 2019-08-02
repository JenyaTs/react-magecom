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

export const sidebarConnector = connect(
    mapStateToProps
);

export const taskListConnector = connect(
    mapStateToTask
);
