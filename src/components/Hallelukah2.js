import React from "react";
import styled from "styled-components";

function Hallelukah2({size, language}) {

    const hebrew = `            הַלְ֒לוּיָהּ כִּי־טוֹב זַמְּ֒רָה אֱלֹהֵֽינוּ, כִּי־נָעִים נָאוָה תְהִלָּה: בּוֹנֵה יְרוּשָׁלַֽםִ יְהֹוָה נִדְחֵי יִשְׂרָאֵל יְכַנֵּס: הָרוֹפֵא לִשְׁבֽוּרֵי לֵב וּמְחַבֵּשׁ לְעַצְּ֒בוֹתָם: מוֹנֶה מִסְפָּר לַכּוֹכָבִים לְכֻלָּם שֵׁמוֹת יִקְרָא: גָּדוֹל אֲדוֹנֵֽינוּ וְרַב־כֹּֽחַ לִתְבוּנָתוֹ אֵין מִסְפָּר: מְעוֹדֵד עֲנָוִים יְהֹוָה מַשְׁפִּיל רְשָׁעִים עֲדֵי־אָֽרֶץ: עֱנוּ לַיהוָֹה בְּתוֹדָה זַמְּ֒רוּ לֵאלֹהֵֽינוּ בְכִנּוֹר: הַמְכַסֶּה שָׁמַֽיִם בְּעָבִים הַמֵּכִין לָאָֽרֶץ מָטָר הַמַּצְמִֽיחַ הָרִים חָצִיר: נוֹתֵן לִבְהֵמָה לַחְמָהּ לִבְנֵי עֹרֵב אֲשֶׁר יִקְרָֽאוּ: לֹא בִגְבוּרַת הַסּוּס יֶחְפָּץ לֹא בְשׁוֹקֵי הָאִישׁ יִרְצֶה: רוֹצֶה יְהֹוָה אֶת־יְרֵאָיו אֶת־הַמְיַחֲלִים לְחַסְדּוֹ: שַׁבְּ֒חִי יְרוּשָׁלַֽםִ אֶת יְהֹוָה הַלְ֒לִי אֱלֹהַֽיִךְ צִיּוֹן: כִּי־חִזַּק בְּרִיחֵי שְׁעָרָֽיִךְ בֵּרַךְ בָּנַֽיִךְ בְּקִרְבֵּךְ: הַשָּׂם־גְּבוּלֵךְ שָׁלוֹם חֵֽלֶב חִטִּים יַשְׂבִּיעֵךְ: הַשֹּׁלֵֽחַ אִמְרָתוֹ אָֽרֶץ עַד־מְהֵרָה יָרוּץ דְּבָרוֹ: הַנֹּתֵן שֶֽׁלֶג כַּצָּֽמֶר כְּפוֹר כָּאֵֽפֶר יְפַזֵּר: מַשְׁלִיךְ קַרְחוֹ כְפִתִּים לִפְנֵי קָרָתוֹ מִי יַעֲמֹד: יִשְׁלַח דְּבָרוֹ וְיַמְסֵם יַשֵּׁב רוּחוֹ יִזְּ֒לוּ־מָֽיִם: מַגִּיד דְּבָרָיו לְיַעֲקֹב חֻקָּיו וּמִשְׁפָּטָיו לְיִשְׂרָאֵל: לֹא עָֽשָׂה כֵן לְכָל־גּוֹי וּמִשְׁפָּטִים בַּל־יְדָעוּם הַלְ֒לוּיָהּ         
    `
    const english = `Praise God! 
    for it is good to sing to our God; 
    for [His] praise is pleasant, befitting.
     The builder of Jerusalem is Adonoy; 
    the banished ones of Israel He will gather.
     [He is] the Healer of the broken-hearted 
    and [also] binds up their wounds. 
    He fixes the number of stars; 
    He calls all of them by names. 
    Great is our Master and abundant in power; 
    His understanding is beyond reckoning. 
    Adonoy causes the humble to stand firm; 
    He casts down the wicked to the ground. 
    Cry out to Adonoy in thanksgiving; 
    sing to our God with the harp. 
    [He] Who covers the heaven with clouds,
     Who prepares rain for the earth; 
    Who causes grass to grow upon the hills. 
    Who gives the animal its fodder; 
    [also] to the young ravens which call. 
    Not the power of the horse does He desire, 
    nor the thighs of man does He want. 
    Adonoy wants those who fear Him, 
    those who hope for His kindliness.
     Jerusalem, praise Adonoy; 
    Zion, extol your God. 
    For He has fortified the bars of your gates; 
    He has blessed your children in your midst. 
    He established peace at your border; 
    with prime wheat He satisfies you.
     He dispatches His command earthward; 
    His word races swiftly. 
    He provides snow like fleece, 
    He scatters frost like ashes. 
    He hurls His ice like crumbs; 
    who can withstand His cold? 
    He dispatches His word and melts them; 
    He blows His wind, they flow as water.
     He declares His word to Jacob,
     His statutes and His laws to Israel. 
    He did not do so to any [other] nation;
    and of His laws they were not informed. Praise God.
    `
    const hebArray = ["הַלְ֒לוּיָהּ", "כִּי־טוֹב זַמְּ֒רָה אֱלֹהֵֽינוּ", "כִּי־נָעִים נָאוָה תְהִלָּה", "בּוֹנֵה יְרוּשָׁלַֽםִ יְהֹוָה", "נִדְחֵי יִשְׂרָאֵל יְכַנֵּס", "הָרוֹפֵא לִשְׁבֽוּרֵי לֵב", "וּמְחַבֵּשׁ לְעַצְּ֒בוֹתָם", "מוֹנֶה מִסְפָּר לַכּוֹכָבִים", "לְכֻלָּם שֵׁמוֹת יִקְרָא", "גָּדוֹל אֲדוֹנֵֽינוּ וְרַב־כֹּֽחַ", "לִתְבוּנָתוֹ אֵין מִסְפָּר", "מְעוֹדֵד עֲנָוִים יְהֹוָה", "מַשְׁפִּיל רְשָׁעִים עֲדֵי־אָֽרֶץ", "עֱנוּ לַיהוָֹה בְּתוֹדָה", "זַמְּ֒רוּ לֵאלֹהֵֽינוּ בְכִנּוֹר", "הַמְכַסֶּה שָׁמַֽיִם בְּעָבִים", "הַמֵּכִין לָאָֽרֶץ מָטָר", "הַמַּצְמִֽיחַ הָרִים חָצִיר", "נוֹתֵן לִבְהֵמָה לַחְמָהּ", "לִבְנֵי עֹרֵב אֲשֶׁר יִקְרָֽאוּ", "לֹא בִגְבוּרַת הַסּוּס יֶחְפָּץ", "לֹא בְשׁוֹקֵי הָאִישׁ יִרְצֶה", "רוֹצֶה יְהֹוָה אֶת־יְרֵאָיו", "אֶת־הַמְיַחֲלִים לְחַסְדּוֹ", "שַׁבְּ֒חִי יְרוּשָׁלַֽםִ אֶת יְהֹוָה", "הַלְ֒לִי אֱלֹהַֽיִךְ צִיּוֹן", "כִּי־חִזַּק בְּרִיחֵי שְׁעָרָֽיִךְ", "בֵּרַךְ בָּנַֽיִךְ בְּקִרְבֵּךְ", "הַשָּׂם־גְּבוּלֵךְ שָׁלוֹם", "חֵֽלֶב חִטִּים יַשְׂבִּיעֵךְ", "הַשֹּׁלֵֽחַ אִמְרָתוֹ אָֽרֶץ", "עַד־מְהֵרָה יָרוּץ דְּבָרוֹ", "הַנֹּתֵן שֶֽׁלֶג כַּצָּֽמֶר", "כְּפוֹר כָּאֵֽפֶר יְפַזֵּר", "מַשְׁלִיךְ קַרְחוֹ כְפִתִּים", "לִפְנֵי קָרָתוֹ מִי יַעֲמֹד", "יִשְׁלַח דְּבָרוֹ וְיַמְסֵם", "יַשֵּׁב רוּחוֹ יִזְּ֒לוּ־מָֽיִם", "מַגִּיד דְּבָרָיו לְיַעֲקֹב", "חֻקָּיו וּמִשְׁפָּטָיו לְיִשְׂרָאֵל", "לֹא עָֽשָׂה כֵן לְכָל־גּוֹי", "וּמִשְׁפָּטִים בַּל־יְדָעוּם הַלְ֒לוּיָהּ", ]
    const engArray = ["Praise God!", "for it is good to sing to our God;", "for [His] praise is pleasant, befitting.", "The builder of Jerusalem is Adonoy;", "the banished ones of Israel He will gather.", "[He is] the Healer of the broken-hearted", "and [also] binds up their wounds.", "He fixes the number of stars;", "He calls all of them by names.", "Great is our Master and abundant in power;", "His understanding is beyond reckoning.", "Adonoy causes the humble to stand firm;", "He casts down the wicked to the ground.", "Cry out to Adonoy in thanksgiving;", "sing to our God with the harp.", "[He] Who covers the heaven with clouds,", "Who prepares rain for the earth;", "Who causes grass to grow upon the hills.", "Who gives the animal its fodder;", "[also] to the young ravens which call.", "Not the power of the horse does He desire,", "nor the thighs of man does He want.", "Adonoy wants those who fear Him,", "those who hope for His kindliness.", "Jerusalem, praise Adonoy;", "Zion, extol your God.", "For He has fortified the bars of your gates;", "He has blessed your children in your midst.", "He established peace at your border;", "with prime wheat He satisfies you.", "He dispatches His command earthward;", "His word races swiftly.", "He provides snow like fleece,", "He scatters frost like ashes.", "He hurls His ice like crumbs;", "who can withstand His cold?", "He dispatches His word and melts them;", "He blows His wind, they flow as water.", "He declares His word to Jacob,", "His statutes and His laws to Israel.", "He did not do so to any [other] nation;", "and of His laws they were not informed. Praise God."]

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
            <Heading>2 הַלְ֒לוּיָהּ</Heading>

            {/* <Text fontSize={size}>
            הַלְ֒לוּיָהּ כִּי־טוֹב זַמְּ֒רָה אֱלֹהֵֽינוּ, כִּי־נָעִים נָאוָה תְהִלָּה: בּוֹנֵה יְרוּשָׁלַֽםִ יְהֹוָה נִדְחֵי יִשְׂרָאֵל יְכַנֵּס: הָרוֹפֵא לִשְׁבֽוּרֵי לֵב וּמְחַבֵּשׁ לְעַצְּ֒בוֹתָם: מוֹנֶה מִסְפָּר לַכּוֹכָבִים לְכֻלָּם שֵׁמוֹת יִקְרָא: גָּדוֹל אֲדוֹנֵֽינוּ וְרַב־כֹּֽחַ לִתְבוּנָתוֹ אֵין מִסְפָּר: מְעוֹדֵד עֲנָוִים יְהֹוָה מַשְׁפִּיל רְשָׁעִים עֲדֵי־אָֽרֶץ: עֱנוּ לַיהוָֹה בְּתוֹדָה זַמְּ֒רוּ לֵאלֹהֵֽינוּ בְכִנּוֹר: הַמְכַסֶּה שָׁמַֽיִם בְּעָבִים הַמֵּכִין לָאָֽרֶץ מָטָר הַמַּצְמִֽיחַ הָרִים חָצִיר: נוֹתֵן לִבְהֵמָה לַחְמָהּ לִבְנֵי עֹרֵב אֲשֶׁר יִקְרָֽאוּ: לֹא בִגְבוּרַת הַסּוּס יֶחְפָּץ לֹא בְשׁוֹקֵי הָאִישׁ יִרְצֶה: רוֹצֶה יְהֹוָה אֶת־יְרֵאָיו אֶת־הַמְיַחֲלִים לְחַסְדּוֹ: שַׁבְּ֒חִי יְרוּשָׁלַֽםִ אֶת יְהֹוָה הַלְ֒לִי אֱלֹהַֽיִךְ צִיּוֹן: כִּי־חִזַּק בְּרִיחֵי שְׁעָרָֽיִךְ בֵּרַךְ בָּנַֽיִךְ בְּקִרְבֵּךְ: הַשָּׂם־גְּבוּלֵךְ שָׁלוֹם חֵֽלֶב חִטִּים יַשְׂבִּיעֵךְ: הַשֹּׁלֵֽחַ אִמְרָתוֹ אָֽרֶץ עַד־מְהֵרָה יָרוּץ דְּבָרוֹ: הַנֹּתֵן שֶֽׁלֶג כַּצָּֽמֶר כְּפוֹר כָּאֵֽפֶר יְפַזֵּר: מַשְׁלִיךְ קַרְחוֹ כְפִתִּים לִפְנֵי קָרָתוֹ מִי יַעֲמֹד: יִשְׁלַח דְּבָרוֹ וְיַמְסֵם יַשֵּׁב רוּחוֹ יִזְּ֒לוּ־מָֽיִם: מַגִּיד דְּבָרָיו לְיַעֲקֹב חֻקָּיו וּמִשְׁפָּטָיו לְיִשְׂרָאֵל: לֹא עָֽשָׂה כֵן לְכָל־גּוֹי וּמִשְׁפָּטִים בַּל־יְדָעוּם הַלְ֒לוּיָהּ         
            </Text> */}

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

export default Hallelukah2;