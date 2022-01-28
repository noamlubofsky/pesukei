import React from "react";
import styled from "styled-components";

function MizmorLetodah({size, language}) {

    const hebrew = `מִזְמוֹר לְתוֹדָה הָרִֽיעוּ לַיהוָֹה כָּל־הָאָֽרֶץ: עִבְדוּ אֶת יְהֹוָה בְּשִׂמְחָה בֹּֽאוּ לְפָנָיו בִּרְנָנָה: דְּעוּ כִּי־יְהֹוָה הוּא אֱלֹהִים הוּא עָשָֽׂנוּ וְלוֹ (וְלֹא) אֲנַֽחְנוּ עַמּוֹ וְצֹאן מַרְעִיתוֹ: בֹּֽאוּ שְׁעָרָיו בְּתוֹדָה חֲצֵרֹתָיו בִּתְהִלָּה הֽוֹדוּ לוֹ בָּרְ֒כוּ שְׁמוֹ: כִּי־טוֹב יְהֹוָה לְעוֹלָם חַסְדּוֹ וְעַד־דֹּר וָדֹר אֱמוּנָתוֹ`
    const english = `A psalm of thanksgiving: 
    Shout for joy to Adonoy, everyone on earth.
     Serve Adony with joy, 
    come before Him with exultation.
     Know that Adonoy is God, 
    He has made us, and we are His, 
    His people and the sheep of His pasturing.
     Enter His gates with thanksgiving, 
    His courtyards with praise.
     Give thanks to Him, bless His Name 
    for Adonoy is good, His loving kindness is eternal, 
    and to every generation His faithfulness [extends.]
    `
    const hebArray = ["מִזְמוֹר לְתוֹדָה", "הָרִֽיעוּ לַיהוָֹה כָּל־הָאָֽרֶץ", "עִבְדוּ אֶת יְהֹוָה בְּשִׂמְחָה", "בֹּֽאוּ לְפָנָיו בִּרְנָנָה", "דְּעוּ כִּי־יְהֹוָה הוּא אֱלֹהִים", "הוּא עָשָֽׂנוּ וְלוֹ אֲנַֽחְנוּ", "עַמּוֹ וְצֹאן מַרְעִיתוֹ", "בֹּֽאוּ שְׁעָרָיו בְּתוֹדָה", "חֲצֵרֹתָיו בִּתְהִלָּה", "הֽוֹדוּ לוֹ בָּרְ֒כוּ שְׁמוֹ", "כִּי־טוֹב יְהֹוָה לְעוֹלָם חַסְדּוֹ", "וְעַד־דֹּר וָדֹר אֱמוּנָתוֹ"]
    const engArray = ["A psalm of thanksgiving:", "Shout for joy to Adonoy, everyone on earth.", "Serve Adony with joy,", "come before Him with exultation.", "Know that Adonoy is God,", "He has made us, and we are His,", "His people and the sheep of His pasturing.", "Enter His gates with thanksgiving,", "His courtyards with praise.", "Give thanks to Him, bless His Name", "for Adonoy is good, His loving kindness is eternal,", "and to every generation His faithfulness [extends.]", ]

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
            <Heading>מִזְמוֹר לְתוֹדָה</Heading>

            {/* <Text fontSize={size}>
            מִזְמוֹר לְתוֹדָה הָרִֽיעוּ לַיהוָֹה כָּל־הָאָֽרֶץ: עִבְדוּ אֶת יְהֹוָה בְּשִׂמְחָה בֹּֽאוּ לְפָנָיו בִּרְנָנָה: דְּעוּ כִּי־יְהֹוָה הוּא אֱלֹהִים הוּא עָשָֽׂנוּ וְלוֹ (וְלֹא) אֲנַֽחְנוּ עַמּוֹ וְצֹאן מַרְעִיתוֹ: בֹּֽאוּ שְׁעָרָיו בְּתוֹדָה חֲצֵרֹתָיו בִּתְהִלָּה הֽוֹדוּ לוֹ בָּרְ֒כוּ שְׁמוֹ: כִּי־טוֹב יְהֹוָה לְעוֹלָם חַסְדּוֹ וְעַד־דֹּר וָדֹר אֱמוּנָתוֹ          
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

export default MizmorLetodah;