import React from "react";
import styled from "styled-components";

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
background-image: url( https://media.istockphoto.com/photos/dark-blue-leather-texture-on-macro-blue-leather-background-picture-id1148387834?b=1&k=20&m=1148387834&s=170667a&w=0&h=tUrUhDjNf_LUvdAslD2fWi8eCk70alMrp-L4ukx3kws=);

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