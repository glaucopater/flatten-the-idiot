import * as React from "react";
import { SCGameArea } from "./styled";

const GameArea = (props: any) => {
  return <SCGameArea>{props.children}</SCGameArea>;
};

export default GameArea;
