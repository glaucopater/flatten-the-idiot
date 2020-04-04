import * as constants from "../constants";

export const setUpPressed = (controls: boolean) => {
  return {
    type: constants.UP_PRESSED,
    controls,
  };
};

export const setDownPressed = (controls: boolean) => {
  return {
    type: constants.DOWN_PRESSED,
    controls,
  };
};

export const setRightPressed = (controls: boolean) => {
  return {
    type: constants.RIGHT_PRESSED,
    controls,
  };
};

export const setLeftPressed = (controls: boolean) => {
  return {
    type: constants.LEFT_PRESSED,
    controls,
  };
};

export const setFirePressed = (controls: boolean) => {
  return {
    type: constants.FIRE_PRESSED,
    controls,
  };
};
