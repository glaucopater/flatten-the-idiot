import { PositionType, collisionType } from "../types";

export const checkCollision = () => {
  const collisions: collisionType[] = [];
  const flames = document.querySelectorAll('[aria-label="flame"]');
  const idiots = document.querySelectorAll('[aria-label="student"]');

  if (flames.length > 0 && idiots.length > 0) {
    idiots.forEach((idiot: any, index: number) => {
      flames.forEach((f, pos) => {
        if (
          isColliding(idiot.getBoundingClientRect(), f.getBoundingClientRect())
        ) {
          collisions.push({ idiotId: index, flameCollided: pos });
        }
      });
    });
  }
  return collisions;
};

// stage divided by grid items
export const defaultStepSize = 50;

export const setInitialPosition = (startingPoint: number) => {
  return {
    x: startingPoint * defaultStepSize,
    y: startingPoint * defaultStepSize,
  };
};

export const updatePosition = (position: PositionType) => {
  const { x, y } = position;
  const newPosition = {
    x: x * 1 + defaultStepSize,
    y: y * 1 + defaultStepSize,
  };

  return newPosition;
};

export const isColliding = (rect1: DOMRect, rect2: DOMRect) =>
  rect1.x < rect2.x + rect2.width &&
  rect1.x + rect1.width > rect2.x &&
  rect1.y < rect2.y + rect2.height &&
  rect1.y + rect1.height > rect2.y;

export const getRandomInt = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
};
