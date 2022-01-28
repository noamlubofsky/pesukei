import React from "react";
import styled from "styled-components";

function Hallelukah1({size, language}) {

    const hebrew = `הַלְ֒לוּיָהּ הַלְ֒לִי נַפְשִׁי אֶת־יְהֹוָה: אֲהַלְלָה יְהֹוָה בְּחַיָּי אֲזַמְּ֒רָה לֵאלֹהַי בְּעוֹדִי: אַל־תִּבְטְחוּ בִנְדִיבִים בְּבֶן־אָדָם שֶׁאֵין לוֹ תְשׁוּעָה: תֵּצֵא רוּחוֹ יָשֻׁב לְאַדְמָתוֹ בַּיּוֹם הַהוּא אָבְ֒דוּ עֶשְׁתֹּנֹתָיו: אַשְׁרֵי שֶׁאֵל יַעֲקֹב בְּעֶזְרוֹ, שִׂבְרוֹ עַל־יְהֹוָה אֱלֹהָיו: עֹשֶׂה שָׁמַֽיִם וָאָֽרֶץ אֶת־הַיָּם וְאֶת־כָּל־אֲשֶׁר־בָּם, הַשֹּׁמֵר אֱמֶת לְעוֹלָם: עֹשֶׂה מִשְׁפָּט לַעֲשׁוּקִים נֹתֵן לֶֽחֶם לָרְ֒עֵבִים יְהֹוָה מַתִּיר אֲסוּרִים: יְהֹוָה פֹּקֵֽחַ עִוְרִים יְהֹוָה זֹקֵף כְּפוּפִים יְהֹוָה אֹהֵב צַדִּיקִים: יְהֹוָה שֹׁמֵר אֶת־גֵּרִים יָתוֹם וְאַלְמָנָה יְעוֹדֵד וְדֶֽרֶךְ רְשָׁעִים יְעַוֵּת: יִמְלֹךְ יְהֹוָה לְעוֹלָם אֱלֹהַֽיִךְ צִיּוֹן לְדֹר וָדֹר הַלְ֒לוּיָהּ        
    `
    const english = `Praise God! 
    My soul, praise Adonoy.
     I will praise Adonoy with my life;
     I will sing to my God as long as I live. 
    Do not place your trust [even] in noble men,
     in man who has no [power of] deliverance. 
    [When] his spirit departs, he returns to his earth; 
    on that day his plans come to naught.
     Fortunate [is he] when the Almighty of Jacob is his help, 
    whose expectation is on Adonoy, his God. 
    He makes heaven and earth,
     the sea and all that is in them; 
    He keeps His promises faithfully forever. 
    He performs justice for the oppressed; 
    He gives bread to the hungry; 
    Adonoy releases the imprisoned. 
    Adonoy gives sight to the blind; 
    Adonoy straightens the bent.
     Adonoy loves the righteous.
     Adonoy protects strangers; 
    the orphan and widow He enables to stand firm; 
    and the way of the wicked He thwarts. 
    Adonoy will reign forever;
     your God, Zion, throughout all generations. Praise God.
    `
    const hebArray = ["הַלְ֒לוּיָהּ", "הַלְ֒לִי נַפְשִׁי אֶת־יְהֹוָה", "אֲהַלְלָה יְהֹוָה בְּחַיָּי", "אֲזַמְּ֒רָה לֵאלֹהַי בְּעוֹדִי", "אַל־תִּבְטְחוּ בִנְדִיבִים", "בְּבֶן־אָדָם שֶׁאֵין לוֹ תְשׁוּעָה", "תֵּצֵא רוּחוֹ יָשֻׁב לְאַדְמָתוֹ", "בַּיּוֹם הַהוּא אָבְ֒דוּ עֶשְׁתֹּנֹתָיו", "אַשְׁרֵי שֶׁאֵל יַעֲקֹב בְּעֶזְרוֹ", "שִׂבְרוֹ עַל־יְהֹוָה אֱלֹהָיו", "עֹשֶׂה שָׁמַֽיִם וָאָֽרֶץ", "אֶת־הַיָּם וְאֶת־כָּל־אֲשֶׁר־בָּם", "הַשֹּׁמֵר אֱמֶת לְעוֹלָם", "עֹשֶׂה מִשְׁפָּט לַעֲשׁוּקִים", "נֹתֵן לֶֽחֶם לָרְ֒עֵבִים", "יְהֹוָה מַתִּיר אֲסוּרִים", "יְהֹוָה פֹּקֵֽחַ עִוְרִים", "יְהֹוָה זֹקֵף כְּפוּפִים", "יְהֹוָה אֹהֵב צַדִּיקִים", "יְהֹוָה שֹׁמֵר אֶת־גֵּרִים", "יָתוֹם וְאַלְמָנָה יְעוֹדֵד", "וְדֶֽרֶךְ רְשָׁעִים יְעַוֵּת", "יִמְלֹךְ יְהֹוָה לְעוֹלָם", "אֱלֹהַֽיִךְ צִיּוֹן לְדֹר וָדֹר הַלְ֒לוּיָהּ", ]
    const engArray = ["Praise God!", "My soul, praise Adonoy.", "I will praise Adonoy with my life;", "I will sing to my God as long as I live.", "Do not place your trust [even] in noble men,", "in man who has no [power of] deliverance.", "[When] his spirit departs, he returns to his earth;", "on that day his plans come to naught.", "Fortunate [is he] when the Almighty of Jacob is his help,", "whose expectation is on Adonoy, his God.", "He makes heaven and earth,", "the sea and all that is in them;", "He keeps His promises faithfully forever.", "He performs justice for the oppressed;", "He gives bread to the hungry;", "Adonoy releases the imprisoned.", "Adonoy gives sight to the blind;", "Adonoy straightens the bent.", "Adonoy loves the righteous.", "Adonoy protects strangers;", "the orphan and widow He enables to stand firm;", "and the way of the wicked He thwarts.", "Adonoy will reign forever;", "your God, Zion, throughout all generations. Praise God."]

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
            <Heading>1 הַלְ֒לוּיָהּ</Heading>
            {/* <Text fontSize={size}>
            הַלְ֒לוּיָהּ הַלְ֒לִי נַפְשִׁי אֶת־יְהֹוָה: אֲהַלְלָה יְהֹוָה בְּחַיָּי אֲזַמְּ֒רָה לֵאלֹהַי בְּעוֹדִי: אַל־תִּבְטְחוּ בִנְדִיבִים בְּבֶן־אָדָם שֶׁאֵין לוֹ תְשׁוּעָה: תֵּצֵא רוּחוֹ יָשֻׁב לְאַדְמָתוֹ בַּיּוֹם הַהוּא אָבְ֒דוּ עֶשְׁתֹּנֹתָיו: אַשְׁרֵי שֶׁאֵל יַעֲקֹב בְּעֶזְרוֹ, שִׂבְרוֹ עַל־יְהֹוָה אֱלֹהָיו: עֹשֶׂה שָׁמַֽיִם וָאָֽרֶץ אֶת־הַיָּם וְאֶת־כָּל־אֲשֶׁר־בָּם, הַשֹּׁמֵר אֱמֶת לְעוֹלָם: עֹשֶׂה מִשְׁפָּט לַעֲשׁוּקִים נֹתֵן לֶֽחֶם לָרְ֒עֵבִים יְהֹוָה מַתִּיר אֲסוּרִים: יְהֹוָה פֹּקֵֽחַ עִוְרִים יְהֹוָה זֹקֵף כְּפוּפִים יְהֹוָה אֹהֵב צַדִּיקִים: יְהֹוָה שֹׁמֵר אֶת־גֵּרִים יָתוֹם וְאַלְמָנָה יְעוֹדֵד וְדֶֽרֶךְ רְשָׁעִים יְעַוֵּת: יִמְלֹךְ יְהֹוָה לְעוֹלָם אֱלֹהַֽיִךְ צִיּוֹן לְדֹר וָדֹר הַלְ֒לוּיָהּ        
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

export default Hallelukah1;