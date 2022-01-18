import React, {useEffect, useState} from "react";

function CompassPage() {
  const [latitude, setLatitude] = useState('')
  const [longitude, setLongitude] = useState('')
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
  const startBtn = document.querySelector(".start-btn");
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
        <div>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <title>Document</title>
          <style dangerouslySetInnerHTML={{__html: "\n      body {\n        display: flex;\n        flex-direction: column;\n        height: 100vh;\n      }\n\n      .compass {\n        position: relative;\n        width: 320px;\n        height: 320px;\n        border-radius: 50%;\n        box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);\n        margin: auto;\n      }\n\n      .compass > .arrow {\n        position: absolute;\n        width: 0;\n        height: 0;\n        top: -20px;\n        left: 50%;\n        transform: translateX(-50%);\n        border-style: solid;\n        border-width: 30px 20px 0 20px;\n        border-color: red transparent transparent transparent;\n        z-index: 1;\n      }\n\n      .compass > .compass-circle,\n      .compass > .my-point {\n        position: absolute;\n        width: 90%;\n        height: 90%;\n        top: 50%;\n        left: 50%;\n        transform: translate(-50%, -50%);\n        transition: transform 0.1s ease-out;\n        background: url(https://purepng.com/public/uploads/large/purepng.com-compasscompassinstrumentnavigationcardinal-directionspointsdiagram-1701527842316onq7x.png)\n          center no-repeat;\n        background-size: contain;\n      }\n\n      .compass > .my-point {\n        opacity: 0;\n        width: 20%;\n        height: 20%;\n        background: rgb(8, 223, 69);\n        border-radius: 50%;\n        transition: opacity 0.5s ease-out;\n      }\n\n      .start-btn {\n        margin-bottom: auto;\n      }\n    " }} />
          <div className="compass">
            <div className="arrow" />
            <div className="compass-circle" />
            <div className="my-point" />
          </div>
          <button className="start-btn" onClick={startCompass}>Start compass</button>
        </div>
      );
    }

    export default CompassPage
