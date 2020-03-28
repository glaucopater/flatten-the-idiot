import * as React from "react";
import "./styles.css";
import Stage from "./components/Stage";
import Hero from "./components/Hero";
// import Idiot from "./components/Idiot";

export default function App() {
  return (
    <div className="App">
      <Stage>
        <Hero />
        {/* {["1", "2", "3"].map(item => (
          <Idiot key={item} id={item} />
        ))} */}
      </Stage>
    </div>
  );
}
