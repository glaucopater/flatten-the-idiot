import * as constants from "../constants";

const score = (state = 0, action: { type: any; score: number }) => {
  let score;
  console.log("reducer score", state, action.type);
  switch (action.type) {
    case constants.SET_SCORE:
      score = action.score;
      break;
    case constants.DECREASE_SCORE:
      score = state - action.score;
      break;
    case constants.INCREASE_SCORE:
      score = state + action.score;
      break;
    default:
      score = state;
  }
  return score;
};

export default score;
