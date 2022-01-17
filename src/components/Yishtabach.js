import React from "react";
import styled from "styled-components";

function Yishtabach({size, language}) {

    const hebrew = `            יִשְׁתַּבַּח שִׁמְךָ לָעַד מַלְכֵּנוּ. הָאֵל הַמֶּֽלֶךְ הַגָּדוֹל וְהַקָּדוֹשׁ בַּשָּׁמַֽיִם וּבָאָֽרֶץ. כִּי לְךָ נָאֶה יְהֹוָה אֱלֹהֵֽינוּ וֵאלֹהֵי אֲבוֹתֵֽינוּ. שִׁיר וּשְׁבָחָה הַלֵּל וְזִמְרָה. עֹז וּמֶמְשָׁלָה. נֶֽצַח גְּדֻלָּה וּגְבוּרָה. תְּהִלָּה וְתִפְאֶֽרֶת. קְדֻשָּׁה וּמַלְכוּת. בְּרָכוֹת וְהוֹדָאוֹת מֵעַתָּה וְעַד־עוֹלָם. בָּרוּךְ אַתָּה יְהֹוָה אֵל מֶֽלֶךְ גָּדוֹל בַּתִּשְׁבָּחוֹת. אֵל הַהוֹדָאוֹת אֲדוֹן הַנִּפְלָאוֹת הַבּוֹחֵר בְּשִׁירֵי זִמְרָה. מֶֽלֶךְ אֵל חֵי הָעוֹלָמִים           
    `
    const english = `Praised be Your Name forever,1 our King, Almighty the great and holy King in heaven2 and on earth. For to You it is fitting [to offer] Adonoy, our God, and God of our fathers, song and praise, glorification and hymns, [to proclaim Your] strength and dominion, victory, grandeur, and might, praise and glory, holiness and sovereignty, blessings and thanksgivings,3 from now and forever. Blessed are You, Adonoy, Almighty, King [Who is] great in [our] praise Almighty, of [to Whom we offer our] thanksgiving, Master of [Whom we praise for His] wonders,4 the Selector of song-hymns, You are the King, Almighty, Life of [all] the worlds.`
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
            <Heading>יִשְׁתַּבַּח</Heading>

            {/* <Text fontSize={size}>
            יִשְׁתַּבַּח שִׁמְךָ לָעַד מַלְכֵּנוּ. הָאֵל הַמֶּֽלֶךְ הַגָּדוֹל וְהַקָּדוֹשׁ בַּשָּׁמַֽיִם וּבָאָֽרֶץ. כִּי לְךָ נָאֶה יְהֹוָה אֱלֹהֵֽינוּ וֵאלֹהֵי אֲבוֹתֵֽינוּ. שִׁיר וּשְׁבָחָה הַלֵּל וְזִמְרָה. עֹז וּמֶמְשָׁלָה. נֶֽצַח גְּדֻלָּה וּגְבוּרָה. תְּהִלָּה וְתִפְאֶֽרֶת. קְדֻשָּׁה וּמַלְכוּת. בְּרָכוֹת וְהוֹדָאוֹת מֵעַתָּה וְעַד־עוֹלָם. בָּרוּךְ אַתָּה יְהֹוָה אֵל מֶֽלֶךְ גָּדוֹל בַּתִּשְׁבָּחוֹת. אֵל הַהוֹדָאוֹת אֲדוֹן הַנִּפְלָאוֹת הַבּוֹחֵר בְּשִׁירֵי זִמְרָה. מֶֽלֶךְ אֵל חֵי הָעוֹלָמִים           
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

export default Yishtabach;