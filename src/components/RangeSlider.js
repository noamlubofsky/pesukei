import React, {
    // memo,
    // useState,
    // useEffect,
  } from "react";
  import styled from "styled-components";

  
  function RangeSlider({size, setSize}) {
    // ({ size, setSize, classes, label, onChange, value, ...sliderProps }) => {
      // const [sliderVal, setSliderVal] = useState(30);
      // const [mouseState, setMouseState] = useState(null);
  
      // useEffect(() => {
      //   setSliderVal(value);
      // }, [value]);
  
      const changeCallback = e => {
        // setSliderVal(e.target.value);
        setSize(e.target.value)
        // console.log(size)
      };
  
      // useEffect(() => {
      //   if (mouseState === "up") {
      //     onChange(sliderVal);
      //   }
      // }, [mouseState]);

      return (
        <div className="range-slider">

          <input
            type="range"
            value={size}
            min={20}
            max={80}
            className="slider"
            id="myRange"
            onChange={changeCallback}
            // onMouseDown={() => setMouseState("down")}
            // onMouseUp={() => setMouseState("up")}
          />
        </div>
      );
    }
  ;
  
  const Input = styled.input`

`;

  export default RangeSlider;
  