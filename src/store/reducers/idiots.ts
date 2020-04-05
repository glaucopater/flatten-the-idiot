import * as constants from "../constants";

const defaultIdiotsCount = 5;

const idiotsCount = (
  state = defaultIdiotsCount,
  action: { type: any; idiotsCount: number }
) => {
  let idiotsCount;
  switch (action.type) {
    case constants.SET_SCORE:
      idiotsCount = action.idiotsCount;
      break;
    case constants.DECREASE_IDIOTS:
      idiotsCount = state - action.idiotsCount;
      break;
    case constants.INCREASE_IDIOTS:
      idiotsCount = state + action.idiotsCount;
      break;
    default:
      idiotsCount = state;
  }
  return idiotsCount;
};

export default idiotsCount;
