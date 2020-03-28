import * as React from "react";
import { SCHero } from "../styled";

const Hero = () => {
  const [position, setPosition] = React.useState([0, 0]);

  const handleOnChangePosition = () => {
    const [x, y] = position;
    setPosition([x + 1, y + 1]);
  };

  return (
    <SCHero onClick={handleOnChangePosition}>
      <h1>This the hero</h1>
      hero position at {position}
    </SCHero>
  );
};

export default Hero;
