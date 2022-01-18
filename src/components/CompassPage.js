import React from "react";


 function CompassPage() {
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
          <button className="start-btn">Start compass</button>
        </div>
      );
    }

    export default CompassPage
