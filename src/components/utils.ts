import { PositionType } from "./types";

// stage divided by grid items
export const defaultStepSize = 50;

export const setInitialPosition = (startingPoint: number) => {
  return {
    x: startingPoint * defaultStepSize,
    y: startingPoint * defaultStepSize
  };
};

export const updatePosition = (position: PositionType) => {
  const { x, y } = position;
  return { x: x * 1 + defaultStepSize, y: y * 1 + defaultStepSize };
};
