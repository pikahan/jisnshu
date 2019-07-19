import {HeaderActions, HeaderActionTypes} from "./types"
import axios from 'axios'
import {ImmutableAppState} from "../index";
import {ThunkAction} from "redux-thunk";
import {fromJS} from "immutable";

export const searchFocus = (): HeaderActions => {
    return { type: HeaderActionTypes.SEARCH_FOCUS }
}

export const searchBlur = (): HeaderActions => {
    return { type: HeaderActionTypes.SEARCH_BLUR }
}

export const changeList = (data: Array<string>): HeaderActions => {
    return {
        type: HeaderActionTypes.CHANGE_LIST,
        data: fromJS(data),
        totalPage: Math.ceil(data.length / 10)
    }
}

export const mouseEnter = (): HeaderActions => {
    return {
        type: HeaderActionTypes.MOUSE_ENTER
    }
}


export const mouseLeave = (): HeaderActions => {
    return {
        type: HeaderActionTypes.MOUSE_LEAVE
    }
}

export const changePage = (page: number): HeaderActions => {
    return {
        type: HeaderActionTypes.CHANGE_PAGE,
        page
    }
}

// redux-thunk action
export const getList = (): ThunkAction<void, ImmutableAppState, null, HeaderActions> => async dispatch => {
    try {
        const { data } = await axios.get('/api/headerList.json')
        dispatch(changeList(data.data))
    } catch(e){
        console.log(e, 'cannot find headerList.json')
    }
}