import React from "react";
import styled from "styled-components";

function Vayosha({size, language}) {

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
            <Text fontSize={size}>
            וַיּֽוֹשַׁע יְהֹוָה בַּיּוֹם הַהוּא אֶת־יִשְׂרָאֵל מִיַּד מִצְרָֽיִם וַיַּרְא יִשְׂרָאֵל אֶת־מִצְרַֽיִם מֵת עַל־שְׂפַת הַיָּם: וַיַּרְא יִשְׂרָאֵל אֶת־הַיָּד הַגְּ֒דֹלָה אֲשֶׁר עָשָׂה יְהֹוָה בְּמִצְרַֽיִם וַיִּירְ֒אוּ הָעָם אֶת יְהֹוָה וַיַּאֲמִֽינוּ בַּיהוָֹה וּבְמשֶׁה עַבְדּוֹ          
            </Text>
        </Container>
    )
}

const Container = styled.div`
min-height: 64vh;
`;

const Text = styled.div`
font-size: 30px;
text-align: right;
margin-right: 2vw;
margin-left: 2vw;
margin-bottom: 5vh;
`;

export default Vayosha;