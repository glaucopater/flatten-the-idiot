import React from "react";
import { SCHero, SCHeroImage } from "./styled";
import FlameContainer from "../FlameContainer";
import useKeyPress from "../../hooks/use-key-press";
import { PositionType } from "../../types";
import { updatePosition } from "../../utils";
import HeroImage from "../../assets/images/hero.png";
import { connect } from "react-redux";
import { RootState } from "../../store/reducers";

export const initialPosition: PositionType = { x: 0, y: 100 };

const Hero = (props: any) => {
  const [position, setPosition] = React.useState(initialPosition);
  const w = useKeyPress("w");
  const a = useKeyPress("a");
  const s = useKeyPress("s");
  const d = useKeyPress("d");
  const k = useKeyPress("k");

  const handleOnChangePosition = () => {
    setPosition(updatePosition(position));
  };

  let upPressed = props.controls.up;
  let leftPressed = props.controls.left;
  let rightPressed = props.controls.right;
  let downPressed = props.controls.down;
  let crispPressed = props.controls.fire;

  let left = position.x;
  let top = position.y;

  if (d || rightPressed) {
    left = position.x += 10;
  } else if (a || leftPressed) {
    left = position.x -= 10;
  } else left = position.x;

  if (w || upPressed) {
    top = position.y -= 10;
  } else if (s || downPressed) {
    top = position.y += 10;
  } else top = position.y;

  const heroStyle = {
    left: left,
    top: top,
    borderColor: d || a || w || s ? "#0000ff50" : "#ffffff50",
    transform: a ? "scale(-1,1)" : "none"
  };

  return (
    <SCHero
      onClick={handleOnChangePosition}
      style={{ flexDirection: a ? "row-reverse" : "row", ...heroStyle }}
    >
      {a && (k || crispPressed) && <FlameContainer size={3} />}
      <SCHeroImage src={HeroImage} />
      {!a && (k || crispPressed) && <FlameContainer size={3} />}
    </SCHero>
  );
};

export default connect(
  (state: RootState) => {
    return { controls: state.controls, ...state };
  }
)(Hero);
