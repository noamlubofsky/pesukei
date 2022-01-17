import React from "react";
import styled from "styled-components";

function HoduRest({size, language}) {

    const hebrew = ``
    const english = ``
    const hebArray = splitMulti(hebrew, ['.', ',', ':', ';'])
    const engArray = splitMulti(english, ['.', ',', ':', ';'])

    var linearArray = hebArray.reduce(function(arr, v, i) {
        return arr.concat(v, engArray[i]); 
      }, []);

      function splitMulti(str, tokens){
        var tempChar = tokens[0]; // We can use the first token as a temporary join character
        for(var i = 1; i < tokens.length; i++){
            str = str.split(tokens[i]).join(tempChar);
        }
        str = str.split(tempChar);
        return str;
        }
        
    return(
        <Container>
            <Heading>Rest of הוֹדוּ</Heading>

            <Text fontSize={size}>
            וְהוּא רַחוּם יְכַפֵּר עָוֹן וְלֹא־יַשְׁחִית וְהִרְבָּה לְהָשִׁיב אַפּוֹ וְלֹא־יָעִיר כָּל־חֲמָתוֹ: אַתָּה יְהֹוָה לֹא־תִכְלָא רַחֲמֶֽיךָ מִמֶּֽנִּי חַסְדְּ֒ךָ וַאֲמִתְּ֒ךָ תָּמִיד יִצְּ֒רֽוּנִי: זְכֹר רַחֲמֶֽיךָ יְהֹוָה וַחֲסָדֶֽיךָ כִּי מֵעוֹלָם הֵֽמָּה: תְּנוּ עֹז לֵאלֹהִים עַל־יִשְׂרָאֵל גַּאֲוָתוֹ וְעֻזּוֹ בַּשְּׁ֒חָקִים: נוֹרָא אֱלֹהִים מִמִּקְדָּשֶֽׁיךָ אֵל יִשְׂרָאֵל הוּא נֹתֵן עֹז וְתַעֲצֻמוֹת לָעָם בָּרוּךְ אֱלֹהִים: אֵל־נְקָמוֹת יְהֹוָה אֵל נְקָמוֹת הוֹפִֽיעַ: הִנָּשֵׂא שֹׁפֵט הָאָֽרֶץ הָשֵׁב גְּמוּל עַל־גֵּאִים: לַיהוָֹה הַיְשׁוּעָה עַל־עַמְּ֒ךָ בִרְכָתֶֽךָ סֶּֽלָה: יְהֹוָה צְבָאוֹת עִמָּנוּ מִשְׂגָּב לָֽנוּ אֱלֹהֵי יַעֲקֹב סֶֽלָה: יְהֹוָה צְבָאוֹת אַשְׁרֵי אָדָם בֹּטֵֽחַ בָּךְ: יְהֹוָה הוֹשִֽׁיעָה הַמֶּֽלֶךְ יַעֲנֵֽנוּ בְיוֹם־קָרְאֵֽנוּ
            </Text>
            <Text fontSize={size}>
            הוֹשִֽׁיעָה אֶת־עַמֶּֽךָ וּבָרֵךְ אֶת־נַחֲלָתֶֽךָ וּרְעֵם וְנַשְּׂ֒אֵם עַד־הָעוֹלָם: נַפְשֵֽׁנוּ חִכְּ֒תָה לַיהוָֹה עֶזְרֵֽנוּ וּמָגִנֵּֽנוּ הוּא: כִּי־בוֹ יִשְׂמַח לִבֵּֽנוּ כִּי בְשֵׁם קָדְשׁוֹ בָטָֽחְנוּ: יְהִי־חַסְדְּ֒ךָ יְהֹוָה עָלֵֽינוּ כַּאֲשֶׁר יִחַֽלְנוּ לָךְ: הַרְאֵֽנוּ יְהֹוָה חַסְדֶּֽךָ וְיֶשְׁעֲךָ תִּֽתֶּן־לָֽנוּ: קֽוּמָה עֶזְרָֽתָה לָּנוּ וּפְדֵֽנוּ לְמַֽעַן חַסְדֶּֽךָ: אָנֹכִי יְהֹוָה אֱלֹהֶֽיךָ הַמַּעַלְךָ מֵאֶֽרֶץ מִצְרָֽיִם הַרְחֶב־פִּֽיךָ וַאֲמַלְאֵֽהוּ: אַשְׁרֵי הָעָם שֶׁכָּֽכָה לּוֹ אַשְׁרֵי הָעָם שֶׁיְהֹוָה אֱלֹהָיו: וַאֲנִי בְּחַסְדְּ֒ךָ בָטַֽחְתִּי יָגֵל לִבִּי בִּישׁוּעָתֶֽךָ אָשִֽׁירָה לַיהוָֹה כִּי גָמַל עָלָי
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

export default HoduRest;