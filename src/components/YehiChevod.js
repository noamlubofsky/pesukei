import React from "react";
import styled from "styled-components";

function YehiChevod({size, language}) {

    const hebrew = `יְהִי כְבוֹד יְהֹוָה לְעוֹלָם יִשְׂמַח יְהֹוָה בְּמַעֲשָׂיו: יְהִי שֵׁם יְהֹוָה מְבֹרָךְ מֵעַתָּה וְעַד־עוֹלָם: מִמִּזְרַח־שֶֽׁמֶשׁ עַד־מְבוֹאוֹ מְהֻלָּל שֵׁם יְהֹוָה: רָם עַל־כָּל־גּוֹיִם יְהֹוָה עַל הַשָּׁמַֽיִם כְּבוֹדוֹ: יְהֹוָה שִׁמְךָ לְעוֹלָם יְהֹוָה זִכְרְ֒ךָ לְדֹר־וָדֹר: יְהֹוָה בַּשָּׁמַֽיִם הֵכִין כִּסְאוֹ וּמַלְכוּתוֹ בַּכֹּל מָשָֽׁלָה: יִשְׂמְחוּ הַשָּׁמַֽיִם וְתָגֵל הָאָֽרֶץ וְיֹאמְ֒רוּ בַגּוֹיִם יְהֹוָה מָלָךְ: יְהֹוָה מֶֽלֶךְ יְהֹוָה מָלָךְ יְהֹוָה יִמְלֹךְ לְעֹלָם וָעֶד: יְהֹוָה מֶֽלֶךְ עוֹלָם וָעֶד אָבְ֒דוּ גוֹיִם מֵאַרְצוֹ: יְהֹוָה הֵפִיר עֲצַת־גּוֹיִם הֵנִיא מַחְשְׁבוֹת עַמִּים: רַבּוֹת מַחֲשָׁבוֹת בְּלֶב־אִישׁ וַעֲצַת יְהֹוָה הִיא תָקוּם: עֲצַת יְהֹוָה לְעוֹלָם תַּעֲמֹד מַחְשְׁבוֹת לִבּוֹ לְדֹר וָדֹר: כִּי הוּא אָמַר וַיֶּֽהִי הוּא־צִוָּה וַיַּעֲמֹד: כִּי בָחַר יְהֹוָה בְּצִיּוֹן אִוָּהּ לְמוֹשָׁב לוֹ: כִּי־יַעֲקֹב בָּחַר לוֹ יָהּ יִשְׂרָאֵל לִסְגֻלָּתוֹ: כִּי לֹא יִטּשׁ יְהֹוָה עַמּוֹ וְנַחֲלָתוֹ לֹא יַעֲזֹב: וְהוּא רַחוּם יְכַפֵּר עָוֹן וְלֹא־יַשְׁחִית וְהִרְבָּה לְהָשִׁיב אַפּוֹ וְלֹא־יָעִיר כָּל־חֲמָתוֹ: יְהֹוָה הוֹשִׁיעָה הַמֶּֽלֶךְ יַעֲנֵֽנוּ בְיוֹם־קָרְאֵֽנוּ`
    const english = `The glory of Adonoy will endure forever; 
    Adonoy will rejoice in His works.
     The Name of Adonoy will be blessed
     from now forever. 
    From the rising of the sun to its setting,
     praised is the Name of Adonoy. 
    High above all nations is Adonoy, 
    above the heavens is His glory. 
    Adonoy, Your Name is forever, 
    Adonoy, Your Mention is for generations.
     Adonoy has established His throne in heaven,
     [but] His dominion rules over all. 
    The heavens will rejoice, the earth will exult, 
    and they will proclaim among the nations: Adonoy has begun His reign.
     Adonoy is King, 
    Adonoy was King; 
    Adonoy will be King forever and ever. 
    Adonoy will reign for all eternity
     [when] nations have perished from His earth.
     Adonoy annuls the counsel of nations,
     He disrupts the intention of peoples. 
    Many thoughts are in the heart of man, 
    but [only] Adonoy’s counsel will endure. 
    The counsel of Adonoy will stand forever, 
    the thoughts of His heart throughout all generations. 
    For He spoke and it came to be;
    He commanded and it stood. 
    For Adonoy has chosen Zion; 
    He desired it for His dwelling place. 
    For God chose Jacob to be His, 
    Israel for His treasure. 
    For Adonoy will not cast off His people, 
    and His inheritance, He will not abandon. 
    And He, the Merciful One, atones iniquity; 
    and does not destroy. 
    He frequently withdraws His anger 
    and does not arouse all His rage. 
    Adonoy, deliver [us!] 
    The King will answer us on the day we call.
    `
    const hebArray = ["יְהִי כְבוֹד יְהֹוָה לְעוֹלָם", "יִשְׂמַח יְהֹוָה בְּמַעֲשָׂיו", "יְהִי שֵׁם יְהֹוָה מְבֹרָךְ", "מֵעַתָּה וְעַד־עוֹלָם", "מִמִּזְרַח־שֶֽׁמֶשׁ עַד־מְבוֹאוֹ", "מְהֻלָּל שֵׁם יְהֹוָה", "רָם עַל־כָּל־גּוֹיִם", "יְהֹוָה עַל הַשָּׁמַֽיִם כְּבוֹדוֹ", "יְהֹוָה שִׁמְךָ לְעוֹלָם", "יְהֹוָה זִכְרְ֒ךָ לְדֹר־וָדֹר", "יְהֹוָה בַּשָּׁמַֽיִם הֵכִין כִּסְאוֹ", "וּמַלְכוּתוֹ בַּכֹּל מָשָֽׁלָה", "יִשְׂמְחוּ הַשָּׁמַֽיִם וְתָגֵל הָאָֽרֶץ", "וְיֹאמְ֒רוּ בַגּוֹיִם יְהֹוָה מָלָךְ", "יְהֹוָה מֶֽלֶךְ", "יְהֹוָה מָלָךְ", "יְהֹוָה יִמְלֹךְ לְעֹלָם וָעֶד", "יְהֹוָה מֶֽלֶךְ עוֹלָם וָעֶד", "אָבְ֒דוּ גוֹיִם מֵאַרְצוֹ", "יְהֹוָה הֵפִיר עֲצַת־גּוֹיִם", "הֵנִיא מַחְשְׁבוֹת עַמִּים", "רַבּוֹת מַחֲשָׁבוֹת בְּלֶב־אִישׁ", "וַעֲצַת יְהֹוָה הִיא תָקוּם", "עֲצַת יְהֹוָה לְעוֹלָם תַּעֲמֹד", "מַחְשְׁבוֹת לִבּוֹ לְדֹר וָדֹר", "כִּי הוּא אָמַר וַיֶּֽהִי", "הוּא־צִוָּה וַיַּעֲמֹד", "כִּי בָחַר יְהֹוָה בְּצִיּוֹן", "אִוָּהּ לְמוֹשָׁב לוֹ", "כִּי־יַעֲקֹב בָּחַר לוֹ יָהּ", "יִשְׂרָאֵל לִסְגֻלָּתוֹ", "כִּי לֹא יִטּשׁ יְהֹוָה עַמּוֹ", "וְנַחֲלָתוֹ לֹא יַעֲזֹב", "וְהוּא רַחוּם יְכַפֵּר עָוֹן", "וְלֹא־יַשְׁחִית", "וְהִרְבָּה לְהָשִׁיב אַפּוֹ", "וְלֹא־יָעִיר כָּל־חֲמָתוֹ", "יְהֹוָה הוֹשִׁיעָה", "הַמֶּֽלֶךְ יַעֲנֵֽנוּ בְיוֹם־קָרְאֵֽנוּ"]
    const engArray = ["The glory of Adonoy will endure forever;", "Adonoy will rejoice in His works.", "The Name of Adonoy will be blessed", "from now forever.", "From the rising of the sun to its setting,", "praised is the Name of Adonoy.", "High above all nations is Adonoy,", "above the heavens is His glory.", "Adonoy, Your Name is forever,", "Adonoy, Your Mention is for generations.", "Adonoy has established His throne in heaven,", "[but] His dominion rules over all.", "The heavens will rejoice, the earth will exult,", "and they will proclaim among the nations: Adonoy has begun His reign.", "Adonoy is King,", "Adonoy was King;", "Adonoy will be King forever and ever.", "Adonoy will reign for all eternity", "[when] nations have perished from His earth.", "Adonoy annuls the counsel of nations,", "He disrupts the intention of peoples.", "Many thoughts are in the heart of man,", "but [only] Adonoy’s counsel will endure.", "The counsel of Adonoy will stand forever,", "the thoughts of His heart throughout all generations.", "For He spoke and it came to be;", "He commanded and it stood.", "For Adonoy has chosen Zion;", "He desired it for His dwelling place.", "For God chose Jacob to be His,", "Israel for His treasure.", "For Adonoy will not cast off His people,", "and His inheritance, He will not abandon.", "And He, the Merciful One, atones iniquity;", "and does not destroy.", "He frequently withdraws His anger", "and does not arouse all His rage.", "Adonoy, deliver [us!]", "The King will answer us on the day we call."]

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
        <div>
        <Container>
            <Heading>יְהִי כְבוֹד</Heading>

            {/* <Text fontSize={size}>
            יְהִי כְבוֹד יְהֹוָה לְעוֹלָם יִשְׂמַח יְהֹוָה בְּמַעֲשָׂיו: יְהִי שֵׁם יְהֹוָה מְבֹרָךְ מֵעַתָּה וְעַד־עוֹלָם: מִמִּזְרַח־שֶֽׁמֶשׁ עַד־מְבוֹאוֹ מְהֻלָּל שֵׁם יְהֹוָה: רָם עַל־כָּל־גּוֹיִם יְהֹוָה עַל הַשָּׁמַֽיִם כְּבוֹדוֹ: יְהֹוָה שִׁמְךָ לְעוֹלָם יְהֹוָה זִכְרְ֒ךָ לְדֹר־וָדֹר: יְהֹוָה בַּשָּׁמַֽיִם הֵכִין כִּסְאוֹ וּמַלְכוּתוֹ בַּכֹּל מָשָֽׁלָה: יִשְׂמְחוּ הַשָּׁמַֽיִם וְתָגֵל הָאָֽרֶץ וְיֹאמְ֒רוּ בַגּוֹיִם יְהֹוָה מָלָךְ: יְהֹוָה מֶֽלֶךְ יְהֹוָה מָלָךְ יְהֹוָה יִמְלֹךְ לְעֹלָם וָעֶד: יְהֹוָה מֶֽלֶךְ עוֹלָם וָעֶד אָבְ֒דוּ גוֹיִם מֵאַרְצוֹ: יְהֹוָה הֵפִיר עֲצַת־גּוֹיִם הֵנִיא מַחְשְׁבוֹת עַמִּים: רַבּוֹת מַחֲשָׁבוֹת בְּלֶב־אִישׁ וַעֲצַת יְהֹוָה הִיא תָקוּם: עֲצַת יְהֹוָה לְעוֹלָם תַּעֲמֹד מַחְשְׁבוֹת לִבּוֹ לְדֹר וָדֹר: כִּי הוּא אָמַר וַיֶּֽהִי הוּא־צִוָּה וַיַּעֲמֹד: כִּי בָחַר יְהֹוָה בְּצִיּוֹן אִוָּהּ לְמוֹשָׁב לוֹ: כִּי־יַעֲקֹב בָּחַר לוֹ יָהּ יִשְׂרָאֵל לִסְגֻלָּתוֹ: כִּי לֹא יִטּשׁ יְהֹוָה עַמּוֹ וְנַחֲלָתוֹ לֹא יַעֲזֹב: וְהוּא רַחוּם יְכַפֵּר עָוֹן וְלֹא־יַשְׁחִית וְהִרְבָּה לְהָשִׁיב אַפּוֹ וְלֹא־יָעִיר כָּל־חֲמָתוֹ: יְהֹוָה הוֹשִׁיעָה הַמֶּֽלֶךְ יַעֲנֵֽנוּ בְיוֹם־קָרְאֵֽנוּ           
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

        </Container>
                    <Credit>*Texts and translations courtesy of Sefaria</Credit>
                    </div>
    )
}

const Credit = styled.p`
color: #424242;
`;

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

export default YehiChevod;