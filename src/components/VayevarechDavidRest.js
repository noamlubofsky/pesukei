import React from "react";
import styled from "styled-components";

function VayevarechDavidRest({size, language}) {

    const hebrew = `
    אַתָּה־הוּא יְהֹוָה לְבַדֶּֽךָ, אַתָּה עָשִֽׂיתָ אֶת־הַשָּׁמַֽיִם שְׁמֵי הַשָּׁמַֽיִם וְכָל־צְבָאָם, הָאָֽרֶץ וְכָל־אֲשֶׁר עָלֶֽיהָ הַיַּמִּים וְכָל־אֲשֶׁר בָּהֶם, וְאַתָּה מְחַיֶּה אֶת־כֻּלָּם וּצְבָא הַשָּׁמַֽיִם לְךָ מִשְׁתַּחֲוִים: אַתָּה הוּא יְהֹוָה הָאֱלֹהִים אֲשֶׁר בָּחַֽרְתָּ בְּאַבְרָם וְהוֹצֵאתוֹ מֵאוּר כַּשְׂדִּים וְשַֽׂמְתָּ שְׁמוֹ אַבְרָהָם: וּמָצָֽאתָ אֶת־לְבָבוֹ נֶאֱמָן לְפָנֶֽיךָ
    `
    const english = `
    You alone are Adonoy; 
    You have made the skies, 
    the skies of skies and all their hosts,
     the earth and all that is upon it, 
    the seas and all that is in them; 
    and You give life to all of them,
     and the heavenly hosts bow before You. 
    You are Adonoy, 
    the God Who chose Avrom, 
    and brought him out of Ur Kasdim 
    and established his name (as) Avrohom.
     And You found his heart faithful before You.
        `
    const hebArray = 	[, "אַתָּה־הוּא יְהֹוָה לְבַדֶּֽךָ", "אַתָּה עָשִֽׂיתָ אֶת־הַשָּׁמַֽיִם", "שְׁמֵי הַשָּׁמַֽיִם וְכָל־צְבָאָם", "הָאָֽרֶץ וְכָל־אֲשֶׁר עָלֶֽיהָ", "הַיַּמִּים וְכָל־אֲשֶׁר בָּהֶם", "וְאַתָּה מְחַיֶּה אֶת־כֻּלָּם", "וּצְבָא הַשָּׁמַֽיִם לְךָ מִשְׁתַּחֲוִים", "אַתָּה הוּא יְהֹוָה", "הָאֱלֹהִים אֲשֶׁר בָּחַֽרְתָּ בְּאַבְרָם", "וְהוֹצֵאתוֹ מֵאוּר כַּשְׂדִּים", "וְשַֽׂמְתָּ שְׁמוֹ אַבְרָהָם", "וּמָצָֽאתָ אֶת־לְבָבוֹ נֶאֱמָן לְפָנֶֽיךָ"]
    const engArray = ["test", "You alone are Adonoy;", "You have made the skies,", "the skies of skies and all their hosts,", "the earth and all that is upon it,", "the seas and all that is in them;", "and You give life to all of them,", "and the heavenly hosts bow before You.", "You are Adonoy,", "the God Who chose Avrom,", "and brought him out of Ur Kasdim", "and established his name (as) Avrohom.", "And You found his heart faithful before You."]

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
            <Heading>Rest of וַיְבָֽרֶךְ דָּוִיד</Heading>

            {/* <Text fontSize={size}>
            אַתָּה־הוּא יְהֹוָה לְבַדֶּֽךָ, אַתָּה עָשִֽׂיתָ אֶת־הַשָּׁמַֽיִם שְׁמֵי הַשָּׁמַֽיִם וְכָל־צְבָאָם, הָאָֽרֶץ וְכָל־אֲשֶׁר עָלֶֽיהָ הַיַּמִּים וְכָל־אֲשֶׁר בָּהֶם, וְאַתָּה מְחַיֶּה אֶת־כֻּלָּם וּצְבָא הַשָּׁמַֽיִם לְךָ מִשְׁתַּחֲוִים: אַתָּה הוּא יְהֹוָה הָאֱלֹהִים אֲשֶׁר בָּחַֽרְתָּ בְּאַבְרָם וְהוֹצֵאתוֹ מֵאוּר כַּשְׂדִּים וְשַֽׂמְתָּ שְׁמוֹ אַבְרָהָם: וּמָצָֽאתָ אֶת־לְבָבוֹ נֶאֱמָן לְפָנֶֽיךָ        
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

export default VayevarechDavidRest;