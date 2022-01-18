import React from 'react';
import styled from "styled-components";
import blueleather from '../blueleather.jpeg'

function CompassPage() {

const compassCircle = document.querySelector(".compass-circle");
const startBtn = document.querySelector(".start-btn");
const myPoint = document.querySelector(".my-point");
let compass;
const isIOS = !(
  navigator.userAgent.match(/(iPod|iPhone|iPad)/) &&
  navigator.userAgent.match(/AppleWebKit/)
);
  
  function startCompass() {
    navigator.geolocation.getCurrentPosition(locationHandler);
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
    } else {
      window.addEventListener("deviceorientationabsolute", handler, true);
    }
  }
  
//   function handler(e) {
//     compass = e.webkitCompassHeading || Math.abs(e.alpha - 360);
//     compassCircle.style.transform = `translate(-50%, -50%) rotate(${-compass}deg)`;
//   }
  
//   init();

  let pointDegree;

function locationHandler(position) {
  const { latitude, longitude } = position.coords;
  pointDegree = calcDegreeToPoint(latitude, longitude);

  if (pointDegree < 0) {
    pointDegree = pointDegree + 360;
  }
}

function calcDegreeToPoint(latitude, longitude) {
  // Qibla geolocation
  const point = {
    lat: 21.422487,
    lng: 39.826206,
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

// function init() {
//     startCompass()
//     navigator.geolocation.getCurrentPosition(locationHandler);
//   }
  
  function handler(e) {
    compass = e.webkitCompassHeading || Math.abs(e.alpha - 360);
    compassCircle.style.transform = `translate(-50%, -50%) rotate(${-compass}deg)`;
  
    // ±15 degree
    if (
      (pointDegree < Math.abs(compass) && pointDegree + 15 > Math.abs(compass)) ||
      pointDegree > Math.abs(compass + 15) ||
      pointDegree < Math.abs(compass)
    ) {
      myPoint.style.opacity = 0;
    } else if (pointDegree) {
      myPoint.style.opacity = 1;
    }
  }

    return(
        <div>
            <Container>
            <div class="compass">
  <div class="arrow"></div>
  <div class="compass-circle"></div>
  <div class="my-point"></div>
</div>
<Button onClick={startCompass()}>Start Compass</Button>
</Container>
        </div>
    )
}

const Button = styled.button`

  margin-top: 5vh;
  margin-bottom: 2vh;
  margin-left: 4vw;
  font-family: 'Times New Roman', Georgia, serif;
  width: 90vw;
  height: 6vh;
  /* line-height: 50px; */
  font-weight: bold;
  text-decoration: none;
  text-align: center;
  align-items: center;
//   color: rgb(37, 38, 51);
  letter-spacing: 1px;
  /* border: 3px solid #2E6268; */
  transition: all .35s;
  justify-content: center;
  font-size: 3vh;
  color: silver;
  background-image: url(${blueleather});
  background-position: center;
  background-repeat: no - repeat;
  background-size: cover;
  &:hover {
    cursor: pointer;
  }
  `;

const Container = styled.div`
min-height: 60vh;
`;

export default CompassPage