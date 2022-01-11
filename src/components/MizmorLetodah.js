import React from "react";
import styled from "styled-components";

function MizmorLetodah() {
    return(
        <div>
            <Heading>מִזְמוֹר לְתוֹדָה</Heading>

            <Text>
            מִזְמוֹר לְתוֹדָה הָרִֽיעוּ לַיהוָֹה כָּל־הָאָֽרֶץ: עִבְדוּ אֶת יְהֹוָה בְּשִׂמְחָה בֹּֽאוּ לְפָנָיו בִּרְנָנָה: דְּעוּ כִּי־יְהֹוָה הוּא אֱלֹהִים הוּא עָשָֽׂנוּ וְלוֹ (וְלֹא) אֲנַֽחְנוּ עַמּוֹ וְצֹאן מַרְעִיתוֹ: בֹּֽאוּ שְׁעָרָיו בְּתוֹדָה חֲצֵרֹתָיו בִּתְהִלָּה הֽוֹדוּ לוֹ בָּרְ֒כוּ שְׁמוֹ: כִּי־טוֹב יְהֹוָה לְעוֹלָם חַסְדּוֹ וְעַד־דֹּר וָדֹר אֱמוּנָתוֹ          </Text>
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

export default MizmorLetodah;