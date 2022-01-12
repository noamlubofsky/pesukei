import React from "react";
import styled from "styled-components";

function Hallelukah1({size}) {
    return(
        <Container>
            <Heading>1 הַלְ֒לוּיָהּ</Heading>
            <Text fontSize={size}>
            הַלְ֒לוּיָהּ הַלְ֒לִי נַפְשִׁי אֶת־יְהֹוָה: אֲהַלְלָה יְהֹוָה בְּחַיָּי אֲזַמְּ֒רָה לֵאלֹהַי בְּעוֹדִי: אַל־תִּבְטְחוּ בִנְדִיבִים בְּבֶן־אָדָם שֶׁאֵין לוֹ תְשׁוּעָה: תֵּצֵא רוּחוֹ יָשֻׁב לְאַדְמָתוֹ בַּיּוֹם הַהוּא אָבְ֒דוּ עֶשְׁתֹּנֹתָיו: אַשְׁרֵי שֶׁאֵל יַעֲקֹב בְּעֶזְרוֹ, שִׂבְרוֹ עַל־יְהֹוָה אֱלֹהָיו: עֹשֶׂה שָׁמַֽיִם וָאָֽרֶץ אֶת־הַיָּם וְאֶת־כָּל־אֲשֶׁר־בָּם, הַשֹּׁמֵר אֱמֶת לְעוֹלָם: עֹשֶׂה מִשְׁפָּט לַעֲשׁוּקִים נֹתֵן לֶֽחֶם לָרְ֒עֵבִים יְהֹוָה מַתִּיר אֲסוּרִים: יְהֹוָה פֹּקֵֽחַ עִוְרִים יְהֹוָה זֹקֵף כְּפוּפִים יְהֹוָה אֹהֵב צַדִּיקִים: יְהֹוָה שֹׁמֵר אֶת־גֵּרִים יָתוֹם וְאַלְמָנָה יְעוֹדֵד וְדֶֽרֶךְ רְשָׁעִים יְעַוֵּת: יִמְלֹךְ יְהֹוָה לְעוֹלָם אֱלֹהַֽיִךְ צִיּוֹן לְדֹר וָדֹר הַלְ֒לוּיָהּ        
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

export default Hallelukah1;