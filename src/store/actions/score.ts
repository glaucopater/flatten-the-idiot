import * as constants from "../constants";

export const setScore = (score: number) => {
  return {
    type: constants.SET_SCORE,
    score,
  };
};

export const increaseScore = (score: number) => {
  return {
    type: constants.INCREASE_SCORE,
    score,
  };
};

export const decreaseScore = (score: number) => {
  return {
    type: constants.DECREASE_SCORE,
    score,
  };
};
