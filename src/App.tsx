import * as React from "react";
import "./styles.css";
import GameArea from "./components/GameArea";
import GameInfo from "./components/GameInfo";
import GameControls from "./components/GameControls";
import Hero from "./components/Hero";
import Idiot from "./components/Idiot";
import { checkCollision, getRandomInt } from "./utils";
import { connect } from "react-redux";
import { setScore, increaseScore, decreaseScore } from "./store/actions/score";
import { RootState } from "./store/reducers/index";
import { collisionType } from "./types";

const enableInterval = (
  counter: number,
  setCounter: any,
  setRandom: any,
  setCollisions: any
) => {
  const intervalId = setInterval(() => {
    const collisions = checkCollision();
    if (collisions.length > 0)
      setCollisions(collisions);
    setRandom(getRandomInt(1, 3));
    if (counter < 3) {
      setCounter(counter + 1);
    }
  }, 3000);
  return intervalId;
};

const App = (props: any) => {
  const [counter, setCounter] = React.useState(0);
  const [random, setRandom] = React.useState(0);
  const [collisions, setCollisions] = React.useState<collisionType[]>([]);

  React.useEffect(() => {
    enableInterval(counter, setCounter, setRandom, setCollisions);
  }, []);

  const { increaseScore, score } = props;

  React.useEffect(() => {
    if (collisions.length > 0)
      increaseScore(collisions.length);
  }, [collisions.length, increaseScore]);

  const idiotsValues = Array.from(Array(3).keys()).map(e => (e + 1).toString());

  return (
    <div className="App">
      <h1>Crisp the idiots</h1>
      <GameInfo score={score} idiotsCrisped={collisions.length} />
      <GameArea>
        <Hero />
        {idiotsValues.map(item => (
          <Idiot
            key={item}
            id={item}
            position={{
              x: +item * (random * 50) + 50, //   1*1*50 +50, 1*2*50 +50 1*3*50+50  100,150,200
              y: +item + 1 * (random * 50) + 50
            }}
          />
        ))}
      </GameArea>
      <GameControls />
    </div>
  );
};

export default connect(
  (state: RootState) => {
    return { score: state.score };
  }, { setScore, increaseScore, decreaseScore }
)(App);
