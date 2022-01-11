import React, {
    memo,
    useState,
    useEffect,
    useMemo
  } from "react";
  import styled from "styled-components";

  
  const RangeSlider = memo(
    ({ size, setSize, classes, label, onChange, value, ...sliderProps }) => {
      const [sliderVal, setSliderVal] = useState(30);
      const [mouseState, setMouseState] = useState(null);
  
      useEffect(() => {
        setSliderVal(value);
      }, [value]);
  
      const changeCallback = e => {
        setSliderVal(e.target.value);
        setSize(e.target.value)
        // console.log(size)
      };
  
      useEffect(() => {
        if (mouseState === "up") {
          onChange(sliderVal);
        }
      }, [mouseState]);

      return (
        <div className="range-slider">
          {/* <p>{label}</p>
          <h3>value: {sliderVal}</h3> */}
          <Input
            type="range"
            value={sliderVal}
            {...sliderProps}
            className={`slider ${classes}`}
            id="myRange"
            onChange={changeCallback}
            onMouseDown={() => setMouseState("down")}
            onMouseUp={() => setMouseState("up")}
          />
        </div>
      );
    }
  );
  
  const Input = styled.input`
  outline: none;
  transition: opacity .2s;

  &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;

      border: 0;

      cursor: pointer;
      border-radius: 2px;
      background-size: 100%;
      background-position: center center;
      background-repeat: no-repeat;
      outline: none;
  }

  &::-moz-range-thumb {
    
      border: 0;

      cursor: pointer;
      outline: none;
      border-radius: 2px;
      background-size: 100%;
      background-position: center center;
      background-repeat: no-repeat;
  }
`;

  export default RangeSlider;
  