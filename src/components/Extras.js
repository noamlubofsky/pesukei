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
                : <h3>The following Tefillot are of equal importance. Pick whichever you like and say however many you can.</h3>
            }
            {saidMizmorShir ? null : <Button onClick={sayMizmorShir}>מִזְמוֹר שִׁיר</Button>}
            {saidFullHodu ? null : <Button onClick={sayFullHodu}>Rest of הוֹדוּ</Button>}
            {saidMizmorLetodah ? null : <Button onClick={sayMizmorLetodah}>מִזְמוֹר לְתוֹדָה</Button>}
            {saidYehiChevod ? null : <Button onClick={sayYehiChevod}>יְהִי כְבוֹד</Button>}
            {saidBaruchHashemLeolam ? null : <Button onClick={sayBaruchHashemLeolam}>בָּרוּךְ ה' לְעוֹלָם</Button>}
            {saidFullVayevarechDavid ? null : <Button onClick={sayFullVayevarechDavid}>Rest of וַיְבָֽרֶךְ דָּוִיד</Button>}
            {saidVecharot ? null : <Button onClick={sayVecharot}>וְכָרוֹת עִמּוֹ הַבְּ֒רִית</Button>}
            {saidAzYashir ? null : <Button onClick={sayAzYashir}>אָז יָשִׁיר</Button>}
            </Container>
        </div>
    )
}

const Container = styled.header`
  justify-content: center;
  align-items: center;
  padding: 2vh;
  width: 100%;
  min-height: 30vh;
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
//   color: rgb(37, 38, 51);
  letter-spacing: 1px;
  /* border: 3px solid #2E6268; */
  transition: all .35s;
  justify-content: center;
  font-size: 3vh;
  color: silver;
background-image: url( https://media.istockphoto.com/photos/dark-blue-leather-texture-on-macro-blue-leather-background-picture-id1148387834?b=1&k=20&m=1148387834&s=170667a&w=0&h=tUrUhDjNf_LUvdAslD2fWi8eCk70alMrp-L4ukx3kws=);

  `;

export default Extras;