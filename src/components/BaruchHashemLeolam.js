import React from "react";
import styled from "styled-components";

function BaruchHashemLeolam({size, language}) {

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

    // const linearArray = ["בָּרוּךְ יְהֹוָה לְעוֹלָם אָמֵן וְאָמֵן:", "Blessed is Adonoy forever, Amein and Amein!", "בָּרוּךְ יְהֹוָה מִצִּיּוֹן שֹׁכֵן יְרוּשָׁלָֽםִ הַלְ֒לוּיָהּ:", "Blessed is Adonoy from Zion, Who dwells in Jerusalem. Praise God.", "בָּרוּךְ יְהֹוָה אֱלֹהִים אֱלֹהֵי יִשְׂרָאֵל עֹשֵׂה נִפְלָאוֹת לְבַדּוֹ:", "Blessed is Adonoy, God, God of Israel Who alone performs wonders.", "וּבָרוּךְ שֵׁם כְּבוֹדוֹ לְעוֹלָם וְיִמָּלֵא כְבוֹדוֹ אֶת־כָּל־הָאָֽרֶץ אָמֵן וְאָמֵן:", "And blessed is the Name of His glory forever, and may His glory fill the whole earth. Amein and Amein!"]
    
    return(
        <Container>
            <Heading>בָּרוּךְ ה' לְעוֹלָם</Heading>

            {language === 'hebrew' || language === 'both' ?
            <Text fontSize={size}>
            בָּרוּךְ יְהֹוָה לְעוֹלָם אָמֵן וְאָמֵן: בָּרוּךְ יְהֹוָה מִצִּיּוֹן שֹׁכֵן יְרוּשָׁלָֽםִ הַלְ֒לוּיָהּ: בָּרוּךְ יְהֹוָה אֱלֹהִים אֱלֹהֵי יִשְׂרָאֵל עֹשֵׂה נִפְלָאוֹת לְבַדּוֹ: וּבָרוּךְ שֵׁם כְּבוֹדוֹ לְעוֹלָם וְיִמָּלֵא כְבוֹדוֹ אֶת־כָּל־הָאָֽרֶץ אָמֵן וְאָמֵן      
            </Text>
            : null}

            {language === 'english' || language === 'both' ?
            <Text fontSize={size}>
Blessed is Adonoy forever, Amein and Amein!41 Blessed is Adonoy from Zion, Who dwells in Jerusalem. Praise God.42 Blessed is Adonoy, God, God of Israel Who alone performs wonders.43 And blessed is the Name of His glory forever, and may His glory fill the whole earth. Amein and Amein!            </Text>
            : null}

            {language === 'linear' ? 
            linearArray.map(line => {
                return(
                <LinearText fontSize={size}>{line}</LinearText>
                )
            })
        : null}

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

export default BaruchHashemLeolam;