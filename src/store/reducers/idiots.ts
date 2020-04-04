import * as constants from "../constants";

const initialState = { idiots: 3 };

const idiots = (state = 0, action: any) => {
  let idiots;
  console.log("idiots -> action.type", action);
  switch (action.type) {
    case constants.BURN_IDIOT:
      idiots = state - action.idiots;
      break;
    default:
      idiots = initialState || state;
  }
  console.log("reducer idiots", state, action, idiots);
  return idiots;
};

export default idiots;
