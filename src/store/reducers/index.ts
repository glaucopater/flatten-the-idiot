import { combineReducers } from "redux";
import scoreReducer from "./score";
import controlsReducer from "./controls";
import idiotsCountReducer from "./idiots";

export const rootReducer = combineReducers({
  score: scoreReducer,
  controls: controlsReducer,
  idiotsCount: idiotsCountReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
