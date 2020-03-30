import * as React from "react";
import { SCIdiot } from "../styled";

const Idiot = (props: any) => {
  const { position } = props;

  const styles = React.useMemo(
    () => ({
      left: position.x,
      top: position.y
    }),
    [position]
  );

  return (
    <SCIdiot style={styles}>
      <span role="img" aria-label="student">
        👨‍🎓
      </span>
    </SCIdiot>
  );
};

export default Idiot;
