import React from "react";
import styled from "styled-components";

function VayevarechDavidRest({size, language}) {

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
            <Heading>Rest of וַיְבָֽרֶךְ דָּוִיד</Heading>

            <Text fontSize={size}>
            אַתָּה־הוּא יְהֹוָה לְבַדֶּֽךָ, אַתָּה עָשִֽׂיתָ אֶת־הַשָּׁמַֽיִם שְׁמֵי הַשָּׁמַֽיִם וְכָל־צְבָאָם, הָאָֽרֶץ וְכָל־אֲשֶׁר עָלֶֽיהָ הַיַּמִּים וְכָל־אֲשֶׁר בָּהֶם, וְאַתָּה מְחַיֶּה אֶת־כֻּלָּם וּצְבָא הַשָּׁמַֽיִם לְךָ מִשְׁתַּחֲוִים: אַתָּה הוּא יְהֹוָה הָאֱלֹהִים אֲשֶׁר בָּחַֽרְתָּ בְּאַבְרָם וְהוֹצֵאתוֹ מֵאוּר כַּשְׂדִּים וְשַֽׂמְתָּ שְׁמוֹ אַבְרָהָם: וּמָצָֽאתָ אֶת־לְבָבוֹ נֶאֱמָן לְפָנֶֽיךָ        
            </Text>
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

export default VayevarechDavidRest;