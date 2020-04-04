import * as React from "react";
import { SCGameControls, SCGameControlsDirection } from "./styled";
import { connect } from "react-redux";
import { RootState } from "../../store/reducers";
import { setUpPressed, setDownPressed, setLeftPressed, setRightPressed, setFirePressed } from "../../store/actions/controls";


const GameControls = (props: any) => {

  const handleUpPress = () => {
    props.setUpPressed(true);
  }

  const handleDownPress = () => {
    props.setDownPressed(true);
  }


  const handleRightPress = () => {
    props.setRightPressed(true);
  }

  const handleLeftPress = () => {
    props.setLeftPressed(true);
  }

  const handleFirePress = () => {
    props.setFirePressed(true);
  }

  return (
    <SCGameControls>
      <SCGameControlsDirection>
        <div>
          <button onClick={handleUpPress}>UP</button>
        </div>
        <div style={{ justifyContent: "space-around" }}>
          <button onClick={handleLeftPress}>LEFT</button>
          <button onClick={handleRightPress}>RIGHT</button>
        </div>
        <div>
          <button onClick={handleDownPress}>DOWN</button>
        </div>
      </SCGameControlsDirection>
      <div>
        <button onClick={handleFirePress}>Auto Fire</button>
      </div>
    </SCGameControls >);
}

export default connect(
  (state: RootState) => {
    return { controls: state.controls };
  }, { setUpPressed, setDownPressed, setRightPressed, setLeftPressed, setFirePressed }
)(GameControls);

