import { combineReducers } from "redux"
import { verbsReducer } from "./verbsReducer"

export const rootReducer = combineReducers({
  verbs: verbsReducer,
})
