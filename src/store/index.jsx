import { combineReducers } from "redux";
import todos from './Reducers/todus'
import visibilityFilter from "./Reducers/visibilityFilter";

export const todoApp = combineReducers({
  todos,
  visibilityFilter
})