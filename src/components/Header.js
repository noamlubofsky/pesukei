import React from "react";
import styled from "styled-components";

function Header() {
    return(
        <div>
            <Container>
            <Heading>
            <h1>פסוקי דזמרא</h1>
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
  border-bottom: 4px solid grey;
  background-color: rgb(37, 38, 51);
`;

const Heading = styled.header`
align-items: right;
justify-content: right;
float: right;
margin-right: 5vw;
`;

export default Header;