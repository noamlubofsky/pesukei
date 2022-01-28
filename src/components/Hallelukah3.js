import React from "react";
import styled from "styled-components";

function Hallelukah3({size, language}) {

    const hebrew = `            הַלְ֒לוּיָהּ הַלְ֒לוּ אֶת־יְהֹוָה מִן הַשָּׁמַֽיִם הַלְ֒לֽוּהוּ בַּמְּ֒רוֹמִים: הַלְ֒לֽוּהוּ כָּל־מַלְאָכָיו הַלְ֒לֽוּהוּ כָּל־צְבָאָיו: הַלְ֒לֽוּהוּ שֶֽׁמֶשׁ וְיָרֵֽחַ הַלְ֒לֽוּהוּ כָּל־כּֽוֹכְ֒בֵי אוֹר: הַלְ֒לֽוּהוּ שְׁמֵי הַשָּׁמָֽיִם וְהַמַּֽיִם אֲשֶׁר מֵעַל הַשָּׁמָֽיִם: יְהַלְ֒לוּ אֶת־שֵׁם יְהֹוָה כִּי הוּא צִוָּה וְנִבְרָֽאוּ: וַיַּעֲמִידֵם לָעַד לְעוֹלָם חָק־נָתַן וְלֹא יַעֲבוֹר: הַלְ֒לוּ אֶת־יְהֹוָה מִן־הָאָֽרֶץ תַּנִּינִים וְכָל־תְּהֹמוֹת: אֵשׁ וּבָרָד שֶֽׁלֶג וְקִיטוֹר רֽוּחַ סְעָרָה עֹשָׂה דְבָרוֹ: הֶהָרִים וְכָל־גְּבָעוֹת עֵץ פְּרִי וְכָל־אֲרָזִים: הַחַיָּה וְכָל־בְּהֵמָה רֶֽמֶשׂ וְצִפּוֹר כָּנָף: מַלְכֵי־אֶֽרֶץ וְכָל־לְאֻמִּים שָׂרִים וְכָל־שֹׁפְטֵי אָֽרֶץ: בַּחוּרִים וְגַם־בְּתוּלוֹת זְקֵנִים עִם־נְעָרִים: יְהַלְ֒לוּ אֶת־שֵׁם יְהֹוָה כִּי־נִשְׂגָּב שְׁמוֹ לְבַדּוֹ הוֹדוֹ עַל־אֶֽרֶץ וְשָׁמָֽיִם: וַיָּֽרֶם קֶֽרֶן לְעַמּוֹ תְּהִלָּה לְכָל־חֲסִידָיו לִבְנֵי יִשְׂרָאֵל עַם קְרֹבוֹ הַלְ֒לוּיָהּ        
    `
    const english = `Praise God. 
    Praise Adonoy from the sky; 
    Praise Him in the heights! 
    Praise Him, all His angels; 
    Praise Him, all His hosts! 
    Praise Him, sun and moon;
     Praise Him, all the stars of light. 
    Praise Him, skies of skies,
     and the waters that are above the skies. 
    They will praise the Name of Adonoy, 
    for He commanded it and they were created. 
    He established them for all time, for as long as the world exists; 
    He decreed it and it is unalterable. 
    Praise Adonoy from the earth,
     sea-monsters and all [that dwell in] the depths. 
    Fire and hail, snow and vapor,
     stormwind, [all] fulfilling His word.
     The mountains and all the hills,
     fruit trees and all cedars.
     Wild beasts and all animals, 
    creeping things and winged fowl.
     Earthly kings and all peoples, 
    ministers and all earthly judges.
     Young men and also maidens, 
    elders together with lads.
     They will praise the Name of Adonoy, 
    for His Name alone is exalted;
     His majesty is over the earth and the skies. 
    He will raise the might of His people, 
    [which is] praise for all His pious ones, 
    for the Children of Israel, the people near to Him. Praise God.	
    
    `
    const hebArray = ["הַלְ֒לוּיָהּ", "הַלְ֒לוּ אֶת־יְהֹוָה מִן הַשָּׁמַֽיִם", "הַלְ֒לֽוּהוּ בַּמְּ֒רוֹמִים", "הַלְ֒לֽוּהוּ כָּל־מַלְאָכָיו", "הַלְ֒לֽוּהוּ כָּל־צְבָאָיו", "הַלְ֒לֽוּהוּ שֶֽׁמֶשׁ וְיָרֵֽחַ", "הַלְ֒לֽוּהוּ כָּל־כּֽוֹכְ֒בֵי אוֹר", "הַלְ֒לֽוּהוּ שְׁמֵי הַשָּׁמָֽיִם", "וְהַמַּֽיִם אֲשֶׁר מֵעַל הַשָּׁמָֽיִם", "יְהַלְ֒לוּ אֶת־שֵׁם יְהֹוָה", "כִּי הוּא צִוָּה וְנִבְרָֽאוּ", "וַיַּעֲמִידֵם לָעַד לְעוֹלָם", "חָק־נָתַן וְלֹא יַעֲבוֹר", "הַלְ֒לוּ אֶת־יְהֹוָה מִן־הָאָֽרֶץ", "תַּנִּינִים וְכָל־תְּהֹמוֹת", "אֵשׁ וּבָרָד שֶֽׁלֶג וְקִיטוֹר", "רֽוּחַ סְעָרָה עֹשָׂה דְבָרוֹ", "הֶהָרִים וְכָל־גְּבָעוֹת", "עֵץ פְּרִי וְכָל־אֲרָזִים", "הַחַיָּה וְכָל־בְּהֵמָה", "רֶֽמֶשׂ וְצִפּוֹר כָּנָף", "מַלְכֵי־אֶֽרֶץ וְכָל־לְאֻמִּים", "שָׂרִים וְכָל־שֹׁפְטֵי אָֽרֶץ", "בַּחוּרִים וְגַם־בְּתוּלוֹת", "זְקֵנִים עִם־נְעָרִים", "יְהַלְ֒לוּ אֶת־שֵׁם יְהֹוָה", "כִּי־נִשְׂגָּב שְׁמוֹ לְבַדּוֹ", "הוֹדוֹ עַל־אֶֽרֶץ וְשָׁמָֽיִם", "וַיָּֽרֶם קֶֽרֶן לְעַמּוֹ", "תְּהִלָּה לְכָל־חֲסִידָיו", "לִבְנֵי יִשְׂרָאֵל עַם קְרֹבוֹ הַלְ֒לוּיָהּ", ]
    const engArray = ["Praise God.", "Praise Adonoy from the sky;", "Praise Him in the heights!", "Praise Him, all His angels;", "Praise Him, all His hosts!", "Praise Him, sun and moon;", "Praise Him, all the stars of light.", "Praise Him, skies of skies,", "and the waters that are above the skies.", "They will praise the Name of Adonoy,", "for He commanded it and they were created.", "He established them for all time, for as long as the world exists;", "He decreed it and it is unalterable.", "Praise Adonoy from the earth,", "sea-monsters and all [that dwell in] the depths.", "Fire and hail, snow and vapor,", "stormwind, [all] fulfilling His word.", "The mountains and all the hills,", "fruit trees and all cedars.", "Wild beasts and all animals,", "creeping things and winged fowl.", "Earthly kings and all peoples,", "ministers and all earthly judges.", "Young men and also maidens,", "elders together with lads.", "They will praise the Name of Adonoy,", "for His Name alone is exalted;", "His majesty is over the earth and the skies.", "He will raise the might of His people,", "[which is] praise for all His pious ones,", "for the Children of Israel, the people near to Him. Praise God."]

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
                        <Heading>3 הַלְ֒לוּיָהּ</Heading>

            {/* <Text fontSize={size}>
            הַלְ֒לוּיָהּ הַלְ֒לוּ אֶת־יְהֹוָה מִן הַשָּׁמַֽיִם הַלְ֒לֽוּהוּ בַּמְּ֒רוֹמִים: הַלְ֒לֽוּהוּ כָּל־מַלְאָכָיו הַלְ֒לֽוּהוּ כָּל־צְבָאָיו: הַלְ֒לֽוּהוּ שֶֽׁמֶשׁ וְיָרֵֽחַ הַלְ֒לֽוּהוּ כָּל־כּֽוֹכְ֒בֵי אוֹר: הַלְ֒לֽוּהוּ שְׁמֵי הַשָּׁמָֽיִם וְהַמַּֽיִם אֲשֶׁר מֵעַל הַשָּׁמָֽיִם: יְהַלְ֒לוּ אֶת־שֵׁם יְהֹוָה כִּי הוּא צִוָּה וְנִבְרָֽאוּ: וַיַּעֲמִידֵם לָעַד לְעוֹלָם חָק־נָתַן וְלֹא יַעֲבוֹר: הַלְ֒לוּ אֶת־יְהֹוָה מִן־הָאָֽרֶץ תַּנִּינִים וְכָל־תְּהֹמוֹת: אֵשׁ וּבָרָד שֶֽׁלֶג וְקִיטוֹר רֽוּחַ סְעָרָה עֹשָׂה דְבָרוֹ: הֶהָרִים וְכָל־גְּבָעוֹת עֵץ פְּרִי וְכָל־אֲרָזִים: הַחַיָּה וְכָל־בְּהֵמָה רֶֽמֶשׂ וְצִפּוֹר כָּנָף: מַלְכֵי־אֶֽרֶץ וְכָל־לְאֻמִּים שָׂרִים וְכָל־שֹׁפְטֵי אָֽרֶץ: בַּחוּרִים וְגַם־בְּתוּלוֹת זְקֵנִים עִם־נְעָרִים: יְהַלְ֒לוּ אֶת־שֵׁם יְהֹוָה כִּי־נִשְׂגָּב שְׁמוֹ לְבַדּוֹ הוֹדוֹ עַל־אֶֽרֶץ וְשָׁמָֽיִם: וַיָּֽרֶם קֶֽרֶן לְעַמּוֹ תְּהִלָּה לְכָל־חֲסִידָיו לִבְנֵי יִשְׂרָאֵל עַם קְרֹבוֹ הַלְ֒לוּיָהּ        
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

export default Hallelukah3;