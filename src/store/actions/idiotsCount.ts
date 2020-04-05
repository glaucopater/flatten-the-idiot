import * as constants from "../constants";

export const setIdiotsCount = (idiotsCount: number) => {
  return {
    type: constants.SET_IDIOTS,
    idiotsCount,
  };
};

export const increaseIdiotsCount = (idiotsCount: number) => {
  return {
    type: constants.INCREASE_IDIOTS,
    idiotsCount,
  };
};

export const decreaseIdiotsCount = (idiotsCount: number) => {
  return {
    type: constants.DECREASE_IDIOTS,
    idiotsCount,
  };
};
