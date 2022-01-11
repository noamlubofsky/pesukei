import React, {
    memo,
    useState,
    useEffect,
    useMemo
  } from "react";


  
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
        console.log(size)
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
          <input
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
  
  export default RangeSlider;
  