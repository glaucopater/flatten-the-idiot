import * as React from "react";
import { SCGameInfo } from "./styled";

const GameInfo = ({ idiotsCrisped, score }: { idiotsCrisped: number, score: number }) => (
  <SCGameInfo>
    <h2>WASD to move, K to crisp</h2>
    <div>
      <span>Idiots crisped: {idiotsCrisped}</span>
      <span>Score: {score}</span>
    </div>
  </SCGameInfo>);

export default GameInfo;
