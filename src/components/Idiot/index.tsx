import * as React from "react";
import { SCIdiot } from "../styled";
import { PositionType } from "../types";
import { setInitialPosition, updatePosition } from "../utils";

export const initialPosition: PositionType = { x: 0, y: 0 };

const enableInterval = (
  props: any,
  position: PositionType,
  setPosition: any,
  setFlag: any
) => {
  let localCounter = 0;
  const intervalId = setInterval(() => {
    if (localCounter > 3) {
      setFlag(true);
      return;
    }
    localCounter += 1;
    setPosition(updatePosition(position));
  }, 1000);
  return intervalId;
};

const Idiot = (props: any) => {
  const [position, setPosition] = React.useState(setInitialPosition(props.id));
  const [flag, setFlag] = React.useState(false);

  React.useEffect(() => {
    if (!flag) {
      enableInterval(props, position, setPosition, setFlag);
    }
  }, [props, position, flag]);

  const handleOnChangePosition = () => {
    setPosition(updatePosition(position, "click"));
  };

  return (
    <SCIdiot
      onClick={handleOnChangePosition}
      style={{
        left: position.x,
        top: position.y
      }}
    >
      <span role="img" aria-label="student">
        👨‍🎓
      </span>
    </SCIdiot>
  );
};

export default Idiot;
