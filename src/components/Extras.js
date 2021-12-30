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
            <Container>
                        {
                saidMizmorShir === true 
                && saidFullHodu === true
                && saidMizmorLetodah === true
                && saidYehiChevod === true
                && saidBaruchHashemLeolam === true
                && saidFullVayevarechDavid === true
                && saidVecharot === true
                && saidAzYashir === true
                ? <Button onClick={sayYishtabach}>Yishtabach</Button>
                : <h3>All of these are of equal importance. Pick whichever you like and say however many you can.</h3>
            }
            {saidMizmorShir ? null : <Button onClick={sayMizmorShir}>Mizmor Shir</Button>}
            {saidFullHodu ? null : <Button onClick={sayFullHodu}>Rest of Hodu</Button>}
            {saidMizmorLetodah ? null : <Button onClick={sayMizmorLetodah}>Mizmor Letodah</Button>}
            {saidYehiChevod ? null : <Button onClick={sayYehiChevod}>Yehi Chevod</Button>}
            {saidBaruchHashemLeolam ? null : <Button onClick={sayBaruchHashemLeolam}>Baruch Hashem Leolam</Button>}
            {saidFullVayevarechDavid ? null : <Button onClick={sayFullVayevarechDavid}>Rest of Vayevarech David</Button>}
            {saidVecharot ? null : <Button onClick={sayVecharot}>Vecharot</Button>}
            {saidAzYashir ? null : <Button onClick={sayAzYashir}>Az Yashir</Button>}
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
  height: 6vh;
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