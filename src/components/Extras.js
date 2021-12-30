import React from "react";
import styled from "styled-components";
import {useNavigate} from "react-router";

function Extras({
saidMizmorShir
,saidFullHodu
,saidMizmorLetodah
,saidYehiChevod
,saidBaruchHashemLeolam
,saidFullVayevarechDavid
,saidVecharot
,saidAzYashir
,setSaidMizmorShir
,setSaidFullHodu
,setSaidMizmorLetodah
,setSaidYehiChevod
,setSaidBaruchHashemLeolam
,setSaidFullVayevarechDavid
,setSaidVecharot
,setSaidAzYashir
,setUpTo}) {

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

    const sayYishtabach = () => {
        navigate('/Yishtabach')
        setUpTo('Yishtabach')
    }


    return(
        <div>
                        {
                saidMizmorShir === true 
                && saidFullHodu === true
                && saidMizmorLetodah === true
                && saidYehiChevod === true
                && saidBaruchHashemLeolam === true
                && saidFullVayevarechDavid === true
                && saidVecharot === true
                && saidAzYashir === true
                ? <button onClick={sayYishtabach}>Yishtabach</button>
                : <h3>All of these are of equal importance. Pick whichever you like and say however many you can.</h3>
            }
            {saidMizmorShir ? null : <button onClick={sayMizmorShir}>Mizmor Shir</button>}
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