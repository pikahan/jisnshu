import {createStore, applyMiddleware, compose} from 'redux'
import {combineReducers} from 'redux-immutable'
import thunk from 'redux-thunk'
import {headerReducer} from './Header/reducer'
import {ImmutableHeaderState} from './Header/types';
import {Immutable} from '../util/helpers';
import {HomeReducer} from './Home/reducer';
import {ImmutableHomeState} from './Home/types';

export interface AppState {
  header: ImmutableHeaderState
  home: ImmutableHomeState
}

export type ImmutableAppState = Immutable<AppState>

const composeEnhancers =
  typeof window === 'object' &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk),
);

const store = createStore(combineReducers({
  header: headerReducer,
  home: HomeReducer
}), enhancer)

export default store