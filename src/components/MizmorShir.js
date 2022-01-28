import React from "react";
import styled from "styled-components";

function MizmorShir({size, language}) {

    const hebrew = `מִזְמוֹר שִׁיר־חֲנֻכַּת הַבַּֽיִת לְדָוִד: אֲרוֹמִמְךָ יְהֹוָה כִּי דִלִּיתָֽנִי וְלֹא־שִׂמַּֽחְתָּ אֹיְ֒בַי לִי: יְהֹוָה אֱלֹהָי שִׁוַּעְתִּי אֵלֶֽיךָ וַתִּרְפָּאֵֽנִי: יְהֹוָה הֶעֱלִֽיתָ מִן־שְׁאוֹל נַפְשִׁי חִיִּיתַֽנִי מִיָּרְ֒דִי־בוֹר: זַמְּ֒רוּ לַיהוָֹה חֲסִידָיו וְהוֹדוּ לְזֵֽכֶר קָדְשׁוֹ: כִּי רֶֽגַע בְּאַפּוֹ חַיִּים בִּרְצוֹנוֹ בָּעֶֽרֶב יָלִין בֶּֽכִי וְלַבֹּֽקֶר רִנָּה: וַאֲנִי אָמַֽרְתִּי בְשַׁלְוִי בַּל־אֶמּוֹט לְעוֹלָם: יְהֹוָה בִּרְצוֹנְ֒ךָ הֶעֱמַֽדְתָּה לְהַרְרִי עֹז הִסְתַּֽרְתָּ פָנֶֽיךָ הָיִֽיתִי נִבְהָל: אֵלֶֽיךָ יְהֹוָה אֶקְרָא וְאֶל־אֲדֹנָי אֶתְחַנָּן: מַה־בֶּֽצַע בְּדָמִי בְּרִדְתִּי אֶל שָֽׁחַת הֲיוֹדְ֒ךָ עָפָר הֲיַגִּיד אֲמִתֶּֽךָ: שְׁמַע יְהֹוָה וְחָנֵּֽנִי יְהֹוָה הֱיֵה־עֹזֵר לִי: הָפַֽכְתָּ מִסְפְּדִי לְמָחוֹל לִי פִּתַּחְתָּ שַׂקִּי וַתְּ֒אַזְּ֒רֵֽנִי שִׂמְחָה: לְמַֽעַן יְזַמֶּרְךָ כָבוֹד וְלֹא יִדֹּם יְהֹוָה אֱלֹהַי לְעוֹלָם אוֹדֶֽךָּ`
    const english = `A Psalm, a song for the inauguration of the Temple, by David.1 I will exalt You, Adonoy, for You have upheld me,2 and not let my foes rejoice over me. Adonoy, my God, I cried out to You, and You healed me. Adonoy, You have raised my soul from the lower world. You have kept me alive, lest I descend to the Pit. Sing to Adonoy, [you,] His pious ones, and give thanks to His holy Name.3 For His anger lasts only a moment,4 but there is [long] life, in His conciliation. In the evening, one retires weeping, but in the morning there is [a cry of] joy! I said, in my serenity, I would never be moved. [But,] Adonoy, it was Your will [alone] that established my mountain as a stronghold. When You concealed Your Presence, I was terrified. To You, Adonoy, I called, and my Master I beseeched. What gain is there in [the shedding of] my blood? In my going down to destruction? Will the dust acknowledge You? Will it proclaim Your truth? Hear [me] Adonoy, and be gracious to me, Adonoy, be a help to me. You have turned my mourning into dancing, You have loosened my sackcloth and supported me with joy. In order that my soul5 might sing to You and not be stilled, Adonoy, my God, forever will I thank You.`
    const hebArray = ["מִזְמוֹר שִׁיר־חֲנֻכַּת הַבַּֽיִת לְדָוִד", "אֲרוֹמִמְךָ יְהֹוָה כִּי דִלִּיתָֽנִי", "וְלֹא־שִׂמַּֽחְתָּ אֹיְ֒בַי לִי", "יְהֹוָה אֱלֹהָי שִׁוַּעְתִּי אֵלֶֽיךָ וַתִּרְפָּאֵֽנִי", "יְהֹוָה הֶעֱלִֽיתָ מִן־שְׁאוֹל נַפְשִׁי", "חִיִּיתַֽנִי מִיָּרְ֒דִי־בוֹר", "זַמְּ֒רוּ לַיהוָֹה חֲסִידָיו", "וְהוֹדוּ לְזֵֽכֶר קָדְשׁוֹ", "כִּי רֶֽגַע בְּאַפּוֹ חַיִּים בִּרְצוֹנוֹ", "בָּעֶֽרֶב יָלִין בֶּֽכִי וְלַבֹּֽקֶר רִנָּה", "וַאֲנִי אָמַֽרְתִּי בְשַׁלְוִי בַּל־אֶמּוֹט לְעוֹלָם", "יְהֹוָה בִּרְצוֹנְ֒ךָ הֶעֱמַֽדְתָּה לְהַרְרִי עֹז", "הִסְתַּֽרְתָּ פָנֶֽיךָ הָיִֽיתִי נִבְהָל", "אֵלֶֽיךָ יְהֹוָה אֶקְרָא וְאֶל־אֲדֹנָי אֶתְחַנָּן", "מַה־בֶּֽצַע בְּדָמִי בְּרִדְתִּי אֶל שָֽׁחַת", "הֲיוֹדְ֒ךָ עָפָר הֲיַגִּיד אֲמִתֶּֽךָ", "שְׁמַע יְהֹוָה וְחָנֵּֽנִי יְהֹוָה הֱיֵה־עֹזֵר לִי", "הָפַֽכְתָּ מִסְפְּדִי לְמָחוֹל לִי", "פִּתַּחְתָּ שַׂקִּי וַתְּ֒אַזְּ֒רֵֽנִי שִׂמְחָה", "לְמַֽעַן יְזַמֶּרְךָ כָבוֹד וְלֹא יִדֹּם", "יְהֹוָה אֱלֹהַי לְעוֹלָם אוֹדֶֽךָּ"]
    const engArray = ["A Psalm, a song for the inauguration of the Temple, by David.", "I will exalt You, Adonoy, for You have upheld me,", "and not let my foes rejoice over me.", "Adonoy, my God, I cried out to You, and You healed me.", "Adonoy, You have raised my soul from the lower world.", "You have kept me alive, lest I descend to the Pit.", "Sing to Adonoy, [you,] His pious ones,", "and give thanks to His holy Name.", "For His anger lasts only a moment, but there is [long] life, in His conciliation.", "In the evening, one retires weeping, but in the morning there is [a cry of] joy!", "I said, in my serenity, I would never be moved.", "[But,] Adonoy, it was Your will [alone] that established my mountain as a stronghold.", "When You concealed Your Presence, I was terrified.", "To You, Adonoy, I called, and my Master I beseeched.", "What gain is there in [the shedding of] my blood? In my going down to destruction?", "Will the dust acknowledge You? Will it proclaim Your truth?", "Hear [me] Adonoy, and be gracious to me, Adonoy, be a help to me.", "You have turned my mourning into dancing,", "You have loosened my sackcloth and supported me with joy.", "In order that my soul. might sing to You and not be stilled,", "Adonoy, my God, forever will I thank You."]

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
        <div>
        <Container>
            <Heading>מִזְמוֹר שִׁיר</Heading>

            {language === 'hebrew' || language === 'both' ?
            <Text fontSize={size}>
            בָּרוּךְ שֶׁאָמַר וְהָיָה הָעוֹלָם. בָּרוּךְ הוּא. בָּרוּךְ עוֹשֶׂה בְרֵאשִׁית. בָּרוּךְ אוֹמֵר וְעוֹשֶׂה. בָּרוּךְ גּוֹזֵר וּמְקַיֵּם. בָּרוּךְ מְרַחֵם עַל־הָאָֽרֶץ. בָּרוּךְ מְרַחֵם עַל־הַבְּ֒רִיּוֹת. בָּרוּךְ מְשַׁלֵּם שָׂכָר טוֹב לִירֵאָיו. בָּרוּךְ חַי לָעַד וְקַיָּם לָנֶֽצַח. בָּרוּךְ פּוֹדֶה וּמַצִּיל. בָּרוּךְ שְׁמוֹ. בָּרוּךְ אַתָּה יְהֹוָה אֱלֹהֵֽינוּ מֶֽלֶךְ הָעוֹלָם הָאֵל הָאָב הָרַחֲמָן הַמְ֒הֻלָּל בְּפִי עַמּוֹ מְשֻׁבָּח וּמְפֹאָר בִּלְשׁוֹן חֲסִידָיו וַעֲבָדָיו וּבְשִׁירֵי דָוִד עַבְדֶּֽךָ. נְהַלֶּלְךָ יְהֹוָה אֱלֹהֵֽינוּ בִּשְׁבָחוֹת וּבִזְמִירוֹת נְגַדֶּלְךָ וּנְשַׁבֵּחֲךָ וּנְפָאֶרְךָ וְנַזְכִּיר שִׁמְךָ וְנַמְלִיכְ֒ךָ מַלְכֵּֽנוּ אֱלֹהֵֽינוּ. יָחִיד חֵי הָעוֹלָמִים. מֶֽלֶךְ מְשֻׁבָּח וּמְפֹאָר עֲדֵי־עַד שְׁמוֹ הַגָּדוֹל. בָּרוּךְ אַתָּה יְהֹוָה מֶֽלֶךְ מְהֻלָּל בַּתִּשְׁבָּחוֹת          
            </Text>
            : null}

            {language === 'english' || language === 'both' ?
            <Text fontSize={size}>
A Psalm, a song for the inauguration of the Temple, by David. 
I will exalt You, Adonoy, for You have upheld me, 
and not let my foes rejoice over me. 
Adonoy, my God, I cried out to You, and You healed me. 
Adonoy, You have raised my soul from the lower world. 
You have kept me alive, lest I descend to the Pit. 
Sing to Adonoy, [you,] His pious ones, 
and give thanks to His holy Name.
For His anger lasts only a moment, but there is [long] life, in His conciliation. 
In the evening, one retires weeping, but in the morning there is [a cry of] joy! 
I said, in my serenity, I would never be moved.
 [But,] Adonoy, it was Your will [alone] that established my mountain as a stronghold. 
When You concealed Your Presence, I was terrified. 
To You, Adonoy, I called, and my Master I beseeched.
 What gain is there in [the shedding of] my blood? In my going down to destruction? 
Will the dust acknowledge You? Will it proclaim Your truth? 
Hear [me] Adonoy, and be gracious to me, Adonoy, be a help to me. 
You have turned my mourning into dancing, 
You have loosened my sackcloth and supported me with joy. 
In order that my soul. might sing to You and not be stilled, 
Adonoy, my God, forever will I thank You.
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

export default MizmorShir;