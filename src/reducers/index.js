import * as constants  from '../actions/constants';
import subCategoryAdder  from '../helpers/addSubCategory';

const initialState = [];

export const reducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case constants.ADD_CATEGORY:
            return [
                ...state, 
                {
                    id: payload.id,
                    name: payload.name,
                    tasks: [],
                    subCategories: []
                }
                
            ];

        case constants.ADD_SUB_CATEGORY:
            let stateCopy = [
                ...state
            ];

            return subCategoryAdder(stateCopy, payload.data, payload.props);

        default:
            return state;
    }
};