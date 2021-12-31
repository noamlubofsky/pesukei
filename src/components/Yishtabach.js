import React from "react";
import styled from "styled-components";

function Yishtabach() {
    return(
        <div>
                        <Heading>יִשְׁתַּבַּח</Heading>

            <Text>
            יִשְׁתַּבַּח שִׁמְךָ לָעַד מַלְכֵּנוּ. הָאֵל הַמֶּֽלֶךְ הַגָּדוֹל וְהַקָּדוֹשׁ בַּשָּׁמַֽיִם וּבָאָֽרֶץ. כִּי לְךָ נָאֶה יְהֹוָה אֱלֹהֵֽינוּ וֵאלֹהֵי אֲבוֹתֵֽינוּ. שִׁיר וּשְׁבָחָה הַלֵּל וְזִמְרָה. עֹז וּמֶמְשָׁלָה. נֶֽצַח גְּדֻלָּה וּגְבוּרָה. תְּהִלָּה וְתִפְאֶֽרֶת. קְדֻשָּׁה וּמַלְכוּת. בְּרָכוֹת וְהוֹדָאוֹת מֵעַתָּה וְעַד־עוֹלָם. בָּרוּךְ אַתָּה יְהֹוָה אֵל מֶֽלֶךְ גָּדוֹל בַּתִּשְׁבָּחוֹת. אֵל הַהוֹדָאוֹת אֲדוֹן הַנִּפְלָאוֹת הַבּוֹחֵר בְּשִׁירֵי זִמְרָה. מֶֽלֶךְ אֵל חֵי הָעוֹלָמִים.            </Text>
        </div>
    )
}

const Heading = styled.h1`
text-align: right;
`;

const Text = styled.div`
font-size: 30px;
text-align: right;
margin-right: 2vw;
margin-left: 2vw;
margin-bottom: 5vh;
`;

export default Yishtabach;