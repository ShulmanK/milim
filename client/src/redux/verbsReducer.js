import {ADD_VERB} from "./types"

const initialState = {
    verbs: []
}

export const verbsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_VERB:
            return {
                ...state
            }
    }
    return state
}