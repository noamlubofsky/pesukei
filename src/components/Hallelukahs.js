import React from "react";
import styled from "styled-components";
import {useNavigate} from "react-router";
import blueleather from '../blueleather.jpeg'

function Extras({
saidHallelukah1
,saidHallelukah2
,saidHallelukah4
,setSaidHallelukah1
,setSaidHallelukah2
,setSaidHallelukah4
,setUpTo}) {

    let navigate = useNavigate();

    const sayHallelukah1 = () => {
        navigate('/Hallelukah1')
        setSaidHallelukah1(true) 
        if (saidHallelukah2 === true 
        && saidHallelukah4 === true)(
        setUpTo('HallelukahsDone'))
    }

    const sayHallelukah2 = () => {
        navigate('/Hallelukah2')
        setSaidHallelukah2(true)
        if (saidHallelukah1 === true 
            && saidHallelukah4 === true)(
            setUpTo('HallelukahsDone'))
    }

    const sayHallelukah4 = () => {
        navigate('/Hallelukah4')
        setSaidHallelukah4(true)
        if (saidHallelukah1 === true 
            && saidHallelukah2 === true)(
            setUpTo('HallelukahsDone'))
    }

    const reset = () => {
        setSaidHallelukah1(false)
        setSaidHallelukah2(false)
        setSaidHallelukah4(false)
        setUpTo('Hallelukahs')
    }


    return(
        <div>
            <Container>
                        {
                saidHallelukah1 === true 
                && saidHallelukah2 === true
                && saidHallelukah4 === true
                ? 
                <div>
                <h3>You said all 5 Hallelukah's</h3>
                <h3>Missed one?</h3>
                <Button onClick={reset}>Reset Hallelukah's</Button>
                </div>

                : <h3>Hallelukah's 1, 2 and 4 are of equal importance. Pick whichever you like and say however many you can.</h3>
            }
            {saidHallelukah1 ? null : <Button onClick={sayHallelukah1}>1 הַלְ֒לוּיָהּ</Button>}
            {saidHallelukah2 ? null : <Button onClick={sayHallelukah2}>2 הַלְ֒לוּיָהּ</Button>}
            {saidHallelukah4 ? null : <Button onClick={sayHallelukah4}>4 הַלְ֒לוּיָהּ</Button>}
            </Container>
        </div>
    )
}


const Container = styled.header`
  justify-content: center;
  align-items: center;
  padding: 2vh;
  width: 100%;
  min-height: 40vh;
  margin-bottom: 25vh;

`;

const Button = styled.button`

  margin-top: 2vh;
  margin-bottom: 2vh;
  font-family: 'Times New Roman', Georgia, serif;
  width: 90vw;
  height: 12vh;
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

export default Extras;