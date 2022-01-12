import React from "react";
import styled from "styled-components";
import {useNavigate} from "react-router";
import blueleather from '../blueleather.jpeg'
import scroll from '../scroll.jpeg'

function Footer({minimum, 
    maximum, 
    order, 
    setMinimum, 
    setMaximum, 
    setOrder, 
    upTo, 
    setUpTo, 
    saidAshrei, 
    setSaidAshrei, 
    isRushing, 
    setIsRushing,
    saidHallelukah1,
    saidHallelukah2,
    saidHallelukah4,
    setSaidHallelukah1,
    setSaidHallelukah2,
    setSaidHallelukah4,
    reviewingHalachot,
    setReviewingHalachot,
    viewingZmanim,
    setViewingZmanim
}) {

    let navigate = useNavigate();

    const minimumClick = () => {
      if(window.location.pathname === '/BaruchSheamar'){
        navigate('/Ashrei')
        setUpTo('Ashrei')
        window.scrollTo(0, 0)
      }else if(window.location.pathname === '/Ashrei'){
        navigate('/Yishtabach')
        setUpTo('Yishtabach')
        window.scrollTo(0, 0)
      }else if(window.location.pathname === '/Yishtabach'){
        navigate('/')
        setUpTo('start')
        setMinimum(false)
        window.scrollTo(0, 0)
      }
    }

    const maximumClick = () => {
        if(window.location.pathname === '/MizmorShir'){
          navigate('/BaruchSheamar')
          setUpTo('BaruchSheamar')
          window.scrollTo(0, 0)
        }else if(window.location.pathname === '/BaruchSheamar'){
          navigate('/HoduFull')
          setUpTo('HoduFull')
          window.scrollTo(0, 0)
        }else if(window.location.pathname === '/HoduFull'){
            navigate('/MizmorLetodah')
            setUpTo('MizmorLetodah')
            window.scrollTo(0, 0)
        }else if(window.location.pathname === '/MizmorLetodah'){
            navigate('/YehiChevod')
            setUpTo('YehiChevod')
            window.scrollTo(0, 0)
        }else if(window.location.pathname === '/YehiChevod'){
            navigate('/Ashrei')
            setUpTo('Ashrei')
            window.scrollTo(0, 0)
        }else if(window.location.pathname === '/Ashrei'){
            navigate('/Hallelukah1')
            setUpTo('Hallelukah1')
            window.scrollTo(0, 0)
        }else if(window.location.pathname === '/Hallelukah1'){
            navigate('/Hallelukah2')
            setUpTo('Hallelukah2')
            window.scrollTo(0, 0)
        }else if(window.location.pathname === '/Hallelukah2'){
            navigate('/Hallelukah3')
            setUpTo('Hallelukah3')
            window.scrollTo(0, 0)
        }else if(window.location.pathname === '/Hallelukah3'){
            navigate('/Hallelukah4')
            setUpTo('Hallelukah4')
            window.scrollTo(0, 0)
        }else if(window.location.pathname === '/Hallelukah4'){
            navigate('/Hallelukah5')
            setUpTo('Hallelukah5')
            window.scrollTo(0, 0)
        }else if(window.location.pathname === '/Hallelukah5'){
            navigate('/BaruchHashemLeolam')
            setUpTo('BaruchHashemLeolam')
            window.scrollTo(0, 0)
        }else if(window.location.pathname === '/BaruchHashemLeolam'){
            navigate('/VayevarechDavidFull')
            setUpTo('VayevarechDavidFull')
            window.scrollTo(0, 0)
        }else if(window.location.pathname === '/VayevarechDavidFull'){
            navigate('/Vecharot')
            setUpTo('Vecharot')
            window.scrollTo(0, 0)
        }else if(window.location.pathname === '/Vecharot'){
            navigate('/AzYashir')
            setUpTo('AzYashir')
            window.scrollTo(0, 0)
        }else if(window.location.pathname === '/AzYashir'){
            navigate('/Yishtabach')
            setUpTo('Yishtabach')
            window.scrollTo(0, 0)
        }else if(window.location.pathname === '/Yishtabach'){
            navigate('/')
            setUpTo('start')
            setMaximum(false)
            window.scrollTo(0, 0)
        }
      }

      const orderClick = () => {
        if(window.location.pathname === '/BaruchSheamar'){
          navigate('/Ashrei')
          setUpTo('Ashrei')
          setSaidAshrei(true)
          window.scrollTo(0, 0)
        }else if(window.location.pathname === '/Ashrei'){
            if(isRushing === true){
                navigate('/Yishtabach')
                setUpTo('Yishtabach')
                window.scrollTo(0, 0)
            }else{
          navigate('/Hallelukah5')
          setUpTo('Hallelukah5')}
          window.scrollTo(0, 0)
        }else if(window.location.pathname === '/Hallelukah5'){
            navigate('/Hallelukah3')
            setUpTo('Hallelukah3')
            window.scrollTo(0, 0)
        }else if(window.location.pathname === '/Hallelukah3'){
            navigate('/Hallelukahs')
            setUpTo('Hallelukahs')
            window.scrollTo(0, 0)
        }else if(window.location.pathname === '/Hallelukahs'){
            navigate('/Hallelukahs')
            setUpTo('Hallelukahs')
            window.scrollTo(0, 0)
            // if(saidHallelukah1 === false
            //     || saidHallelukah2 === false
            //     || saidHallelukah4 === false){
            //         alert(`Say all Hallelukah's before continuing!`)
            //     }
        }else if(window.location.pathname === '/HallelukahsDone'){
            navigate('/VayevarechDavidPrimary')
            setUpTo('VayevarechDavidPrimary')
            window.scrollTo(0, 0)
            setSaidHallelukah1(false)
            setSaidHallelukah2(false)
            setSaidHallelukah4(false)
        }else if(window.location.pathname === '/VayevarechDavidPrimary'){
            navigate('/HoduPrimary')
            setUpTo('HoduPrimary')
            window.scrollTo(0, 0)
        }else if(window.location.pathname === '/HoduPrimary'){
            navigate('/Extras')
            setUpTo('Extras')
            window.scrollTo(0, 0)
        }else if(window.location.pathname === '/Extras'){
            navigate('/Extras')
            setUpTo('Extras')
            window.scrollTo(0, 0)
        }else if(window.location.pathname === '/Yishtabach'){
            navigate('/')
            setUpTo('start')
            setOrder(false)
            setIsRushing(false)
            setSaidAshrei(false)
            window.scrollTo(0, 0)
        }
      }

      const outOfTime = () => {
          setIsRushing(true)
        if(saidAshrei === true){
            navigate('/Yishtabach')
            setUpTo('Yishtabach')
            window.scrollTo(0, 0)
      }else{
          navigate('/Ashrei')
          setUpTo('Ashrei')
          window.scrollTo(0, 0)
      }
      }

      const toHome = () => {
          navigate('/')
          window.scrollTo(0, 0)
          setReviewingHalachot(false)
          setMinimum(false)
          setMaximum(false)
          setOrder(false)
          setIsRushing(false)
          setSaidAshrei(false)
          setSaidHallelukah1(false)
          setSaidHallelukah2(false)
          setSaidHallelukah4(false)
          setViewingZmanim(false)
      }

      const goBack = () => {
          navigate(-1)
          window.scrollTo(0, 0)
      }

    return(
        <Container>
                <FooterSpace>
            {/* {minimum ? <Button onClick={minimumClick}>{window.location.pathname === '/Yishtabach' ? 'Done' : 'Next'}</Button> : null} */}
            {minimum ? (window.location.pathname === '/Yishtabach' ||
            window.location.pathname === '/' || 
            window.location.pathname === '/Zmanim' || 
            window.location.pathname === '/Halachot' ||
            window.location.pathname === '/Hallelukahs' ||
            window.location.pathname === '/Extras'
            ? null : <NextButton onClick={minimumClick}>❯</NextButton>) : null}
            
            {maximum ? (window.location.pathname === '/Yishtabach' ||
            window.location.pathname === '/' || 
            window.location.pathname === '/Zmanim' || 
            window.location.pathname === '/Halachot' ||
            window.location.pathname === '/Hallelukahs' ||
            window.location.pathname === '/Extras'
            ? null : <NextButton onClick={maximumClick}>❯</NextButton>) : null}
            
            {order ? (window.location.pathname === '/Yishtabach' ||
            window.location.pathname === '/' || 
            window.location.pathname === '/Zmanim' || 
            window.location.pathname === '/Halachot' ||
            window.location.pathname === '/Hallelukahs' ||
            window.location.pathname === '/Extras'
            ? null : <NextButton onClick={orderClick}>❯</NextButton>) : null}

            {window.location.pathname === '/' ? null : <BackButton onClick={goBack}>❮</BackButton>}

            <Buttons>
            {window.location.pathname === '/' ? null : <HomeButton onClick={toHome}>⌂</HomeButton>}
            {order === true && isRushing === false ? <Button onClick={outOfTime}>out of time</Button> : null}
            </Buttons>

            {window.location.pathname === '/' ? <Copyright>© Pesukei</Copyright> : null}
            
            </FooterSpace>
            </Container>
    )
}

