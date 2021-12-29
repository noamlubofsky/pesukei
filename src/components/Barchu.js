import React from "react";
import styled from "styled-components";

function Barchu() {
    return(
        <div>
            <Text>
            בָּרְ֒כוּ אֶת יְהֹוָה הַמְּ֒בֹרָךְ:
            בָּרוּךְ יְהֹוָה הַמְּ֒בֹרָךְ לְעוֹלָם וָעֶד:

            Join the Tzibur for ברכות קריאת שמע – שמונה עשרה
            </Text>
        </div>
    )
}

const Text = styled.div`
width: 50%;
font-size: 50px;
`;

export default Barchu;