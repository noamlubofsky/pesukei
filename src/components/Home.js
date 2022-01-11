import React from "react";
import styled from "styled-components";
import {useNavigate} from "react-router";
import blueleather from '../blueleather.jpeg'
import scroll from '../scroll.jpeg'

function Home({setMinimum, setMaximum, setOrder, upTo, setUpTo, setReviewingHalachot, setViewingZmanim}) {

    let navigate = useNavigate();

    const sayMinimum = () => {
        setMinimum(true)
        setUpTo('BaruchSheamar')
        navigate('/BaruchSheamar')
        window.scrollTo(0, 0)
    }

    const sayMaximum = () => {
        setMaximum(true)
        setUpTo('MizmorShir')
        navigate('/MizmorShir')
        window.scrollTo(0, 0)
    }

    const sayOrder = () => {
        setOrder(true)
        setUpTo('BaruchSheamar')
        navigate('/BaruchSheamar')
        window.scrollTo(0, 0)
    }

    const reviewHalachot = () => {
        setReviewingHalachot(true)
        navigate('/Halachot')
        window.scrollTo(0, 0)
    }

    const seeZmanim = () => {
        setViewingZmanim(true)
        navigate('/Zmanim')
        window.scrollTo(0, 0)
    }

    return(
        <div>
            <Container>
            <Button onClick={reviewHalachot}><Heading>Review the Halachot</Heading></Button>
            <Button onClick={sayMinimum}>
                <Heading>Minimum requirement of</Heading>
                <Heading>פסוקי דזמרא</Heading>
            </Button>
            <Button onClick={sayOrder}>
                <Heading>פסוקי דזמרא</Heading>
                <Heading>in order of importance</Heading>
            </Button>
            <Button onClick={sayMaximum}>
                <Heading>Full</Heading>
                <Heading>פסוקי דזמרא</Heading>
                </Button>
            <Button onClick={seeZmanim}>
                <Heading>Zmanim for</Heading>
                <Heading>פסוקי דזמרא</Heading>
            </Button>
            </Container>
        </div>
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

const Container = styled.div`
//   position: relative;
  justify-content: center;
  align-items: center;  
  text-align: center;
  width: 100%;
//   box-shadow: 0px 0px 5px 0px #DBDBDB;
`;


const Button = styled.button`

  margin-top: 2vh;
  margin-left: 3vh;
  margin-bottom: 2vh;
  width: 90%;
  height: 16vh;
  /* line-height: 50px; */
  font-weight: bold;
  text-decoration: none;
  text-align: center;
  align-items: center;
//   color: rgb(37, 38, 51);
text-transform: uppercase;
letter-spacing: 1px;
transition: all .35s;
justify-content: center;
font-size: 2vh;
// border: 2px solid #F5C983;

//   background-image: url(https://media.istockphoto.com/photos/genuine-leather-texture-background-picture-id885433636?b=1&k=20&m=885433636&s=170667a&w=0&h=f0Mw8HS7Lm3ZZ7CvbSmdBO5Imn7YjPboaNaDZrFIaiQ=);
color: silver;
background-image: url(${blueleather});
background-position: center;
background-repeat: no - repeat;
background-size: cover;
  `;

export default Home;