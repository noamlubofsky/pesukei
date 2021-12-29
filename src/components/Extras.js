import React, {useState} from "react";
import styled from "styled-components";
import {useNavigate} from "react-router";

function Extras() {
    const [saidMizmorShir, setSaidMizmorShir] = useState(false)
    const [saidFullHodu, setSaidFullHodu] = useState(false)
    const [saidMizmorLetodah, setSaidMizmorLetodah] = useState(false)
    const [saidYehiChevod, setSaidYehiChevod] = useState(false)
    const [saidBaruchHashemLeolam, setSaidBaruchHashemLeolam] = useState(false)
    const [saidFullVayevarechDavid, setSaidFullVayevarechDavid] = useState(false)
    const [saidVecharot, setSaidVecharot] = useState(false)
    const [saidAzYashir, setSaidAzYashir] = useState(false)

    let navigate = useNavigate();

    const sayMizmorShir = () => {
        navigate('/MizmorShir')
        setSaidMizmorShir(true)
    }
    console.log(saidMizmorShir)

    const sayFullHodu = () => {
        navigate('/HoduRest')
        setSaidFullHodu(true)
    }

    const sayMizmorLetodah = () => {
        navigate('/MizmorLetodah')
        setSaidMizmorLetodah(true)
    }

    const sayYehiChevod = () => {
        navigate('/YehiChevod')
        setSaidYehiChevod(true)
    }

    const sayBaruchHashemLeolam = () => {
        navigate('/BaruchHashemLeolam')
        setSaidBaruchHashemLeolam(true)
    }

    const sayFullVayevarechDavid = () => {
        navigate('/VayevarechDavidRest')
        setSaidFullVayevarechDavid(true)
    }

    const sayVecharot = () => {
        navigate('/Vecharot')
        setSaidVecharot(true)
    }

    const sayAzYashir = () => {
        navigate('/AzYashir')
        setSaidAzYashir(true)
    }


    return(
        <div>
            {saidMizmorShir ? null : <button onClick={() => sayMizmorShir()}>Mizmor Shir</button>}
            {saidFullHodu ? null : <button onClick={sayFullHodu}>Rest of Hodu</button>}
            {saidMizmorLetodah ? null : <button onClick={sayMizmorLetodah}>Mizmor Letodah</button>}
            {saidYehiChevod ? null : <button onClick={sayYehiChevod}>Yehi Chevod</button>}
            {saidBaruchHashemLeolam ? null : <button onClick={sayBaruchHashemLeolam}>Baruch Hashem Leolam</button>}
            {saidFullVayevarechDavid ? null : <button onClick={sayFullVayevarechDavid}>Rest of Vayevarech David</button>}
            {saidVecharot ? null : <button onClick={sayVecharot}>Vecharot</button>}
            {saidAzYashir ? null : <button onClick={sayAzYashir}>Az Yashir</button>}
        </div>
    )
}

export default Extras;