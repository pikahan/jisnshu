import { createStore, combineReducers } from 'redux'
import { headerReducer } from './header/reducer'
import {HeaderState} from "./header/types";

export interface AppState {
    header: HeaderState
}

const reduxDevtools = (window as any).devToolsExtension && (window as any).devToolsExtension()

const store = createStore(combineReducers({
    header: headerReducer
}), reduxDevtools)

export default store