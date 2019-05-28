import { combineReducers } from "redux";
import todos from "./todos";
import visibilityFilter from "./visibilityFilter";

/*
REDUCERS : how application state change when actions are send to the store
*/

export default combineReducers({
  todos,
  visibilityFilter
});