const Copyright = styled.p`

background-image: url(${scroll});
background-position: center;
background-repeat: no - repeat;
background-size: cover;background-clip: text;
-webkit-background-clip: text;
color: transparent;
// text-shadow: 2px 2px 4px #000000;
-webkit-touch-callout: none; /* iOS Safari */
-webkit-user-select: none; /* Safari */
 -khtml-user-select: none; /* Konqueror HTML */
   -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
        user-select: none; /* Non-prefixed version, currently
                              supported by Chrome, Edge, Opera and Firefox */
`

const FooterSpace = styled.div`
// position: absolute;
min-height: 10vh;
//   bottom: 0;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  padding: 2vh;
//   margin-left: 30px;
//   line-height: 20%;
background-image: url(${blueleather});
background-position: center;
background-repeat: no - repeat;
background-size: cover;
// display: grid;
// grid-template-columns: 13ch auto;
`;

const Container = styled.div`
width: 100%;
//   display: grid;
//   grid-template-columns: 10px 10px 10px 10px;
//   background-color: rgb(27, 44, 77);
//   color: white;
//   border-top: 4px solid #F05A27;
  float: bottom;
//   justify-content: center;
//   align-items: center;
position: relative;
`;

const Buttons = styled.div`
// width: 100%;
  display: grid;
  grid-template-columns: 30vw 30vw;
  justify-content: center;
  align-items: center;

`;

