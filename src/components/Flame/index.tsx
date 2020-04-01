import * as React from "react";
import { SCFlame } from "../styled";

const Flame = ({ size }: { size: number }) => {
  return (
    <SCFlame style={{ fontSize: 14 * size }}>
      <span role="img" aria-label="flame">
        🔥
      </span>
    </SCFlame>
  );
};

export default Flame;
