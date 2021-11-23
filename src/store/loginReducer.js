
defaultState = []

const COMPARE_DATA = "COMPARE_DATA"

export const loginReducer = (state = defaultState, action) => {
    switch (action.type) {
        case COMPARE_DATA:
            return {...state}
        default:
            return state
    }
}