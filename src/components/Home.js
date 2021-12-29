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
            <button onClick={sayMinimum}>I only have time to say the minimum amount of Pesukei D'zimra</button>
            <button onClick={sayMaximum}>I have time to say all of Pesukei D'zimra</button>
            <button onClick={sayOrder}>I don't know how much I'll be able to say</button>
        </div>
    )
}

export default Home;