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

function init() {
    startBtn.addEventListener("click", startCompass);
  }
  
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
    } else {
      window.addEventListener("deviceorientationabsolute", handler, true);
    }
  }
  
  function handler(e) {
    compass = e.webkitCompassHeading || Math.abs(e.alpha - 360);
    compassCircle.style.transform = `translate(-50%, -50%) rotate(${-compass}deg)`;
  }
  
  init();

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

function init() {
    startBtn.addEventListener("click", startCompass);
    navigator.geolocation.getCurrentPosition(locationHandler);
  }
  
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
<button class="start-btn">Start Compass</button>
</Container>
        </div>
    )
}

const Container = styled.div`
min-height: 70vh;
align-items: center;
justify-content: center;
`;

const Button = styled.button`

  margin-top: 2vh;
//   margin-left: 3vh;
  margin-bottom: 2vh;
  width: 90%;
  height: 16vh;
  /* line-height: 50px; */
  font-weight: bold;
  text-decoration: none;
  text-align: center;
  align-items: center;
//   color: rgb(37, 38, 51);
text-transform: uppercase;
letter-spacing: 1px;
transition: all .35s;
justify-content: center;
font-size: 2vh;
// border: 2px solid #F5C983;

//   background-image: url(https://media.istockphoto.com/photos/genuine-leather-texture-background-picture-id885433636?b=1&k=20&m=885433636&s=170667a&w=0&h=f0Mw8HS7Lm3ZZ7CvbSmdBO5Imn7YjPboaNaDZrFIaiQ=);
color: silver;
background-image: url(${blueleather});
background-position: center;
background-repeat: no - repeat;
background-size: cover;
&:hover {
    cursor: pointer;
  }
  `;

export default CompassPage