import {HeaderActions, HeaderActionTypes, ImmutableHeaderState} from './types'
import {fromJS} from 'immutable'

export const initialState: ImmutableHeaderState = fromJS({
    focused: false,
    list: fromJS([])
})

const reducer = (state = initialState, action: HeaderActions): ImmutableHeaderState => {
    switch (action.type) {
        case HeaderActionTypes.SEARCH_FOCUS:
            return state.set('focused', true)
        case HeaderActionTypes.SEARCH_BLUR:
            return state.set('focused', false)
        case HeaderActionTypes.CHANGE_LIST:
            return state.set('list', action.data)
        default:
            return state
    }
}

export { reducer as headerReducer }