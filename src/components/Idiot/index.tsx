import * as React from "react";
import { SCIdiot } from "../styled";
import { PositionType } from "../types";
import { setInitialPosition, updatePosition } from "../utils";

export const initialPosition: PositionType = { x: 0, y: 0 };

const Idiot = (props: any) => {
  const [position, setPosition] = React.useState(setInitialPosition(props.id));

  React.useEffect(() => {
    setInterval(() => {
      //     console.log("new event for idiot", props.id);
    }, 1000);
  }, [props.id]);

  const handleOnChangePosition = () => {
    setPosition(updatePosition(position));
  };

  console.log("idiot at pos", position);

  return (
    <SCIdiot
      onClick={handleOnChangePosition}
      style={{
        left: position.x,
        top: position.y
      }}
    >
      <h1>This is idiot: {props.id}</h1>
      At position {position.x} {position.y}
    </SCIdiot>
  );
};

export default Idiot;
