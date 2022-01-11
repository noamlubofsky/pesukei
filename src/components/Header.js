import React from "react";
import styled from "styled-components";
import blueleather from '../blueleather.jpeg'
import scroll from '../scroll.jpeg'
import { Link } from "react-router-dom";

function Header() {
    return(
        <div>
            <Container>
            <Heading as={Link} to={`/`}>
            סדר פסוקי דזמרא
            </Heading>
            </Container>
        </div>
    )
}

const Container = styled.header`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  padding: 2vh;
  min-height: 10vh;
  height: auto;
  width: 100%;
//   border-bottom: 4px solid grey;
//   background-color: rgb(37, 38, 51);
background-image: url(${blueleather});
background-position: center;
background-repeat: no - repeat;
background-size: cover;
`;

const Heading = styled.h1`
// background-image: url(https://w2.chabad.org/media/images/281/vGWn2817694.jpg);
background-image: url(${scroll});
background-position: center;
background-repeat: no - repeat;
background-size: cover;
background-clip: text;
-webkit-background-clip: text;
color: transparent;
// text-shadow: 2px 2px 4px #000000;
font-size: 2em;
font-weight: bold;

`;

export default Header;