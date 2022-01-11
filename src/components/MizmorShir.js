import React from "react";
import styled from "styled-components";

function MizmorShir({size}) {
    return(
        <Container>
            <Heading>מִזְמוֹר שִׁיר</Heading>

            <Text fontSize={size}>
מִזְמוֹר שִׁיר־חֲנֻכַּת הַבַּֽיִת לְדָוִד: אֲרוֹמִמְךָ יְהֹוָה כִּי דִלִּיתָֽנִי וְלֹא־שִׂמַּֽחְתָּ אֹיְ֒בַי לִי: יְהֹוָה אֱלֹהָי שִׁוַּעְתִּי אֵלֶֽיךָ וַתִּרְפָּאֵֽנִי: יְהֹוָה הֶעֱלִֽיתָ מִן־שְׁאוֹל נַפְשִׁי חִיִּיתַֽנִי מִיָּרְ֒דִי־בוֹר: זַמְּ֒רוּ לַיהוָֹה חֲסִידָיו וְהוֹדוּ לְזֵֽכֶר קָדְשׁוֹ: כִּי רֶֽגַע בְּאַפּוֹ חַיִּים בִּרְצוֹנוֹ בָּעֶֽרֶב יָלִין בֶּֽכִי וְלַבֹּֽקֶר רִנָּה: וַאֲנִי אָמַֽרְתִּי בְשַׁלְוִי בַּל־אֶמּוֹט לְעוֹלָם: יְהֹוָה בִּרְצוֹנְ֒ךָ הֶעֱמַֽדְתָּה לְהַרְרִי עֹז הִסְתַּֽרְתָּ פָנֶֽיךָ הָיִֽיתִי נִבְהָל: אֵלֶֽיךָ יְהֹוָה אֶקְרָא וְאֶל־אֲדֹנָי אֶתְחַנָּן: מַה־בֶּֽצַע בְּדָמִי בְּרִדְתִּי אֶל שָֽׁחַת הֲיוֹדְ֒ךָ עָפָר הֲיַגִּיד אֲמִתֶּֽךָ: שְׁמַע יְהֹוָה וְחָנֵּֽנִי יְהֹוָה הֱיֵה־עֹזֵר לִי: הָפַֽכְתָּ מִסְפְּדִי לְמָחוֹל לִי פִּתַּחְתָּ שַׂקִּי וַתְּ֒אַזְּ֒רֵֽנִי שִׂמְחָה: לְמַֽעַן יְזַמֶּרְךָ כָבוֹד וְלֹא יִדֹּם יְהֹוָה אֱלֹהַי לְעוֹלָם אוֹדֶֽךָּ
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

export default MizmorShir;