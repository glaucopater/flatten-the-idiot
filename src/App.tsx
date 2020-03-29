import * as React from "react";
import "./styles.css";
import Stage from "./components/Stage";
import Hero from "./components/Hero";
import Idiot from "./components/Idiot";
import { isColliding } from "./components/utils";

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

const enableInterval = (burned: any, setBurned: any) => {
  const intervalId = setInterval(() => {
    const result = checkCollision();
    setBurned(result);
  }, 1000);
  return intervalId;
};

export default function App() {
  const [burned, setBurned] = React.useState(0);

  React.useEffect(() => {
    enableInterval(burned, setBurned);
  }, [burned]);

  return (
    <div className="App">
      <h1>Flat the idiots</h1>
      <h2>Idiots burned: {collided.length}</h2>
      <Stage>
        <Hero />
        {["1", "2", "3"].map(item => (
          <Idiot key={item} id={item} />
        ))}
      </Stage>
    </div>
  );
}
