export interface HeaderState {
    focused: boolean
}

export enum HeaderActionTypes {
    MOUSE_ENTER = '@@header/MOUSE_ENTER',
    MOUSE_LEAVE = '@@header/MOUSE_LEAVE',
    SEARCH_FOCUS = '@@header/SEARCH_FOCUS',
    SEARCH_BLUR = '@@header/SEARCH_BLUR',
    CHANGE_LIST = '@@header/CHANGE_LIST',
    CHANGE_PAGE = '@@header/CHANGE_PAGE'
}