import React from "react";
import styled from "styled-components";

function YehiChevod({size, language}) {

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
            <Heading>יְהִי כְבוֹד</Heading>

            <Text fontSize={size}>
            יְהִי כְבוֹד יְהֹוָה לְעוֹלָם יִשְׂמַח יְהֹוָה בְּמַעֲשָׂיו: יְהִי שֵׁם יְהֹוָה מְבֹרָךְ מֵעַתָּה וְעַד־עוֹלָם: מִמִּזְרַח־שֶֽׁמֶשׁ עַד־מְבוֹאוֹ מְהֻלָּל שֵׁם יְהֹוָה: רָם עַל־כָּל־גּוֹיִם יְהֹוָה עַל הַשָּׁמַֽיִם כְּבוֹדוֹ: יְהֹוָה שִׁמְךָ לְעוֹלָם יְהֹוָה זִכְרְ֒ךָ לְדֹר־וָדֹר: יְהֹוָה בַּשָּׁמַֽיִם הֵכִין כִּסְאוֹ וּמַלְכוּתוֹ בַּכֹּל מָשָֽׁלָה: יִשְׂמְחוּ הַשָּׁמַֽיִם וְתָגֵל הָאָֽרֶץ וְיֹאמְ֒רוּ בַגּוֹיִם יְהֹוָה מָלָךְ: יְהֹוָה מֶֽלֶךְ יְהֹוָה מָלָךְ יְהֹוָה יִמְלֹךְ לְעֹלָם וָעֶד: יְהֹוָה מֶֽלֶךְ עוֹלָם וָעֶד אָבְ֒דוּ גוֹיִם מֵאַרְצוֹ: יְהֹוָה הֵפִיר עֲצַת־גּוֹיִם הֵנִיא מַחְשְׁבוֹת עַמִּים: רַבּוֹת מַחֲשָׁבוֹת בְּלֶב־אִישׁ וַעֲצַת יְהֹוָה הִיא תָקוּם: עֲצַת יְהֹוָה לְעוֹלָם תַּעֲמֹד מַחְשְׁבוֹת לִבּוֹ לְדֹר וָדֹר: כִּי הוּא אָמַר וַיֶּֽהִי הוּא־צִוָּה וַיַּעֲמֹד: כִּי בָחַר יְהֹוָה בְּצִיּוֹן אִוָּהּ לְמוֹשָׁב לוֹ: כִּי־יַעֲקֹב בָּחַר לוֹ יָהּ יִשְׂרָאֵל לִסְגֻלָּתוֹ: כִּי לֹא יִטּשׁ יְהֹוָה עַמּוֹ וְנַחֲלָתוֹ לֹא יַעֲזֹב: וְהוּא רַחוּם יְכַפֵּר עָוֹן וְלֹא־יַשְׁחִית וְהִרְבָּה לְהָשִׁיב אַפּוֹ וְלֹא־יָעִיר כָּל־חֲמָתוֹ: יְהֹוָה הוֹשִׁיעָה הַמֶּֽלֶךְ יַעֲנֵֽנוּ בְיוֹם־קָרְאֵֽנוּ           </Text>
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

export default YehiChevod;