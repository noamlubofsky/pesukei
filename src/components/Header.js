import React from "react";
import styled from "styled-components";
import blueleather from '../blueleather.jpeg'

function Header() {
    return(
        <div>
            <Container>
            <Heading>
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
background-image: url(https://cdn.wallpapersafari.com/92/94/3grNzW.jpg);
background-clip: text;
-webkit-background-clip: text;
color: transparent;
// text-shadow: 2px 2px 4px #000000;

`;

export default Header;