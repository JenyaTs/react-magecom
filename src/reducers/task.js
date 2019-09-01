import * as constants  from '../actions/constants';
import getTask  from '../helpers/getTask';
const initialState = {
    currentTask: {}
};

const task = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case constants.TASKS_DESCRIPTION_SHOW:
            return getTask(payload);

        case constants.TASKS_DESCRIPTION_UPDATE:
            return {
                ...state
            };

        default:
            return state;
    }
};

export default task;