import React from "react";
import styled from "styled-components";
import {useNavigate} from "react-router";

function Home({setMinimum, setMaximum, setOrder, upTo, setUpTo}) {

    let navigate = useNavigate();

    const sayMinimum = () => {
        setMinimum(true)
        setUpTo('BaruchSheamar')
        navigate('/BaruchSheamar')
    }

    const sayMaximum = () => {
        setMaximum(true)
        setUpTo('MizmorShir')
        navigate('/MizmorShir')
    }

    const sayOrder = () => {
        setOrder(true)
        setUpTo('BaruchSheamar')
        navigate('/BaruchSheamar')
    }

    return(
        <div>
            <Container>
            <Button >Review the Halachot</Button>
            <Button onClick={sayMinimum}>I only have time to say the minimum amount of Pesukei D'zimra</Button>
            <Button onClick={sayMaximum}>I have time to say all of Pesukei D'zimra</Button>
            <Button onClick={sayOrder}>I don't know how much I'll be able to say</Button>
            </Container>
        </div>
    )
}

const Container = styled.div`
  position: relative;
  align-items: center;
  text-align: center;
  box-shadow: 0px 0px 5px 0px #DBDBDB;
  &::-webkit-scrollbar {
      width: 10px;
  }
`;


const Button = styled.button`

  margin-top: 2vh;
  margin-bottom: 2vh;
  width: 90vw;
  height: 16vh;
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

export default Home;