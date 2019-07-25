import * as constants  from '../actions/constants';

const initialState = [];

export const reducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case constants.ADD_TODO:
            return [
                ...state, 
                {
                    id: payload.id,
                    name: payload.name,
                    tasks: [],
                    subCategories: []
                }
                
            ];

        default:
            return state;
    }
};