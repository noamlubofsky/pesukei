import React from "react";
import styled from "styled-components";
import {useNavigate} from "react-router";

function Home({setMinimum, setMaximum, setOrder, upTo, setUpTo, setReviewingHalachot}) {

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

    const reviewHalachot = () => {
        setReviewingHalachot(true)
        navigate('/Halachot')
    }

    return(
        <div>
            <Container>
            <Button onClick={reviewHalachot}><Heading>Review the Halachot</Heading></Button>
            <Button onClick={sayMinimum}><Heading>I only have time to say the minimum amount פסוקי דזמרא</Heading></Button>
            <Button onClick={sayOrder}><Heading>I don't know how much of פסוקי דזמרא I'll be able to say</Heading></Button>
            <Button onClick={sayMaximum}><Heading>I have time to say all of פסוקי דזמרא</Heading></Button>
            </Container>
        </div>
    )
}

const Heading = styled.h3`
// background-image: url(https://w2.chabad.org/media/images/281/vGWn2817694.jpg);
background-image: url(https://cdn.wallpapersafari.com/92/94/3grNzW.jpg);
background-clip: text;
-webkit-background-clip: text;
color: transparent;
// text-shadow: 2px 2px 4px #000000;

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
background-image: url( https://media.istockphoto.com/photos/dark-blue-leather-texture-on-macro-blue-leather-background-picture-id1148387834?b=1&k=20&m=1148387834&s=170667a&w=0&h=tUrUhDjNf_LUvdAslD2fWi8eCk70alMrp-L4ukx3kws=);

  `;

export default Home;