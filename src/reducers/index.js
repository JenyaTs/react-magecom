import * as constants  from '../actions/constants';
import subCategoryAdder  from '../helpers/addSubCategory';
import removeCategory  from '../helpers/removeCategory';
import addTask  from '../helpers/addNewTask';

const initialState = {
    categories: [],
    taskList: {
        id: '',
        tasks: []
    }
};

export const reducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case constants.ADD_CATEGORY:
            return {
                categories: [
                    ...state.categories,
                    {
                        id: payload.id,
                        name: payload.name,
                        tasks: [],
                        subCategories: []
                    }
                ],
                taskList: {
                    ...state.taskList
                }
            };

        case constants.ADD_SUB_CATEGORY:
            let stateCopy = [
                ...state.categories
            ];

            return {
                categories: subCategoryAdder(stateCopy, payload.data, payload.props),
                taskList: {
                    ...state.taskList
                }
            }

        case constants.REMOVE_CATEGORY:
            let stateRemovalCopy = [
                ...state.categories
            ];

            return {
                categories: removeCategory(stateRemovalCopy, payload.id),
                taskList: {
                    ...state.taskList
                }
            }

        case constants.ADD_TASK:

            return {
                categories: [
                    ...state.categories
                ],
                taskList: {
                    id: payload.id,
                    tasks: payload.todos
                }
            };

        default:
            return state;
    }
};