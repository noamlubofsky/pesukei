import React from "react";
import styled from "styled-components";

function Vecharot() {
    return(
        <div>
            <Heading>וְכָרוֹת עִמּוֹ הַבְּ֒רִית</Heading>

            <Text>
            וְכָרוֹת עִמּוֹ הַבְּ֒רִית לָתֵת אֶת־אֶרֶץ הַכְּ֒נַֽעֲנִי הַחִתִּי הָֽאֱמֹרִי וְהַפְּ֒רִזִּי וְהַיְבוּסִי וְהַגִּרְגָּשִׁי לָתֵת לְזַרְעוֹ. וַתָּקֶם אֶת־דְּבָרֶיךָ כִּי צַדִּיק אָֽתָּה. וַתֵּרֶא אֶת־עֳנִי אֲבֹתֵינוּ בְּמִצְרָיִם וְאֶת־זַֽעֲקָתָם שָׁמַעְתָּ עַל־יַם־סֽוּף. וַתִּתֵּן אֹתֹת וּמֹֽפְ֒תִים בְּפַרְעֹה וּבְכָל־עֲבָדָיו וּבְכָל־עַם אַרְצוֹ כִּי יָדַעְתָּ כִּי הֵזִידוּ עֲלֵיהֶם. וַתַּֽעַשׂ־לְךָ שֵׁם כְּהַיּוֹם הַזֶּֽה. וְהַיָּם בָּקַעְתָּ לִפְנֵיהֶם וַיַּֽעַבְרוּ בְתוֹךְ־הַיָּם בַּיַּבָּשָׁה. וְֽאֶת־רֹדְ֒פֵיהֶם הִשְׁלַכְתָּ בִמְצוֹלֹת כְּמוֹ־אֶבֶן בְּמַיִם עַזִּֽים            </Text>
        </div>
    )
}

const Heading = styled.h1`
text-align: right;
margin-right: 5vw;
font-family: 'Times New Roman', Georgia, serif;
`;

const Text = styled.div`
font-size: 30px;
text-align: right;
margin-right: 5vw;
margin-left: 2vw;
margin-bottom: 5vh;
font-family: 'Times New Roman', Georgia, serif;
`;

export default Vecharot;