import * as React from "react";
import { SCFlameContainer } from "./styled";
import Flame from "../Flame";

const FlameContainer = ({ size }: { size: number }) => {
  return (
    <SCFlameContainer style={{ fontSize: 14 * size }}>
      {[1, 2, 3, 4, 5].map(item => (
        <Flame key={item} size={item} />
      ))}
    </SCFlameContainer>
  );
};

export default FlameContainer;
