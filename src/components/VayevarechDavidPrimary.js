import React from "react";
import styled from "styled-components";

function VayevarechDavidPrimary() {
    return(
        <div>
            <Heading>וַיְבָֽרֶךְ דָּוִיד</Heading>
            <Heading>(until תִּפְאַרְתֶּֽךָ)</Heading>

            <Text>
            וַיְבָֽרֶךְ דָּוִיד אֶת־יְהֹוָה לְעֵינֵי כָּל־הַקָּהָל וַיֹּֽאמֶר דָּוִיד בָּרוּךְ אַתָּה יְהֹוָה אֱלֹהֵי יִשְׂרָאֵל אָבִֽינוּ, מֵעוֹלָם וְעַד־עוֹלָם: לְךָ יְהֹוָה הַגְּ֒דֻלָּה וְהַגְּ֒בוּרָה וְהַתִּפְאֶֽרֶת וְהַנֵּֽצַח וְהַהוֹד כִּי־כֹל בַּשָּׁמַֽיִם וּבָאָֽרֶץ לְךָ יְהֹוָה הַמַּמְלָכָה וְהַמִּתְנַשֵּׂא לְכֹל לְרֹאשׁ: וְהָעֽשֶׁר וְהַכָּבוֹד מִלְּ֒פָנֶֽיךָ וְאַתָּה מוֹשֵׁל בַּכֹּל, וּבְיָדְ֒ךָ כֹּֽחַ וּגְבוּרָה, וּבְיָדְ֒ךָ לְגַדֵּל וּלְחַזֵּק לַכֹּל: וְעַתָּה אֱלֹהֵֽינוּ מוֹדִים אֲנַֽחְנוּ לָךְ וּמְהַלְלִים לְשֵׁם תִּפְאַרְתֶּֽךָ:            </Text>
        </div>
    )
}

const Heading = styled.h1`
// margin-left: 40vw;
`;

const Text = styled.div`
font-size: 30px;
text-align: right;
margin-right: 2vw;
margin-left: 2vw;
`;

export default VayevarechDavidPrimary;