const Button = styled.button`
  margin-top: 2vh;
  margin-bottom: 2vh;
  width: 25vw;
  height: 50px;
//   float: right;
//   margin-right: 25vw;
  border-radius: 10px;
  /* line-height: 50px; */
  font-weight: bold;
  text-decoration: none;
  text-align: center;
  align-items: center;
  color: rgb(37, 38, 51);
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all .35s;
  justify-content: center;
  font-size: 1em;
//   font-color: rgb(37, 38, 51);
//   background-image: url(https://cdn.wallpapersafari.com/92/94/3grNzW.jpg);
// background-image: url(https://t3.ftcdn.net/jpg/00/73/64/02/360_F_73640259_rnu9DOczKMEimRvZm19KGkP94Vw17zSo.jpg);
background-color: silver;
// background-color: #3D4244
-webkit-touch-callout: none; /* iOS Safari */
-webkit-user-select: none; /* Safari */
 -khtml-user-select: none; /* Konqueror HTML */
   -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
        user-select: none; /* Non-prefixed version, currently
                              supported by Chrome, Edge, Opera and Firefox */
  `;

  const HomeButton = styled.button`
  margin-top: 2vh;
  margin-bottom: 2vh;
  width: 25vw;
  height: 50px;
  border-radius: 10px;
//   margin-right: 2vw;
//   margin-left: 20vw;
  font-weight: 900;
  text-decoration: none;
  text-align: center;
  align-items: center;
  color: rgb(37, 38, 51);
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all .35s;
  justify-content: center;
  font-size: 2.5em;
//   font-color: rgb(37, 38, 51);
//   background-image: url(https://cdn.wallpapersafari.com/92/94/3grNzW.jpg);
// background-image: url(https://t3.ftcdn.net/jpg/00/73/64/02/360_F_73640259_rnu9DOczKMEimRvZm19KGkP94Vw17zSo.jpg);
background-color: silver;
// background-color: #3D4244
-webkit-touch-callout: none; /* iOS Safari */
-webkit-user-select: none; /* Safari */
 -khtml-user-select: none; /* Konqueror HTML */
   -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
        user-select: none; /* Non-prefixed version, currently
                              supported by Chrome, Edge, Opera and Firefox */
  `;

  const NextButton = styled.button`
  margin-top: 2vh;
  margin-bottom: 2vh;
  width: 50px;
  height: 50px;
  position: absolute;
  right: 0;
  border-radius: 50%;
  float: right;
  margin-right: 5vw;
  /* line-height: 50px; */
  font-weight: bold;
  text-decoration: none;
  text-align: center;
  align-items: center;
  color: rgb(37, 38, 51);
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all .35s;
  justify-content: center;
  font-size: 3vh;
//   font-color: rgb(37, 38, 51);
//   background-image: url(https://cdn.wallpapersafari.com/92/94/3grNzW.jpg);
// background-image: url(https://t3.ftcdn.net/jpg/00/73/64/02/360_F_73640259_rnu9DOczKMEimRvZm19KGkP94Vw17zSo.jpg);
background-color: silver;
// background-color: #3D4244
-webkit-touch-callout: none; /* iOS Safari */
-webkit-user-select: none; /* Safari */
 -khtml-user-select: none; /* Konqueror HTML */
   -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
        user-select: none; /* Non-prefixed version, currently
                              supported by Chrome, Edge, Opera and Firefox */
  `;

  const BackButton = styled.button`
  margin-top: 2vh;
  margin-bottom: 2vh;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  float: left;
  position: absolute;
  left: 0;
  margin-left: 5vw;
  /* line-height: 50px; */
  font-weight: bold;
  text-decoration: none;
  text-align: center;
  align-items: center;
  color: rgb(37, 38, 51);
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all .35s;
  justify-content: center;
  font-size: 3vh;
//   font-color: rgb(37, 38, 51);
//   background-image: url(https://cdn.wallpapersafari.com/92/94/3grNzW.jpg);
// background-image: url(https://t3.ftcdn.net/jpg/00/73/64/02/360_F_73640259_rnu9DOczKMEimRvZm19KGkP94Vw17zSo.jpg);
background-color: silver;
// background-color: #3D4244
-webkit-touch-callout: none; /* iOS Safari */
-webkit-user-select: none; /* Safari */
 -khtml-user-select: none; /* Konqueror HTML */
   -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
        user-select: none; /* Non-prefixed version, currently
                              supported by Chrome, Edge, Opera and Firefox */
  `;

  
export default Footer;