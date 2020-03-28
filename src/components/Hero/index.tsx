import * as React from "react";
import { SCHero } from "../styled";
import useKeyPress from "../../hooks/use-key-press";
import { PositionType } from "../types";
import { setInitialPosition, updatePosition } from "../utils";

export const initialPosition: PositionType = { x: 0, y: 0 };

const Hero = () => {
  const [position, setPosition] = React.useState(setInitialPosition(0));
  const w = useKeyPress("w");
  const a = useKeyPress("a");
  const s = useKeyPress("s");
  const d = useKeyPress("d");

  const handleOnChangePosition = () => {
    setPosition(updatePosition(position));
  };

  let left, top;

  if (d) {
    left = position.x += 10;
  } else if (a) {
    left = position.x -= 10;
  } else left = position.x;

  if (w) {
    top = position.y -= 10;
  } else if (s) {
    top = position.y += 10;
  } else top = position.y;

  return (
    <SCHero
      onClick={handleOnChangePosition}
      style={{
        left: left,
        top: top,
        background: d ? "blue" : "#ffffff"
      }}
    >
      Hero at {position.x} {position.y}
    </SCHero>
  );
};

export default Hero;
