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
  const { x, y } = position;
  const newPosition = {
    x: x * 1 + defaultStepSize,
    y: y * 1 + defaultStepSize
  };

  return newPosition;
};

export const isColliding = (rect1: DOMRect, rect2: DOMRect) =>
  rect1.x < rect2.x + rect2.width &&
  rect1.x + rect1.width > rect2.x &&
  rect1.y < rect2.y + rect2.height &&
  rect1.y + rect1.height > rect2.y;
