import * as TYPES from '../Types/index'

export const setActiveSlider = (payload) => {
    return {
        type: TYPES.SET_ACTIVE_CHECKBOX,
        payload: payload
    }
}

export const setAutoSlide = () => {
    return {
        type: TYPES.SET_AUTOSLIDE
    }
}

export const setActiveSection = (payload) => {
    return {
        type: TYPES.SET_SECTION,
        payload: payload,
    }
}