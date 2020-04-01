import * as React from "react";
import "./styles.css";
import Stage from "./components/Stage";
import Hero from "./components/Hero";
import Idiot from "./components/Idiot";
import { isColliding, getRandomInt } from "./components/utils";

const collided: number[] = [];

const checkCollision = () => {
  const flames = document.querySelectorAll('[aria-label="flame"]');
  const idiots = document.querySelectorAll('[aria-label="student"]');

  if (flames.length > 0 && idiots.length > 0) {
    idiots.forEach(function(idiot: any, index: number) {
      if (
        isColliding(
          idiot.getBoundingClientRect(),
          flames[flames.length - 1].getBoundingClientRect()
        )
      ) {
        collided.push(index);
      }
    });
  }

  return collided.length;
};

const enableInterval = (
  setBurned: any,
  counter: number,
  setCounter: any,
  setRandom: any
) => {
  const intervalId = setInterval(() => {
    const result = checkCollision();
    setBurned(result);
    setRandom(getRandomInt(1, 3));
    if (counter < 3) {
      setCounter(counter + 1);
    }
  }, 1000);
  return intervalId;
};

export default function App() {
  const [, setBurned] = React.useState(0);
  const [counter, setCounter] = React.useState(0);
  const [random, setRandom] = React.useState(0);

  React.useEffect(() => {
    enableInterval(setBurned, counter, setCounter, setRandom);
  }, [counter]);

  return (
    <div className="App">
      <h1>Flatten the idiots (ver α)</h1>
      <h2>WASD to move, K to burn</h2>
      <h3>Idiots burned: {collided.length}</h3>
      <Stage>
        <Hero />
        {["1", "2", "3"].map(item => (
          <Idiot
            key={item}
            id={item}
            position={{
              x: +item * (random * 50) + 50, //   1*1*50 +50, 1*2*50 +50 1*3*50+50  100,150,200
              y: +item + 1 * (random * 50) + 50
            }}
          />
        ))}
      </Stage>
    </div>
  );
}
