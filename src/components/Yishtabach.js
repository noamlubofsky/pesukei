import React from "react";
import styled from "styled-components";

function Yishtabach({size}) {
    return(
        <Container>
            <Heading>יִשְׁתַּבַּח</Heading>

            <Text fontSize={size}>
            יִשְׁתַּבַּח שִׁמְךָ לָעַד מַלְכֵּנוּ. הָאֵל הַמֶּֽלֶךְ הַגָּדוֹל וְהַקָּדוֹשׁ בַּשָּׁמַֽיִם וּבָאָֽרֶץ. כִּי לְךָ נָאֶה יְהֹוָה אֱלֹהֵֽינוּ וֵאלֹהֵי אֲבוֹתֵֽינוּ. שִׁיר וּשְׁבָחָה הַלֵּל וְזִמְרָה. עֹז וּמֶמְשָׁלָה. נֶֽצַח גְּדֻלָּה וּגְבוּרָה. תְּהִלָּה וְתִפְאֶֽרֶת. קְדֻשָּׁה וּמַלְכוּת. בְּרָכוֹת וְהוֹדָאוֹת מֵעַתָּה וְעַד־עוֹלָם. בָּרוּךְ אַתָּה יְהֹוָה אֵל מֶֽלֶךְ גָּדוֹל בַּתִּשְׁבָּחוֹת. אֵל הַהוֹדָאוֹת אֲדוֹן הַנִּפְלָאוֹת הַבּוֹחֵר בְּשִׁירֵי זִמְרָה. מֶֽלֶךְ אֵל חֵי הָעוֹלָמִים           
            </Text>
        </Container>
    )
}

const Container = styled.div`
min-height: 72vh;
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

export default Yishtabach;