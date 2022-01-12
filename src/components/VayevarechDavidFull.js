import React from "react";
import styled from "styled-components";

function VayevarechDavidFull({size}) {
    return(
        <Container>
            <Heading>וַיְבָֽרֶךְ דָּוִיד</Heading>

            <Text fontSize={size}>
            וַיְבָֽרֶךְ דָּוִיד אֶת־יְהֹוָה לְעֵינֵי כָּל־הַקָּהָל וַיֹּֽאמֶר דָּוִיד בָּרוּךְ אַתָּה יְהֹוָה אֱלֹהֵי יִשְׂרָאֵל אָבִֽינוּ, מֵעוֹלָם וְעַד־עוֹלָם: לְךָ יְהֹוָה הַגְּ֒דֻלָּה וְהַגְּ֒בוּרָה וְהַתִּפְאֶֽרֶת וְהַנֵּֽצַח וְהַהוֹד כִּי־כֹל בַּשָּׁמַֽיִם וּבָאָֽרֶץ לְךָ יְהֹוָה הַמַּמְלָכָה וְהַמִּתְנַשֵּׂא לְכֹל לְרֹאשׁ: וְהָעֽשֶׁר וְהַכָּבוֹד מִלְּ֒פָנֶֽיךָ וְאַתָּה מוֹשֵׁל בַּכֹּל, וּבְיָדְ֒ךָ כֹּֽחַ וּגְבוּרָה, וּבְיָדְ֒ךָ לְגַדֵּל וּלְחַזֵּק לַכֹּל: וְעַתָּה אֱלֹהֵֽינוּ מוֹדִים אֲנַֽחְנוּ לָךְ וּמְהַלְלִים לְשֵׁם תִּפְאַרְתֶּֽךָ
            </Text>
            <Text fontSize={size}>
            אַתָּה־הוּא יְהֹוָה לְבַדֶּֽךָ, אַתָּה עָשִֽׂיתָ אֶת־הַשָּׁמַֽיִם שְׁמֵי הַשָּׁמַֽיִם וְכָל־צְבָאָם, הָאָֽרֶץ וְכָל־אֲשֶׁר עָלֶֽיהָ הַיַּמִּים וְכָל־אֲשֶׁר בָּהֶם, וְאַתָּה מְחַיֶּה אֶת־כֻּלָּם וּצְבָא הַשָּׁמַֽיִם לְךָ מִשְׁתַּחֲוִים: אַתָּה הוּא יְהֹוָה הָאֱלֹהִים אֲשֶׁר בָּחַֽרְתָּ בְּאַבְרָם וְהוֹצֵאתוֹ מֵאוּר כַּשְׂדִּים וְשַֽׂמְתָּ שְׁמוֹ אַבְרָהָם: וּמָצָֽאתָ אֶת־לְבָבוֹ נֶאֱמָן לְפָנֶֽיךָ        
            </Text>
        </Container>
    )
}

const Container = styled.div`
min-height: 64vh;
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

export default VayevarechDavidFull;