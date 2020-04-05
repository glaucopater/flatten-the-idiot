import * as React from "react";
import { SCGameInfo } from "./styled";

const GameInfo = ({ idiotsCrisped, score, idiotsCount }: { idiotsCrisped: number, score: number, idiotsCount: number }) => (
  <SCGameInfo>
    {idiotsCount > 0 &&
      <>
        <h2>WASD to move, K to crisp</h2>
        <div>
          <span>Idiots crisped: {idiotsCrisped}</span>
          <span>Score: {score}</span>
        </div>
      </>}
    {
      idiotsCount === 0 &&
      <h2>You Win!</h2>
    }
  </SCGameInfo>);

export default GameInfo;
