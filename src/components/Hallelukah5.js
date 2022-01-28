import React from "react";
import styled from "styled-components";

function Hallelukah5({size, language}) {

    const hebrew = `הַלְ֒לוּיָהּ הַֽלְ֒לוּ־אֵל בְּקָדְשׁוֹ הַלְ֒לֽוּהוּ בִּרְקִֽיעַ עֻזּוֹ: הַלְ֒לֽוּהוּ בִּגְבוּרֹתָיו הַלְ֒לֽוּהוּ כְּרֹב גֻּדְלוֹ: הַלְ֒לֽוּהוּ בְּתֵֽקַע שׁוֹפָר הַלְ֒לֽוּהוּ בְּנֵֽבֶל וְכִנּוֹר: הַלְ֒לֽוּהוּ בְּתֹף וּמָחוֹל הַלְ֒לֽוּהוּ בְּמִנִּים וְעֻגָב: הַלְ֒לֽוּהוּ בְצִלְצְלֵי־שָֽׁמַע הַלְ֒לֽוּהוּ בְּצִלְצְלֵי תְרוּעָה: כֹּל הַנְּ֒שָׁמָה תְּהַלֵּל יָהּ הַלְ֒לוּיָהּ: כֹּל הַנְּ֒שָׁמָה תְּהַלֵּל יָהּ הַלְ֒לוּיָהּ        </Text>
    `
    const english = `Praise God. 
    Praise the Almighty in His Sanctuary
     Praise God in the firmament of His might 
    Praise Him for His mighty deeds; 
    Praise Him according to the abundance of His greatness. 
    Praise Him with the blowing of the shofar; 
    praise Him with lyre and harp.
     Praise Him with drum and dance. 
    Praise Him with stringed instruments and flute. 
    Praise Him with resounding cymbals. 
    Praise Him with clanging cymbals. 
    Let every soul praise God. Praise God. 
    Let every soul praise God. Praise God.
    `
    const hebArray = ["הַלְ֒לוּיָהּ", "הַֽלְ֒לוּ־אֵל בְּקָדְשׁוֹ", "הַלְ֒לֽוּהוּ בִּרְקִֽיעַ עֻזּוֹ", "הַלְ֒לֽוּהוּ בִּגְבוּרֹתָיו", "הַלְ֒לֽוּהוּ כְּרֹב גֻּדְלוֹ", "הַלְ֒לֽוּהוּ בְּתֵֽקַע שׁוֹפָר", "הַלְ֒לֽוּהוּ בְּנֵֽבֶל וְכִנּוֹר", "הַלְ֒לֽוּהוּ בְּתֹף וּמָחוֹל", "הַלְ֒לֽוּהוּ בְּמִנִּים וְעֻגָב", "הַלְ֒לֽוּהוּ בְצִלְצְלֵי־שָֽׁמַע", "הַלְ֒לֽוּהוּ בְּצִלְצְלֵי תְרוּעָה", "כֹּל הַנְּ֒שָׁמָה תְּהַלֵּל יָהּ הַלְ֒לוּיָהּ", "כֹּל הַנְּ֒שָׁמָה תְּהַלֵּל יָהּ הַלְ֒לוּיָהּ"]
    const engArray = ["Praise God.", "Praise the Almighty in His Sanctuary", "Praise God in the firmament of His might", "Praise Him for His mighty deeds;", "Praise Him according to the abundance of His greatness.", "Praise Him with the blowing of the shofar;", "praise Him with lyre and harp.", "Praise Him with drum and dance.", "Praise Him with stringed instruments and flute.", "Praise Him with resounding cymbals.", "Praise Him with clanging cymbals.", "Let every soul praise God. Praise God.", "Let every soul praise God. Praise God."]

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
            <Heading>5 הַלְ֒לוּיָהּ</Heading>

            {/* <Text fontSize={size}>
            הַלְ֒לוּיָהּ הַֽלְ֒לוּ־אֵל בְּקָדְשׁוֹ הַלְ֒לֽוּהוּ בִּרְקִֽיעַ עֻזּוֹ: הַלְ֒לֽוּהוּ בִּגְבוּרֹתָיו הַלְ֒לֽוּהוּ כְּרֹב גֻּדְלוֹ: הַלְ֒לֽוּהוּ בְּתֵֽקַע שׁוֹפָר הַלְ֒לֽוּהוּ בְּנֵֽבֶל וְכִנּוֹר: הַלְ֒לֽוּהוּ בְּתֹף וּמָחוֹל הַלְ֒לֽוּהוּ בְּמִנִּים וְעֻגָב: הַלְ֒לֽוּהוּ בְצִלְצְלֵי־שָֽׁמַע הַלְ֒לֽוּהוּ בְּצִלְצְלֵי תְרוּעָה: כֹּל הַנְּ֒שָׁמָה תְּהַלֵּל יָהּ הַלְ֒לוּיָהּ: כֹּל הַנְּ֒שָׁמָה תְּהַלֵּל יָהּ הַלְ֒לוּיָהּ        
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

const LinearText = styled.div`
font-size: ${props => props.fontSize}px;
text-align: right;
margin-right: 5vw;
margin-left: 2vw;
margin-bottom: 2vh;
font-family: 'Times New Roman', Georgia, serif;
`;

export default Hallelukah5;