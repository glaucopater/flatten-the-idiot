import * as React from "react";
import { SCIdiot } from "../styled";

const Idiot = (props: any) => {
  const [position, setPosition] = React.useState([0, 0]);
  //const [color, setColor] = React.useState();

  React.useEffect(() => {
    setInterval(() => {
      console.log("new event for idiot", props.id);
      //  setColor("#FFFFFF");
    }, 1000);
  }, [props.id]);

  const handleOnChangePosition = () => {
    const [x, y] = position;
    setPosition([x + 1, y + 1]);
  };

  return (
    <SCIdiot onClick={handleOnChangePosition}>
      <h1>This is idiot: {props.id}</h1>
      At position {position}
    </SCIdiot>
  );
};

export default Idiot;
