import {Immutable} from "../../util/helpers";

export interface HeaderState {
    focused: boolean
    list: Array<string>
}

export type ImmutableHeaderState = Immutable<HeaderState>

export enum HeaderActionTypes {
    MOUSE_ENTER = '@@header/MOUSE_ENTER',
    MOUSE_LEAVE = '@@header/MOUSE_LEAVE',
    SEARCH_FOCUS = '@@header/SEARCH_FOCUS',
    SEARCH_BLUR = '@@header/SEARCH_BLUR',
    CHANGE_LIST = '@@header/CHANGE_LIST',
    CHANGE_PAGE = '@@header/CHANGE_PAGE'
}

export interface MouseEnterAction {
    type: typeof HeaderActionTypes.MOUSE_ENTER
}

export interface MouseLeaceAction {
    type: typeof HeaderActionTypes.MOUSE_LEAVE
}

export interface SearchFocusAction {
    type: typeof HeaderActionTypes.SEARCH_FOCUS
}
export interface SearchBlurAction {
    type: typeof HeaderActionTypes.SEARCH_BLUR
}

export interface ChangeListAction {
    type: typeof HeaderActionTypes.CHANGE_LIST,
    data: Array<string>
}

export interface ChangePageAction {
    type: typeof HeaderActionTypes.CHANGE_PAGE
}

export type HeaderActions = MouseEnterAction | MouseLeaceAction | SearchFocusAction | SearchBlurAction | ChangeListAction | ChangePageAction