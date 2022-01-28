import React from "react";
import styled from "styled-components";

function VayevarechDavidPrimary({size, language}) {

    const hebrew = `
    וַיְבָֽרֶךְ דָּוִיד אֶת־יְהֹוָה לְעֵינֵי כָּל־הַקָּהָל וַיֹּֽאמֶר דָּוִיד בָּרוּךְ אַתָּה יְהֹוָה אֱלֹהֵי יִשְׂרָאֵל אָבִֽינוּ, מֵעוֹלָם וְעַד־עוֹלָם: לְךָ יְהֹוָה הַגְּ֒דֻלָּה וְהַגְּ֒בוּרָה וְהַתִּפְאֶֽרֶת וְהַנֵּֽצַח וְהַהוֹד כִּי־כֹל בַּשָּׁמַֽיִם וּבָאָֽרֶץ לְךָ יְהֹוָה הַמַּמְלָכָה וְהַמִּתְנַשֵּׂא לְכֹל לְרֹאשׁ: וְהָעֽשֶׁר וְהַכָּבוֹד מִלְּ֒פָנֶֽיךָ וְאַתָּה מוֹשֵׁל בַּכֹּל, וּבְיָדְ֒ךָ כֹּֽחַ וּגְבוּרָה, וּבְיָדְ֒ךָ לְגַדֵּל וּלְחַזֵּק לַכֹּל: וְעַתָּה אֱלֹהֵֽינוּ מוֹדִים אֲנַֽחְנוּ לָךְ וּמְהַלְלִים לְשֵׁם תִּפְאַרְתֶּֽךָ
    `
    const english = `
    And David blessed Adonoy 
    in the presence of all the assembly; 
    and David said, 
    Blessed are You, Adonoy, 
    God of Israel, our father, 
    forever and ever. 
    Yours, Adonoy, is the greatness, the might, the glory the victory and the beauty, 
    for all that is in heaven and on earth [is Yours]; 
    Yours, Adonoy, is the kingdom and You are uplifted, [supreme] over all rulers. 
    The riches and the honor come from You, 
    and You rule over all;
     in Your hand are power and might, 
    and [it is] in Your hand to bestow greatness and strength upon all.
     And now, our God, we give thanks to You 
    and praise Your glorious Name.
        `
    const hebArray = ["וַיְבָֽרֶךְ דָּוִיד אֶת־יְהֹוָה", "לְעֵינֵי כָּל־הַקָּהָל", "וַיֹּֽאמֶר דָּוִיד", "בָּרוּךְ אַתָּה יְהֹוָה", "אֱלֹהֵי יִשְׂרָאֵל אָבִֽינוּ", "מֵעוֹלָם וְעַד־עוֹלָם", "לְךָ יְהֹוָה הַגְּ֒דֻלָּה וְהַגְּ֒בוּרָה וְהַתִּפְאֶֽרֶת וְהַנֵּֽצַח וְהַהוֹד", "כִּי־כֹל בַּשָּׁמַֽיִם וּבָאָֽרֶץ", "לְךָ יְהֹוָה הַמַּמְלָכָה וְהַמִּתְנַשֵּׂא לְכֹל לְרֹאשׁ", "וְהָעֽשֶׁר וְהַכָּבוֹד מִלְּ֒פָנֶֽיךָ", "וְאַתָּה מוֹשֵׁל בַּכֹּל", "וּבְיָדְ֒ךָ כֹּֽחַ וּגְבוּרָה", "וּבְיָדְ֒ךָ לְגַדֵּל וּלְחַזֵּק לַכֹּל", "וְעַתָּה אֱלֹהֵֽינוּ מוֹדִים אֲנַֽחְנוּ לָךְ", "וּמְהַלְלִים לְשֵׁם תִּפְאַרְתֶּֽךָ"]
    const engArray = ["And David blessed Adonoy", "in the presence of all the assembly;", "and David said,", "Blessed are You, Adonoy,", "God of Israel, our father,", "forever and ever.", "Yours, Adonoy, is the greatness, the might, the glory the victory and the beauty,", "for all that is in heaven and on earth [is Yours];", "Yours, Adonoy, is the kingdom and You are uplifted, [supreme] over all rulers.", "The riches and the honor come from You,", "and You rule over all;", "in Your hand are power and might,", "and [it is] in Your hand to bestow greatness and strength upon all.", "And now, our God, we give thanks to You", "and praise Your glorious Name."]

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
            <Heading>וַיְבָֽרֶךְ דָּוִיד</Heading>
            <Heading2>(until תִּפְאַרְתֶּֽךָ)</Heading2>

            {/* <Text fontSize={size}>
            וַיְבָֽרֶךְ דָּוִיד אֶת־יְהֹוָה לְעֵינֵי כָּל־הַקָּהָל וַיֹּֽאמֶר דָּוִיד בָּרוּךְ אַתָּה יְהֹוָה אֱלֹהֵי יִשְׂרָאֵל אָבִֽינוּ, מֵעוֹלָם וְעַד־עוֹלָם: לְךָ יְהֹוָה הַגְּ֒דֻלָּה וְהַגְּ֒בוּרָה וְהַתִּפְאֶֽרֶת וְהַנֵּֽצַח וְהַהוֹד כִּי־כֹל בַּשָּׁמַֽיִם וּבָאָֽרֶץ לְךָ יְהֹוָה הַמַּמְלָכָה וְהַמִּתְנַשֵּׂא לְכֹל לְרֹאשׁ: וְהָעֽשֶׁר וְהַכָּבוֹד מִלְּ֒פָנֶֽיךָ וְאַתָּה מוֹשֵׁל בַּכֹּל, וּבְיָדְ֒ךָ כֹּֽחַ וּגְבוּרָה, וּבְיָדְ֒ךָ לְגַדֵּל וּלְחַזֵּק לַכֹּל: וְעַתָּה אֱלֹהֵֽינוּ מוֹדִים אֲנַֽחְנוּ לָךְ וּמְהַלְלִים לְשֵׁם תִּפְאַרְתֶּֽךָ          </Text>
         */}

{language === 'hebrew' || language === 'both' ?
            <Text fontSize={size}>
            {hebrew}
            </Text>
            : null}

            {language === 'english' || language === 'both' ?
            <Text fontSize={size}>
            {english}
            </Text>
            : null}

            {language === 'linear' ? 
            linearArray.map(line => {
                return(
                <LinearText fontSize={size}>{line}</LinearText>
                )
            })
        : null}

            <p>*Texts and translations courtesy of Sefaria</p>
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

const Heading2 = styled.h3`
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

const LinearText = styled.div`
font-size: ${props => props.fontSize}px;
text-align: right;
margin-right: 5vw;
margin-left: 2vw;
margin-bottom: 2vh;
font-family: 'Times New Roman', Georgia, serif;
`;

export default VayevarechDavidPrimary;