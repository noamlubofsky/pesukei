import React from "react";
import styled from "styled-components";

function Barchu({size}) {
    return(
        <div>
            <Text fontSize={size}>
            בָּרְ֒כוּ אֶת יְהֹוָה הַמְּ֒בֹרָךְ:
            בָּרוּךְ יְהֹוָה הַמְּ֒בֹרָךְ לְעוֹלָם וָעֶד:

            Join the Tzibur for ברכות קריאת שמע – שמונה עשרה
            </Text>
        </div>
    )
}

const Text = styled.div`
font-size: 30px;
text-align: right;
margin-right: 2vw;
margin-left: 2vw;
margin-bottom: 5vh;
`;

export default Barchu;