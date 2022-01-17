import React from "react";
import styled from "styled-components";

function Hallelukah4({size, language}) {

    const hebrew = `            הַלְ֒לוּיָהּ שִֽׁירוּ לַיהוָֹה שִׁיר חָדָשׁ תְּהִלָּתוֹ בִּקְהַל חֲסִידִים: יִשְׂמַח יִשְׂרָאֵל בְּעֹשָׂיו בְּנֵי־צִיּוֹן יָגִֽילוּ בְמַלְכָּם: יְהַלְ֒לוּ שְׁמוֹ בְמָחוֹל בְּתֹף וְכִנּוֹר יְזַמְּ֒רוּ־לוֹ: כִּי־רוֹצֶה יְהֹוָה בְּעַמּוֹ יְפָאֵר עֲנָוִים בִּישׁוּעָה: יַעְלְזוּ חֲסִידִים בְּכָבוֹד יְרַנְּנוּ עַל־מִשְׁכְּבוֹתָם: רוֹמְ֒מוֹת אֵל בִּגְרוֹנָם וְחֶֽרֶב פִּיפִיּוֹת בְּיָדָם: לַעֲשׂוֹת נְקָמָה בַגּוֹיִם תּוֹכֵחוֹת בַּלְאֻמִּים: לֶאְסֹר מַלְכֵיהֶם בְּזִקִּים וְנִכְבְּדֵיהֶם בְּכַבְלֵי בַרְזֶל: לַעֲשׂוֹת בָּהֶם מִשְׁפָּט כָּתוּב הָדָר הוּא לְכָל־חֲסִידָיו הַלְ֒לוּיָהּ          </Text>
    `
    const english = `Praise God. Sing a new song to Adonoy,28 His praise in the assembly of the pious. Israel will rejoice in its Maker; the children of Zion will exult in their King.29 They will praise His Name with dance; with drum and harp they will make music to Him. Because Adonoy desires His people; He will adorn the humble with deliverance.30 The pious will rejoice in honor; they will sing joyously upon their beds. High praises of the Almighty in their throats, and a double-edged sword in their hand.31 To perform vengeance upon the nations, chastisement upon the peoples. To bind their kings with chains, and their nobles with iron fetters. To execute upon them [the] written judgment; it32 is the splendor of all His pious ones. Praise God.`
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
                        <Heading>4 הַלְ֒לוּיָהּ</Heading>

            {/* <Text fontSize={size}>
            הַלְ֒לוּיָהּ שִֽׁירוּ לַיהוָֹה שִׁיר חָדָשׁ תְּהִלָּתוֹ בִּקְהַל חֲסִידִים: יִשְׂמַח יִשְׂרָאֵל בְּעֹשָׂיו בְּנֵי־צִיּוֹן יָגִֽילוּ בְמַלְכָּם: יְהַלְ֒לוּ שְׁמוֹ בְמָחוֹל בְּתֹף וְכִנּוֹר יְזַמְּ֒רוּ־לוֹ: כִּי־רוֹצֶה יְהֹוָה בְּעַמּוֹ יְפָאֵר עֲנָוִים בִּישׁוּעָה: יַעְלְזוּ חֲסִידִים בְּכָבוֹד יְרַנְּנוּ עַל־מִשְׁכְּבוֹתָם: רוֹמְ֒מוֹת אֵל בִּגְרוֹנָם וְחֶֽרֶב פִּיפִיּוֹת בְּיָדָם: לַעֲשׂוֹת נְקָמָה בַגּוֹיִם תּוֹכֵחוֹת בַּלְאֻמִּים: לֶאְסֹר מַלְכֵיהֶם בְּזִקִּים וְנִכְבְּדֵיהֶם בְּכַבְלֵי בַרְזֶל: לַעֲשׂוֹת בָּהֶם מִשְׁפָּט כָּתוּב הָדָר הוּא לְכָל־חֲסִידָיו הַלְ֒לוּיָהּ          
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

export default Hallelukah4;