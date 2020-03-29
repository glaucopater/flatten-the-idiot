import * as React from "react";
import { SCHero, SCHeroImage } from "../styled";
import FlameContainer from "../FlameContainer";
import useKeyPress from "../../hooks/use-key-press";
import { PositionType } from "../types";
import { updatePosition } from "../utils";
import HeroImage from "../../assets/images/hero.png";

export const initialPosition: PositionType = { x: 0, y: 100 };

const Hero = () => {
  const [position, setPosition] = React.useState(initialPosition);
  const w = useKeyPress("w");
  const a = useKeyPress("a");
  const s = useKeyPress("s");
  const d = useKeyPress("d");
  const space = useKeyPress("k");

  const handleOnChangePosition = () => {
    setPosition(updatePosition(position));
  };

  let left = position.x;
  let top = position.y;

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
        borderColor: d || a || w || s ? "#0000ff50" : "#ffffff50",
        transform: a ? "scale(-1,1)" : "none",
        flexDirection: a ? "row-reverse" : "row"
      }}
    >
      <SCHeroImage src={HeroImage} />
      {space && <FlameContainer size={3} />}
    </SCHero>
  );
};

export default Hero;
