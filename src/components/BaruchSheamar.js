import React from "react";
import styled from "styled-components";

function BaruchSheamar({size, language}) {

    const hebrew = `בָּרוּךְ שֶׁאָמַר וְהָיָה הָעוֹלָם. בָּרוּךְ הוּא. בָּרוּךְ עוֹשֶׂה בְרֵאשִׁית. בָּרוּךְ אוֹמֵר וְעוֹשֶׂה. בָּרוּךְ גּוֹזֵר וּמְקַיֵּם. בָּרוּךְ מְרַחֵם עַל־הָאָֽרֶץ. בָּרוּךְ מְרַחֵם עַל־הַבְּ֒רִיּוֹת. בָּרוּךְ מְשַׁלֵּם שָׂכָר טוֹב לִירֵאָיו. בָּרוּךְ חַי לָעַד וְקַיָּם לָנֶֽצַח. בָּרוּךְ פּוֹדֶה וּמַצִּיל. בָּרוּךְ שְׁמוֹ. בָּרוּךְ אַתָּה יְהֹוָה אֱלֹהֵֽינוּ מֶֽלֶךְ הָעוֹלָם, הָאֵל הָאָב הָרַחֲמָן הַמְ֒הֻלָּל בְּפִי עַמּוֹ, מְשֻׁבָּח וּמְפֹאָר בִּלְשׁוֹן חֲסִידָיו וַעֲבָדָיו, וּבְשִׁירֵי דָוִד עַבְדֶּֽךָ. נְהַלֶּלְךָ יְהֹוָה אֱלֹהֵֽינוּ בִּשְׁבָחוֹת וּבִזְמִירוֹת, נְגַדֶּלְךָ וּנְשַׁבֵּחֲךָ וּנְפָאֶרְךָ, וְנַזְכִּיר שִׁמְךָ, וְנַמְלִיכְ֒ךָ מַלְכֵּֽנוּ אֱלֹהֵֽינוּ. יָחִיד חֵי הָעוֹלָמִים. מֶֽלֶךְ מְשֻׁבָּח וּמְפֹאָר עֲדֵי־עַד שְׁמוֹ הַגָּדוֹל. בָּרוּךְ אַתָּה יְהֹוָה, מֶֽלֶךְ מְהֻלָּל בַּתִּשְׁבָּחוֹת`
    const english = `Blessed is He Who spoke, and the world came into being, 
    blessed is He; 
    blessed is He Who maintains the creation; 
    blessed is He Who says and does;
     blessed is He Who decrees and fulfills; 
    blessed is He Who has compassion on the earth;
     blessed is He Who has compassion on the creatures; 
    blessed is He Who rewards well those who fear Him, 
    blessed is He Who lives forever and exists eternally; 
    blessed is He Who redeems and saves 
    blessed is His Name. 
    Blessed are You, Adonoy, our God, King of the Universe,
    the Almighty, the merciful Father,
     Who is verbally extolled by His people, 
    praised and glorified 
    by the tongue of His pious ones, and His servants, 
    and through the songs of David Your servant. 
    We will extoll You, Adonoy our God, 
    with praises and psalms; 
    we will exalt, praise, and glorify You;
     we will mention Your Name, 
    and proclaim You—our King, our God. 
    Unique One, Life of the worlds, 
    King, praised and glorified
     forever is His great Name. 
    Blessed are You, Adonoy, 
    King, Who is extolled with praises.
    `
    const hebArray = ["בָּרוּךְ שֶׁאָמַר וְהָיָה הָעוֹלָם", "בָּרוּךְ הוּא", "בָּרוּךְ עוֹשֶׂה בְרֵאשִׁית", "בָּרוּךְ אוֹמֵר וְעוֹשֶׂה", "בָּרוּךְ גּוֹזֵר וּמְקַיֵּם", "בָּרוּךְ מְרַחֵם עַל־הָאָֽרֶץ", "בָּרוּךְ מְרַחֵם עַל־הַבְּ֒רִיּוֹת", "בָּרוּךְ מְשַׁלֵּם שָׂכָר טוֹב לִירֵאָיו", "בָּרוּךְ חַי לָעַד וְקַיָּם לָנֶֽצַח", "בָּרוּךְ פּוֹדֶה וּמַצִּיל", "בָּרוּךְ שְׁמוֹ", "בָּרוּךְ אַתָּה יְהֹוָה אֱלֹהֵֽינוּ מֶֽלֶךְ הָעוֹלָם", "הָאֵל הָאָב הָרַחֲמָן", "הַמְ֒הֻלָּל בְּפִי עַמּוֹ", "מְשֻׁבָּח וּמְפֹאָר", "בִּלְשׁוֹן חֲסִידָיו וַעֲבָדָיו", "וּבְשִׁירֵי דָוִד עַבְדֶּֽךָ", "נְהַלֶּלְךָ יְהֹוָה אֱלֹהֵֽינוּ", "בִּשְׁבָחוֹת וּבִזְמִירוֹת", "נְגַדֶּלְךָ וּנְשַׁבֵּחֲךָ וּנְפָאֶרְךָ", "וְנַזְכִּיר שִׁמְךָ", "וְנַמְלִיכְ֒ךָ מַלְכֵּֽנוּ אֱלֹהֵֽינוּ", "יָחִיד חֵי הָעוֹלָמִים", "מֶֽלֶךְ מְשֻׁבָּח וּמְפֹאָר", "עֲדֵי־עַד שְׁמוֹ הַגָּדוֹל", "בָּרוּךְ אַתָּה יְהֹוָה", "מֶֽלֶךְ מְהֻלָּל בַּתִּשְׁבָּחוֹת"]
    const engArray = ["Blessed is He Who spoke, and the world came into being,", "blessed is He;", "blessed is He Who maintains the creation;", "blessed is He Who says and does;", "blessed is He Who decrees and fulfills;", "blessed is He Who has compassion on the earth;", "blessed is He Who has compassion on the creatures;", "blessed is He Who rewards well those who fear Him,", "blessed is He Who lives forever and exists eternally;", "blessed is He Who redeems and saves", "blessed is His Name.", "Blessed are You, Adonoy, our God, King of the Universe,", "the Almighty, the merciful Father,", "Who is verbally extolled by His people,", "praised and glorified", "by the tongue of His pious ones, and His servants,", "and through the songs of David Your servant.", "We will extoll You, Adonoy our God,", "with praises and psalms;", "we will exalt, praise, and glorify You;", "we will mention Your Name,", "and proclaim You—our King, our God.", "Unique One, Life of the worlds,", "King, praised and glorified", "forever is His great Name.", "Blessed are You, Adonoy,", "King, Who is extolled with praises."]

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
            <Heading>בָּרוּךְ שֶׁאָמַר</Heading>

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
-webkit-backface-visibility: hidden;

`;

const Heading = styled.h1`
text-align: right;
margin-right: 5vw;
font-family: 'Times New Roman', Georgia, serif;
`;

const Text = styled.div`
font-size: ${props => props.fontSize}px;
-webkit-backface-visibility: hidden;

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


export default BaruchSheamar;