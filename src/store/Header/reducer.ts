import {HeaderActions, HeaderActionTypes, ImmutableHeaderState} from './types'
import {fromJS} from 'immutable'

export const initialState: ImmutableHeaderState = fromJS({
    focused: false,
    mouseIn: false,
    list: fromJS([]),
    page: 0,
    totalPage: 1
})

const reducer = (state = initialState, action: HeaderActions): ImmutableHeaderState => {
    switch (action.type) {
        case HeaderActionTypes.SEARCH_FOCUS:
            return state.set('focused', true)
        case HeaderActionTypes.SEARCH_BLUR:
            return state.set('focused', false)
        case HeaderActionTypes.CHANGE_LIST:
            return state.merge({
                list: action.data,
                totalPage: action.totalPage
            })
        case HeaderActionTypes.MOUSE_ENTER:
            return state.set('mouseIn', true)
        case HeaderActionTypes.MOUSE_LEAVE:
            return state.set('mouseIn', false)
        case HeaderActionTypes.CHANGE_PAGE:
            return state.set('page', action.page)
        default:
            return state
    }
}

export { reducer as headerReducer }