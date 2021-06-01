import * as TYPES from '../Types/index';

const initialState = {
    checkedRadio: "0",
    checkedRadioPrev: null,
    autoSlide:true,
}

export const reducerCheckbox = (state = initialState, action) => {
    switch (action.type) {

        case TYPES.SET_ACTIVE_CHECKBOX:
            return {
                ...state,
                checkedRadioPrev: state.checkedRadio,
                checkedRadio: action.payload
            };
        case TYPES.SET_AUTOSLIDE:
            return {
                ...state,
                autoSlide: false
            }
        default:
            return state;
    }
}
