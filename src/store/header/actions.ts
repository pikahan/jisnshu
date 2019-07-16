import { HeaderActionTypes } from "./types"

export const searchFocus = () => {
    return { type: HeaderActionTypes.SEARCH_FOCUS }
}

export const searchBlur = () => {
    return { type: HeaderActionTypes.SEARCH_BLUR }
}