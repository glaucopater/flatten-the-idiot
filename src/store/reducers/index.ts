import { combineReducers } from "redux";
import scoreReducer from "./score";
import controlsReducer from "./controls";

export const rootReducer = combineReducers({
  score: scoreReducer,
  controls: controlsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
