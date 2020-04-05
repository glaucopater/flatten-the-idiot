import * as constants from "../constants";

const initialState = {
  up: false,
  down: false,
  left: false,
  right: false,
  fire: false,
};

const controls = (state = initialState, action: any) => {
  let draft = {
    ...initialState,
  };

  switch (action.type) {
    case constants.UP_PRESSED:
      draft!.up = true;
      break;
    case constants.DOWN_PRESSED:
      draft!.down = true;
      break;
    case constants.LEFT_PRESSED:
      draft!.left = true;
      break;
    case constants.RIGHT_PRESSED:
      draft!.right = true;
      break;
    case constants.FIRE_PRESSED:
      draft!.fire = !state.fire;
      break;
    default:
      draft = state;
  }
  return draft;
};

export default controls;
