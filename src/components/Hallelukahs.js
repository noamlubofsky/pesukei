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
                        {
                saidHallelukah1 === true 
                && saidHallelukah2 === true
                && saidHallelukah4 === true
                ? <h1>done</h1>
                : <h3>All of these are of equal importance. Pick whichever you like and say however many you can.</h3>
            }
            {saidHallelukah1 ? null : <button onClick={sayHallelukah1}>Hallelukah 1</button>}
            {saidHallelukah2 ? null : <button onClick={sayHallelukah2}>Hallelukah 2</button>}
            {saidHallelukah4 ? null : <button onClick={sayHallelukah4}>Hallelukah 4</button>}
        </div>
    )
}

export default Extras;