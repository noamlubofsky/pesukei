import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function NavBar() {
    return(
        <div>
            <Container>
            <NavButton as={Link} to={`/`}>
                Prospects
            </NavButton>

            <NavButton as={Link} to={`/companiespage`}>
                Companies
            </NavButton>

            <HomeButton as={Link} to={`/`}>
                CRM Sales Funnel
            </HomeButton>
            </Container>
        </div>
    )
}

export default NavBar;