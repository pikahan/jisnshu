import {HeaderActionTypes, HeaderState} from './types'
import {Reducer} from "redux";

export const initialState: HeaderState = {
    focused: false
}

const reducer: Reducer<HeaderState> = (state = initialState, action) => {
    switch (action.type) {
        case HeaderActionTypes.SEARCH_FOCUS:
            return {
                ...state,
                focused: true
            }
        case HeaderActionTypes.SEARCH_BLUR:
            return {
                ...state,
                focused: false
            }
        default:
            return {
                ...state
            }
    }
}

export { reducer as headerReducer }