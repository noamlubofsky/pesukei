import React, {useEffect, useState} from "react";
import styled from "styled-components";
import blueleather from '../blueleather.jpeg'

function CompassPage() {
  const [latitude, setLatitude] = useState('')
  const [longitude, setLongitude] = useState('')
  const [east, setEast] = useState(false)
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function(position) {
      setLatitude(position.coords.latitude)
      setLongitude(position.coords.longitude)      
      pointDegree = calcDegreeToPoint(latitude, longitude);
      if (!isIOS) {
        window.addEventListener("deviceorientationabsolute", handler, true);
      }
      if (pointDegree < 0) {
        pointDegree = pointDegree + 360;
      }
    });
},[])

  const compassCircle = document.querySelector(".compass-circle");
  const myPoint = document.querySelector(".my-point");
  // const startBtn = document.querySelector(".start-btn");
  const isIOS =
    navigator.userAgent.match(/(iPod|iPhone|iPad)/) &&
    navigator.userAgent.match(/AppleWebKit/);
    let compass;


  // function init() {
  //   startBtn.addEventListener("click", startCompass);
  //   navigator.geolocation.getCurrentPosition(locationHandler);

  //   if (!isIOS) {
  //     window.addEventListener("deviceorientationabsolute", handler, true);
  //   }
  // }

  function startCompass() {
    if (isIOS) {
      DeviceOrientationEvent.requestPermission()
        .then((response) => {
          if (response === "granted") {
            window.addEventListener("deviceorientation", handler, true);
          } else {
            alert("has to be allowed!");
          }
        })
        .catch(() => alert("not supported"));
    }
  }

  function handler(e) {
    compass = e.webkitCompassHeading || Math.abs(e.alpha - 360);
    compassCircle.style.transform = `translate(-50%, -50%) rotate(${-compass}deg)`;

    if(compass >= 80 && compass <= 100) {
      setEast(true)
    }else{setEast(false)}
    // ±15 degree
    if (
      (pointDegree < Math.abs(compass) &&
        pointDegree + 15 > Math.abs(compass)) ||
      pointDegree > Math.abs(compass + 15) ||
      pointDegree < Math.abs(compass)
    ) {
      myPoint.style.opacity = 0;
    } else if (pointDegree) {
      myPoint.style.opacity = 1;
    }
  }

  let pointDegree;

  // function locationHandler(position) {
  //   const { latitude, longitude } = position.coords;
  //   pointDegree = calcDegreeToPoint(latitude, longitude);

  //   if (pointDegree < 0) {
  //     pointDegree = pointDegree + 360;
  //   }
  // }

  function calcDegreeToPoint(latitude, longitude) {
    // Qibla geolocation
    const point = {
      lat: 21.422487,
      lng: 39.826206
    };

    const phiK = (point.lat * Math.PI) / 180.0;
    const lambdaK = (point.lng * Math.PI) / 180.0;
    const phi = (latitude * Math.PI) / 180.0;
    const lambda = (longitude * Math.PI) / 180.0;
    const psi =
      (180.0 / Math.PI) *
      Math.atan2(
        Math.sin(lambdaK - lambda),
        Math.cos(phi) * Math.tan(phiK) -
          Math.sin(phi) * Math.cos(lambdaK - lambda)
      );
    return Math.round(psi);
  }

      return (
          <Container east={east}>
          <div class={!east? "compass" : 'compasshighlight'}>
  <div class="arrow"></div>
  <div class="compass-circle"></div>
  <div class="my-point"></div>
</div>
          <Button className="start-btn" onClick={startCompass}>Point me Home</Button>
          <Button className="start-btn" onClick={() => setEast(!east)}>test</Button>

          </Container>
      );
    }

    const Container = styled.div`
min-height: 60vh;
// background-color: ${props => props.east ? `#00ff0180` : null};

`;

const Button = styled.button`

  margin-top: 8vh;
  margin-bottom: 2vh;
  margin-left: 5vw;
  font-family: 'Times New Roman', Georgia, serif;
  width: 90vw;
  height: 6vh;
  /* line-height: 50px; */
  font-weight: bold;
  text-decoration: none;
  text-align: center;
  align-items: center;
//   color: rgb(37, 38, 51);
text-transform: uppercase;
  letter-spacing: 1px;
  /* border: 3px solid #2E6268; */
  transition: all .35s;
  justify-content: center;
  font-size: 1.3em;
  color: silver;
  background-image: url(${blueleather});
  background-position: center;
  background-repeat: no - repeat;
  background-size: cover;
  -webkit-touch-callout: none; /* iOS Safari */
-webkit-user-select: none; /* Safari */
 -khtml-user-select: none; /* Konqueror HTML */
   -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
        user-select: none; /* Non-prefixed version, currently
                              supported by Chrome, Edge, Opera and Firefox */
  &:hover {
    cursor: pointer;
  }
  `;

    export default CompassPage
