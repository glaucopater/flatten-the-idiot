import { PositionType } from "./types";

// stage divided by grid items
export const defaultStepSize = 50;

export const setInitialPosition = (startingPoint: number) => {
  return {
    x: startingPoint * defaultStepSize,
    y: startingPoint * defaultStepSize
  };
};

export const updatePosition = (position: PositionType, eventType?: string) => {
  console.log("updatePosition -> eventType", eventType);
  const { x, y } = position;
  const newPosition = {
    x: x * 1 + defaultStepSize,
    y: y * 1 + defaultStepSize
  };

  console.log("updatePosition -> newPosition", newPosition);
  return newPosition;
};
