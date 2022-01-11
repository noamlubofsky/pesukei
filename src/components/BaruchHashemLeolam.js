import React from "react";
import styled from "styled-components";

function BaruchHashemLeolam({size}) {
    return(
        <Container>
            <Heading>בָּרוּךְ ה' לְעוֹלָם</Heading>
            <Text fontSize={size}>
            בָּרוּךְ יְהֹוָה לְעוֹלָם אָמֵן וְאָמֵן: בָּרוּךְ יְהֹוָה מִצִּיּוֹן שֹׁכֵן יְרוּשָׁלָֽםִ הַלְ֒לוּיָהּ: בָּרוּךְ יְהֹוָה אֱלֹהִים אֱלֹהֵי יִשְׂרָאֵל עֹשֵׂה נִפְלָאוֹת לְבַדּוֹ: וּבָרוּךְ שֵׁם כְּבוֹדוֹ לְעוֹלָם וְיִמָּלֵא כְבוֹדוֹ אֶת־כָּל־הָאָֽרֶץ אָמֵן וְאָמֵן      
            </Text>
        </Container>
    )
}

const Container = styled.div`
min-height: 50vh;
`;

const Heading = styled.h1`
text-align: right;
margin-right: 5vw;
font-family: 'Times New Roman', Georgia, serif;
`;

const Text = styled.div`
font-size: ${props => props.fontSize}px;
text-align: right;
margin-right: 0vw;
margin-left: 2vw;
margin-bottom: 5vh;
font-family: 'Times New Roman', Georgia, serif;
`;

export default BaruchHashemLeolam;