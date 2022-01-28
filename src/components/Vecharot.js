import React from "react";
import styled from "styled-components";

function Vecharot({size, language}) {

    const hebrew = `            וְכָרוֹת עִמּוֹ הַבְּ֒רִית לָתֵת אֶת־אֶרֶץ הַכְּ֒נַֽעֲנִי הַחִתִּי הָֽאֱמֹרִי וְהַפְּ֒רִזִּי וְהַיְבוּסִי וְהַגִּרְגָּשִׁי לָתֵת לְזַרְעוֹ. וַתָּקֶם אֶת־דְּבָרֶיךָ כִּי צַדִּיק אָֽתָּה. וַתֵּרֶא אֶת־עֳנִי אֲבֹתֵינוּ בְּמִצְרָיִם וְאֶת־זַֽעֲקָתָם שָׁמַעְתָּ עַל־יַם־סֽוּף. וַתִּתֵּן אֹתֹת וּמֹֽפְ֒תִים בְּפַרְעֹה וּבְכָל־עֲבָדָיו וּבְכָל־עַם אַרְצוֹ כִּי יָדַעְתָּ כִּי הֵזִידוּ עֲלֵיהֶם. וַתַּֽעַשׂ־לְךָ שֵׁם כְּהַיּוֹם הַזֶּֽה. וְהַיָּם בָּקַעְתָּ לִפְנֵיהֶם וַיַּֽעַבְרוּ בְתוֹךְ־הַיָּם בַּיַּבָּשָׁה. וְֽאֶת־רֹדְ֒פֵיהֶם הִשְׁלַכְתָּ בִמְצוֹלֹת כְּמוֹ־אֶבֶן בְּמַיִם עַזִּֽים            
    `
    const english = `and You made the covenant with him54 to give the land of the Canaanites, the Hittites, the Amorites, the Perizites, the Jebusites, and the Girgashites, to give to his seed; and You kept Your word, for You are righteous. And You saw the affliction of our fathers in Egypt, and their cry You heard at the Sea of Reeds. And You imposed signs and wonders against Pharaoh and all his servants and all the people of his land, for You knew that they acted malevolently against them;55 and (thus) You have made a name for Yourself, like this day.56 And the sea, You split before them, and they went through the midst of the sea on the dry land; and their pursuers You hurled into the depths, like a stone into mighty waters.57`
    const hebArray = [, "וְכָרוֹת עִמּוֹ הַבְּ֒רִית", "לָתֵת אֶת־אֶרֶץ", "הַכְּ֒נַֽעֲנִי הַחִתִּי הָֽאֱמֹרִי וְהַפְּ֒רִזִּי וְהַיְבוּסִי וְהַגִּרְגָּשִׁי", "לָתֵת לְזַרְעוֹ", "וַתָּקֶם אֶת־דְּבָרֶיךָ כִּי צַדִּיק אָֽתָּה", "וַתֵּרֶא אֶת־עֳנִי אֲבֹתֵינוּ בְּמִצְרָיִם", "וְאֶת־זַֽעֲקָתָם שָׁמַעְתָּ עַל־יַם־סֽוּף", "וַתִּתֵּן אֹתֹת וּמֹֽפְ֒תִים בְּפַרְעֹה", "וּבְכָל־עֲבָדָיו וּבְכָל־עַם אַרְצוֹ", "כִּי יָדַעְתָּ כִּי הֵזִידוּ עֲלֵיהֶם", "וַתַּֽעַשׂ־לְךָ שֵׁם כְּהַיּוֹם הַזֶּֽה", "וְהַיָּם בָּקַעְתָּ לִפְנֵיהֶם", "וַיַּֽעַבְרוּ בְתוֹךְ־הַיָּם בַּיַּבָּשָׁה", "וְֽאֶת־רֹדְ֒פֵיהֶם הִשְׁלַכְתָּ בִמְצוֹלֹת", "כְּמוֹ־אֶבֶן בְּמַיִם עַזִּֽים"]
    const engArray = ["and You made the covenant with him", "to give the land", "of the Canaanites, the Hittites, the Amorites, the Perizites, the Jebusites, and the Girgashites,", "to give to his seed;", "and You kept Your word, for You are righteous.", "And You saw the affliction of our fathers in Egypt,", "and their cry You heard at the Sea of Reeds.", "And You imposed signs and wonders against Pharaoh", "and all his servants and all the people of his land,", "for You knew that they acted malevolently against them;", "and (thus) You have made a name for Yourself, like this day.", "And the sea, You split before them,", "and they went through the midst of the sea on the dry land;", "and their pursuers You hurled into the depths,", "like a stone into mighty waters."]

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
            <Heading>וְכָרוֹת עִמּוֹ הַבְּ֒רִית</Heading>

            {/* <Text fontSize={size}>
            וְכָרוֹת עִמּוֹ הַבְּ֒רִית לָתֵת אֶת־אֶרֶץ הַכְּ֒נַֽעֲנִי הַחִתִּי הָֽאֱמֹרִי וְהַפְּ֒רִזִּי וְהַיְבוּסִי וְהַגִּרְגָּשִׁי לָתֵת לְזַרְעוֹ. וַתָּקֶם אֶת־דְּבָרֶיךָ כִּי צַדִּיק אָֽתָּה. וַתֵּרֶא אֶת־עֳנִי אֲבֹתֵינוּ בְּמִצְרָיִם וְאֶת־זַֽעֲקָתָם שָׁמַעְתָּ עַל־יַם־סֽוּף. וַתִּתֵּן אֹתֹת וּמֹֽפְ֒תִים בְּפַרְעֹה וּבְכָל־עֲבָדָיו וּבְכָל־עַם אַרְצוֹ כִּי יָדַעְתָּ כִּי הֵזִידוּ עֲלֵיהֶם. וַתַּֽעַשׂ־לְךָ שֵׁם כְּהַיּוֹם הַזֶּֽה. וְהַיָּם בָּקַעְתָּ לִפְנֵיהֶם וַיַּֽעַבְרוּ בְתוֹךְ־הַיָּם בַּיַּבָּשָׁה. וְֽאֶת־רֹדְ֒פֵיהֶם הִשְׁלַכְתָּ בִמְצוֹלֹת כְּמוֹ־אֶבֶן בְּמַיִם עַזִּֽים            
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

export default Vecharot;