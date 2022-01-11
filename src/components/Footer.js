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
      if(upTo === 'BaruchSheamar'){
        navigate('/Ashrei')
        setUpTo('Ashrei')
        window.scrollTo(0, 0)
      }else if(upTo === 'Ashrei'){
        navigate('/Yishtabach')
        setUpTo('Yishtabach')
        window.scrollTo(0, 0)
      }else if(upTo === 'Yishtabach'){
        navigate('/')
        setUpTo('start')
        setMinimum(false)
        window.scrollTo(0, 0)
      }
    }

    const maximumClick = () => {
        if(upTo === 'MizmorShir'){
          navigate('/BaruchSheamar')
          setUpTo('BaruchSheamar')
          window.scrollTo(0, 0)
        }else if(upTo === 'BaruchSheamar'){
          navigate('/HoduFull')
          setUpTo('HoduFull')
          window.scrollTo(0, 0)
        }else if(upTo === 'HoduFull'){
            navigate('/MizmorLetodah')
            setUpTo('MizmorLetodah')
            window.scrollTo(0, 0)
        }else if(upTo === 'MizmorLetodah'){
            navigate('/YehiChevod')
            setUpTo('YehiChevod')
            window.scrollTo(0, 0)
        }else if(upTo === 'YehiChevod'){
            navigate('/Ashrei')
            setUpTo('Ashrei')
            window.scrollTo(0, 0)
        }else if(upTo === 'Ashrei'){
            navigate('/Hallelukah1')
            setUpTo('Hallelukah1')
            window.scrollTo(0, 0)
        }else if(upTo === 'Hallelukah1'){
            navigate('/Hallelukah2')
            setUpTo('Hallelukah2')
            window.scrollTo(0, 0)
        }else if(upTo === 'Hallelukah2'){
            navigate('/Hallelukah3')
            setUpTo('Hallelukah3')
            window.scrollTo(0, 0)
        }else if(upTo === 'Hallelukah3'){
            navigate('/Hallelukah4')
            setUpTo('Hallelukah4')
            window.scrollTo(0, 0)
        }else if(upTo === 'Hallelukah4'){
            navigate('/Hallelukah5')
            setUpTo('Hallelukah5')
            window.scrollTo(0, 0)
        }else if(upTo === 'Hallelukah5'){
            navigate('/BaruchHashemLeolam')
            setUpTo('BaruchHashemLeolam')
            window.scrollTo(0, 0)
        }else if(upTo === 'BaruchHashemLeolam'){
            navigate('/VayevarechDavidFull')
            setUpTo('VayevarechDavidFull')
            window.scrollTo(0, 0)
        }else if(upTo === 'VayevarechDavidFull'){
            navigate('/Vecharot')
            setUpTo('Vecharot')
            window.scrollTo(0, 0)
        }else if(upTo === 'Vecharot'){
            navigate('/AzYashir')
            setUpTo('AzYashir')
            window.scrollTo(0, 0)
        }else if(upTo === 'AzYashir'){
            navigate('/Yishtabach')
            setUpTo('Yishtabach')
            window.scrollTo(0, 0)
        }else if(upTo === 'Yishtabach'){
            navigate('/')
            setUpTo('start')
            setMaximum(false)
            window.scrollTo(0, 0)
        }
      }

      const orderClick = () => {
        if(upTo === 'BaruchSheamar'){
          navigate('/Ashrei')
          setUpTo('Ashrei')
          setSaidAshrei(true)
          window.scrollTo(0, 0)
        }else if(upTo === 'Ashrei'){
            if(isRushing === true){
                navigate('/Yishtabach')
                setUpTo('Yishtabach')
                window.scrollTo(0, 0)
            }else{
          navigate('/Hallelukah5')
          setUpTo('Hallelukah5')}
          window.scrollTo(0, 0)
        }else if(upTo === 'Hallelukah5'){
            navigate('/Hallelukah3')
            setUpTo('Hallelukah3')
            window.scrollTo(0, 0)
        }else if(upTo === 'Hallelukah3'){
            navigate('/Hallelukahs')
            setUpTo('Hallelukahs')
            window.scrollTo(0, 0)
        }else if(upTo === 'Hallelukahs'){
            navigate('/Hallelukahs')
            setUpTo('Hallelukahs')
            window.scrollTo(0, 0)
            // if(saidHallelukah1 === false
            //     || saidHallelukah2 === false
            //     || saidHallelukah4 === false){
            //         alert(`Say all Hallelukah's before continuing!`)
            //     }
        }else if(upTo === 'HallelukahsDone'){
            navigate('/VayevarechDavidPrimary')
            setUpTo('VayevarechDavidPrimary')
            window.scrollTo(0, 0)
            setSaidHallelukah1(false)
            setSaidHallelukah2(false)
            setSaidHallelukah4(false)
        }else if(upTo === 'VayevarechDavidPrimary'){
            navigate('/HoduPrimary')
            setUpTo('HoduPrimary')
            window.scrollTo(0, 0)
        }else if(upTo === 'HoduPrimary'){
            navigate('/Extras')
            setUpTo('Extras')
            window.scrollTo(0, 0)
        }else if(upTo === 'Extras'){
            navigate('/Extras')
            setUpTo('Extras')
            window.scrollTo(0, 0)
        }else if(upTo === 'Yishtabach'){
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

    return(
        <Container>
                <FooterSpace>
            {/* {minimum ? <Button onClick={minimumClick}>{upTo === 'Yishtabach' ? 'Done' : 'Next'}</Button> : null} */}
            {minimum ? (upTo === 'Yishtabach' ? null : <Button onClick={minimumClick}><Heading>Next</Heading></Button>) : null}
            {/* {maximum ? <Button onClick={maximumClick}>{upTo === 'Yishtabach' ? 'Done' : '<Heading>Next</Heading>'}</Button> : null} */}
            {maximum ? (upTo === 'Yishtabach' ? null : <Button onClick={maximumClick}><Heading>Next</Heading></Button>) : null}
            {/* {order ? <Button onClick={orderClick}>{upTo === 'Yishtabach' ? 'Done' : 'Keep Going'}</Button> : null} */}
            {order ? (upTo === 'Yishtabach' ? null : <Button onClick={orderClick}><Heading>Next</Heading></Button>) : null}
            {order === true && isRushing === false ? <Button onClick={outOfTime}><Heading>I'm out of time</Heading></Button> : null}
            {window.location.pathname === '/' ? <Copyright>© Pesukei</Copyright> : <Button onClick={toHome}><Heading>Home</Heading></Button>}
            
            </FooterSpace>
            </Container>
    )
}

const Heading = styled.h3`
// background-image: url(https://w2.chabad.org/media/images/281/vGWn2817694.jpg);
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
`;

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
// min-height: 10vh;
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
background-size: cover;`;

const Container = styled.div`
width: 100%;
//   display: grid;
//   grid-template-columns: 1fr;
//   background-color: rgb(27, 44, 77);
//   color: white;
//   border-top: 4px solid #F05A27;
  float: bottom;
//   justify-content: center;
//   align-items: center;
position: relative;
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
  transition: all .35s;
  justify-content: center;
  font-size: 3vh;
//   font-color: rgb(37, 38, 51);
//   background-image: url(https://cdn.wallpapersafari.com/92/94/3grNzW.jpg);
// background-image: url(https://t3.ftcdn.net/jpg/00/73/64/02/360_F_73640259_rnu9DOczKMEimRvZm19KGkP94Vw17zSo.jpg);
background-color: silver;
-webkit-touch-callout: none; /* iOS Safari */
-webkit-user-select: none; /* Safari */
 -khtml-user-select: none; /* Konqueror HTML */
   -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
        user-select: none; /* Non-prefixed version, currently
                              supported by Chrome, Edge, Opera and Firefox */
  `;

export default Footer;