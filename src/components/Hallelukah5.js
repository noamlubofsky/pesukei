import React from "react";
import styled from "styled-components";

function Hallelukah5({size, language}) {

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
                        <Heading>5 הַלְ֒לוּיָהּ</Heading>

            <Text fontSize={size}>
            הַלְ֒לוּיָהּ הַֽלְ֒לוּ־אֵל בְּקָדְשׁוֹ הַלְ֒לֽוּהוּ בִּרְקִֽיעַ עֻזּוֹ: הַלְ֒לֽוּהוּ בִּגְבוּרֹתָיו הַלְ֒לֽוּהוּ כְּרֹב גֻּדְלוֹ: הַלְ֒לֽוּהוּ בְּתֵֽקַע שׁוֹפָר הַלְ֒לֽוּהוּ בְּנֵֽבֶל וְכִנּוֹר: הַלְ֒לֽוּהוּ בְּתֹף וּמָחוֹל הַלְ֒לֽוּהוּ בְּמִנִּים וְעֻגָב: הַלְ֒לֽוּהוּ בְצִלְצְלֵי־שָֽׁמַע הַלְ֒לֽוּהוּ בְּצִלְצְלֵי תְרוּעָה: כֹּל הַנְּ֒שָׁמָה תְּהַלֵּל יָהּ הַלְ֒לוּיָהּ: כֹּל הַנְּ֒שָׁמָה תְּהַלֵּל יָהּ הַלְ֒לוּיָהּ        </Text>
        </Container>
    )
}

const Container = styled.div`
min-height: 62vh;
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

export default Hallelukah5;