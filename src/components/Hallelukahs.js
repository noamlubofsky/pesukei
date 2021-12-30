import React from "react";
import styled from "styled-components";
import {useNavigate} from "react-router";

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


    return(
        <div>
            <Container>
                        {
                saidHallelukah1 === true 
                && saidHallelukah2 === true
                && saidHallelukah4 === true
                ? <h1>done</h1>
                : <h3>All of these are of equal importance. Pick whichever you like and say however many you can.</h3>
            }
            {saidHallelukah1 ? null : <Button onClick={sayHallelukah1}>Hallelukah 1</Button>}
            {saidHallelukah2 ? null : <Button onClick={sayHallelukah2}>Hallelukah 2</Button>}
            {saidHallelukah4 ? null : <Button onClick={sayHallelukah4}>Hallelukah 4</Button>}
            </Container>
        </div>
    )
}


const Container = styled.header`
  justify-content: center;
  align-items: center;
  padding: 2vh;
  width: 100%;
`;

const Button = styled.button`

  margin-top: 2vh;
  margin-bottom: 2vh;
  width: 90vw;
  height: 12vh;
  /* line-height: 50px; */
  font-weight: bold;
  text-decoration: none;
  text-align: center;
  align-items: center;
  color: rgb(37, 38, 51);
  text-transform: uppercase;
  letter-spacing: 1px;
  /* border: 3px solid #2E6268; */
  transition: all .35s;
  justify-content: center;
  font-size: 1.5vh;
  `;

export default Extras;