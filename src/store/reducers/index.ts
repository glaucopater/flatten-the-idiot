import { combineReducers } from "redux";
import scoreReducer from "./score";

export const rootReducer = combineReducers({
  score: scoreReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
