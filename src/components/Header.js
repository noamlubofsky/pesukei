import React from "react";
import styled from "styled-components";
import blueleather from '../blueleather.jpeg'
import scroll from '../scroll.jpeg'

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
font-family: 'Times New Roman', Georgia, serif;
// background-image: url(https://w2.chabad.org/media/images/281/vGWn2817694.jpg);
background-image: url(${scroll});
background-position: center;
background-repeat: no - repeat;
background-size: cover;
background-clip: text;
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

export default Header;