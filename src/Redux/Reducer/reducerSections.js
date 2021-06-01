import * as TYPES from '../Types/index'

const initialState = {
    activeSection: "Just Promos"
}

export const reducerSection = (state = initialState, action) => {
    switch (action.type) {

        case TYPES.SET_SECTION:
            return {
                ...state,
                activeSection: action.payload,
            };
        default:
            return state;
    }
}
