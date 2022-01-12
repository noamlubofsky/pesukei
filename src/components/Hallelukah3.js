import React from "react";
import styled from "styled-components";

function Hallelukah3({size}) {
    return(
        <Container>
                        <Heading>3 הַלְ֒לוּיָהּ</Heading>

            <Text fontSize={size}>
            הַלְ֒לוּיָהּ הַלְ֒לוּ אֶת־יְהֹוָה מִן הַשָּׁמַֽיִם הַלְ֒לֽוּהוּ בַּמְּ֒רוֹמִים: הַלְ֒לֽוּהוּ כָּל־מַלְאָכָיו הַלְ֒לֽוּהוּ כָּל־צְבָאָיו: הַלְ֒לֽוּהוּ שֶֽׁמֶשׁ וְיָרֵֽחַ הַלְ֒לֽוּהוּ כָּל־כּֽוֹכְ֒בֵי אוֹר: הַלְ֒לֽוּהוּ שְׁמֵי הַשָּׁמָֽיִם וְהַמַּֽיִם אֲשֶׁר מֵעַל הַשָּׁמָֽיִם: יְהַלְ֒לוּ אֶת־שֵׁם יְהֹוָה כִּי הוּא צִוָּה וְנִבְרָֽאוּ: וַיַּעֲמִידֵם לָעַד לְעוֹלָם חָק־נָתַן וְלֹא יַעֲבוֹר: הַלְ֒לוּ אֶת־יְהֹוָה מִן־הָאָֽרֶץ תַּנִּינִים וְכָל־תְּהֹמוֹת: אֵשׁ וּבָרָד שֶֽׁלֶג וְקִיטוֹר רֽוּחַ סְעָרָה עֹשָׂה דְבָרוֹ: הֶהָרִים וְכָל־גְּבָעוֹת עֵץ פְּרִי וְכָל־אֲרָזִים: הַחַיָּה וְכָל־בְּהֵמָה רֶֽמֶשׂ וְצִפּוֹר כָּנָף: מַלְכֵי־אֶֽרֶץ וְכָל־לְאֻמִּים שָׂרִים וְכָל־שֹׁפְטֵי אָֽרֶץ: בַּחוּרִים וְגַם־בְּתוּלוֹת זְקֵנִים עִם־נְעָרִים: יְהַלְ֒לוּ אֶת־שֵׁם יְהֹוָה כִּי־נִשְׂגָּב שְׁמוֹ לְבַדּוֹ הוֹדוֹ עַל־אֶֽרֶץ וְשָׁמָֽיִם: וַיָּֽרֶם קֶֽרֶן לְעַמּוֹ תְּהִלָּה לְכָל־חֲסִידָיו לִבְנֵי יִשְׂרָאֵל עַם קְרֹבוֹ הַלְ֒לוּיָהּ        
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
margin-right: 5vw;
margin-left: 2vw;
margin-bottom: 5vh;
font-family: 'Times New Roman', Georgia, serif;
`;

export default Hallelukah3;