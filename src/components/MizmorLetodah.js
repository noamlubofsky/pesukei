import React from "react";
import styled from "styled-components";

function MizmorLetodah({size}) {
    return(
        <Container>
            <Heading>מִזְמוֹר לְתוֹדָה</Heading>

            <Text fontSize={size}>
            מִזְמוֹר לְתוֹדָה הָרִֽיעוּ לַיהוָֹה כָּל־הָאָֽרֶץ: עִבְדוּ אֶת יְהֹוָה בְּשִׂמְחָה בֹּֽאוּ לְפָנָיו בִּרְנָנָה: דְּעוּ כִּי־יְהֹוָה הוּא אֱלֹהִים הוּא עָשָֽׂנוּ וְלוֹ (וְלֹא) אֲנַֽחְנוּ עַמּוֹ וְצֹאן מַרְעִיתוֹ: בֹּֽאוּ שְׁעָרָיו בְּתוֹדָה חֲצֵרֹתָיו בִּתְהִלָּה הֽוֹדוּ לוֹ בָּרְ֒כוּ שְׁמוֹ: כִּי־טוֹב יְהֹוָה לְעוֹלָם חַסְדּוֹ וְעַד־דֹּר וָדֹר אֱמוּנָתוֹ          </Text>
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
margin-right: 5vw;
margin-left: 2vw;
margin-bottom: 5vh;
font-family: 'Times New Roman', Georgia, serif;
`;

export default MizmorLetodah;