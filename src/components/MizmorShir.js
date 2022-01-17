import React from "react";
import styled from "styled-components";

function MizmorShir({size, language}) {

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

    //   const linearArray = [, ":מִזְמוֹר שִׁיר־חֲנֻכַּת הַבַּֽיִת לְדָוִד", "Psalm, a song for the inauguration of the Temple, by David.", "אֲרוֹמִמְךָ יְהֹוָה כִּי דִלִּיתָֽנִי", "I will exalt You, Adonoy, for You have upheld me,", ":וְלֹא־שִׂמַּֽחְתָּ אֹיְ֒בַי לִי", "and not let my foes rejoice over me.", ":יְהֹוָה אֱלֹהָי שִׁוַּעְתִּי אֵלֶֽיךָ וַתִּרְפָּאֵֽנִי", "Adonoy, my God, I cried out to You, and You healed me.", "יְהֹוָה הֶעֱלִֽיתָ מִן־שְׁאוֹל נַפְשִׁי", "Adonoy, You have raised my soul from the lower world.", ":חִיִּיתַֽנִי מִיָּרְ֒דִי־בוֹר", "You have kept me alive, lest I descend to the Pit.", ":זַמְּ֒רוּ לַיהוָֹה חֲסִידָיו וְהוֹדוּ לְזֵֽכֶר קָדְשׁוֹ", "Sing to Adonoy, [you,] His pious ones, and give thanks to His holy Name.", "כִּי רֶֽגַע בְּאַפּוֹ", "For His anger lasts only a moment,", "חַיִּים בִּרְצוֹנוֹ", "but there is [long] life, in His conciliation.", "בָּעֶֽרֶב יָלִין בֶּֽכִי", "In the evening, one retires weeping,", ":וְלַבֹּֽקֶר רִנָּה", "but in the morning there is [a cry of] joy!", ":וַאֲנִי אָמַֽרְתִּי בְשַׁלְוִי בַּל־אֶמּוֹט לְעוֹלָם", "I said, in my serenity, I would never be moved.", "יְהֹוָה בִּרְצוֹנְ֒ךָ הֶעֱמַֽדְתָּה לְהַרְרִי עֹז", "But,] Adonoy, it was Your will [alone] that established my mountain as a stronghold.", ":הִסְתַּֽרְתָּ פָנֶֽיךָ הָיִֽיתִי נִבְהָל", "When You concealed Your Presence, I was terrified.", ":אֵלֶֽיךָ יְהֹוָה אֶקְרָא וְאֶל־אֲדֹנָי אֶתְחַנָּן", "To You, Adonoy, I called, and my Master I beseeched.", "מַה־בֶּֽצַע בְּדָמִי", "What gain is there in [the shedding of] my blood?", "בְּרִדְתִּי אֶל שָֽׁחַת", "In my going down to destruction?", ":הֲיוֹדְ֒ךָ עָפָר הֲיַגִּיד אֲמִתֶּֽךָ", "Will the dust acknowledge You? Will it proclaim Your truth?", ":שְׁמַע יְהֹוָה וְחָנֵּֽנִי יְהֹוָה הֱיֵה־עֹזֵר לִי", "Hear [me] Adonoy, and be gracious to me, Adonoy, be a help to me.", "הָפַֽכְתָּ מִסְפְּדִי לְמָחוֹל לִי", "You have turned my mourning into dancing,", ":פִּתַּחְתָּ שַׂקִּי וַתְּ֒אַזְּ֒רֵֽנִי שִׂמְחָה", "You have loosened my sackcloth and supported me with joy.", "לְמַֽעַן יְזַמֶּרְךָ כָבוֹד וְלֹא יִדֹּם", "In order that my soul might sing to You and not be stilled,", ":ֿיְהֹוָה אֱלֹהַי לְעוֹלָם אוֹדֶֽךָּ", "Adonoy, my God, forever will I thank You."]

    return(
        <Container>
            <Heading>מִזְמוֹר שִׁיר</Heading>

            {language === 'hebrew' || language === 'both' ?
            <Text fontSize={size}>
            בָּרוּךְ שֶׁאָמַר וְהָיָה הָעוֹלָם. בָּרוּךְ הוּא. בָּרוּךְ עוֹשֶׂה בְרֵאשִׁית. בָּרוּךְ אוֹמֵר וְעוֹשֶׂה. בָּרוּךְ גּוֹזֵר וּמְקַיֵּם. בָּרוּךְ מְרַחֵם עַל־הָאָֽרֶץ. בָּרוּךְ מְרַחֵם עַל־הַבְּ֒רִיּוֹת. בָּרוּךְ מְשַׁלֵּם שָׂכָר טוֹב לִירֵאָיו. בָּרוּךְ חַי לָעַד וְקַיָּם לָנֶֽצַח. בָּרוּךְ פּוֹדֶה וּמַצִּיל. בָּרוּךְ שְׁמוֹ. בָּרוּךְ אַתָּה יְהֹוָה אֱלֹהֵֽינוּ מֶֽלֶךְ הָעוֹלָם הָאֵל הָאָב הָרַחֲמָן הַמְ֒הֻלָּל בְּפִי עַמּוֹ מְשֻׁבָּח וּמְפֹאָר בִּלְשׁוֹן חֲסִידָיו וַעֲבָדָיו וּבְשִׁירֵי דָוִד עַבְדֶּֽךָ. נְהַלֶּלְךָ יְהֹוָה אֱלֹהֵֽינוּ בִּשְׁבָחוֹת וּבִזְמִירוֹת נְגַדֶּלְךָ וּנְשַׁבֵּחֲךָ וּנְפָאֶרְךָ וְנַזְכִּיר שִׁמְךָ וְנַמְלִיכְ֒ךָ מַלְכֵּֽנוּ אֱלֹהֵֽינוּ. יָחִיד חֵי הָעוֹלָמִים. מֶֽלֶךְ מְשֻׁבָּח וּמְפֹאָר עֲדֵי־עַד שְׁמוֹ הַגָּדוֹל. בָּרוּךְ אַתָּה יְהֹוָה מֶֽלֶךְ מְהֻלָּל בַּתִּשְׁבָּחוֹת          
            </Text>
            : null}

            {language === 'english' || language === 'both' ?
            <Text fontSize={size}>
            Blessed is He Who spoke, and the world came into being, blessed is He; blessed is He Who maintains the creation; blessed is He Who says and does;1 blessed is He Who decrees and fulfills;2 blessed is He Who has compassion on the earth; blessed is He Who has compassion on the creatures;3 blessed is He Who rewards well those who fear Him, blessed is He Who lives forever and exists eternally; blessed is He Who redeems and saves4 blessed is His Name. Blessed are You, Adonoy, our God, King of the Universe, the Almighty, the merciful Father, Who is verbally extolled by His people, praised and glorified by the tongue of His pious ones, and His servants, and through the songs of David Your servant. We will extoll You, Adonoy our God, with praises and psalms; we will exalt, praise, and glorify You; we will mention Your Name, and proclaim You—our King, our God. Unique One, Life of the worlds, King, praised and glorified forever is His great Name. Blessed are You, Adonoy, King, Who is extolled with praises.
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

export default MizmorShir;