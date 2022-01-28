import React from "react";
import styled from "styled-components";

function Ashrei({size, language}) {

    const hebrew = `אַשְׁרֵי יוֹשְׁ֒בֵי בֵיתֶֽךָ עוֹד יְהַלְלֽוּךָ סֶּֽלָה: אַשְׁרֵי הָעָם שֶׁכָּֽכָה לּוֹ אַשְׁרֵי הָעָם שֶׁיְהֹוָה אֱלֹהָיו: תְּהִלָּה לְדָוִד אֲרוֹמִמְךָ אֱלוֹהַי הַמֶּֽלֶךְ וַאֲבָרְ֒כָה שִׁמְךָ לְעוֹלָם וָעֶד: בְּכָל־יוֹם אֲבָרְ֒כֶֽךָּ וַאֲהַלְלָה שִׁמְךָ לְעוֹלָם וָעֶד: גָּדוֹל יְהֹוָה וּמְהֻלָּל מְאֹד וְלִגְדֻלָּתוֹ אֵין חֵֽקֶר: דּוֹר לְדוֹר יְשַׁבַּח מַעֲשֶׂיךָ וּגְבוּרֹתֶֽיךָ יַגִּֽידוּ: הֲדַר כְּבוֹד הוֹדֶֽךָ וְדִבְרֵי נִפְלְ֒אֹתֶֽיךָ אָשִֽׂיחָה: וֶעֱזוּז נוֹרְ֒אֹתֶֽיךָ יֹאמֵרוּ וּגְדֻלָּתְ֒ךָ אֲסַפְּ֒רֶֽנָּה: זֵֽכֶר רַב־טוּבְ֒ךָ יַבִּֽיעוּ וְצִדְקָתְ֒ךָ יְרַנֵּֽנוּ: חַנּוּן וְרַחוּם יְהֹוָה אֶֽרֶךְ אַפַּֽיִם וּגְדָל־חָֽסֶד: טוֹב־יְהֹוָה לַכֹּל וְרַחֲמָיו עַל־כָּל־מַעֲשָׂיו: יוֹדֽוּךָ יְהֹוָה כָּל־מַעֲשֶֽׂיךָ וַחֲסִידֶֽיךָ יְבָרְ֒כֽוּכָה: כְּבוֹד מַלְכוּתְ֒ךָ יֹאמֵרוּ וּגְבוּרָתְ֒ךָ יְדַבֵּֽרוּ: לְהוֹדִֽיעַ לִבְנֵי הָאָדָם גְּבוּרֹתָיו וּכְבוֹד הֲדַר מַלְכוּתוֹ: מַלְכוּתְ֒ךָ מַלְכוּת כָּל־עֹלָמִים וּמֶמְשַׁלְתְּ֒ךָ בְּכָל־דּוֹר וָדֹר: סוֹמֵךְ יְהֹוָה לְכָל־הַנֹּפְ֒לִים וְזוֹקֵף לְכָל־הַכְּ֒פוּפִים: עֵינֵי־כֹל אֵלֶֽיךָ יְשַׂבֵּֽרוּ וְאַתָּה נוֹתֵן־לָהֶם אֶת־אָכְלָם בְּעִתּוֹ: פּוֹתֵֽחַ אֶת־יָדֶֽךָ וּמַשְׂבִּֽיעַ לְכָל־חַי רָצוֹן: צַדִּיק יְהֹוָה בְּכָל־דְּרָכָיו וְחָסִיד בְּכָל־מַעֲשָׂיו: קָרוֹב יְהֹוָה לְכָל־קֹרְ֒אָיו לְכֹל אֲשֶׁר יִקְרָאֻֽהוּ בֶאֱמֶת: רְצוֹן־יְרֵאָיו יַעֲשֶׂה וְאֶת־שַׁוְעָתָם יִשְׁמַע וְיוֹשִׁיעֵם: שׁוֹמֵר יְהֹוָה אֶת־כָּל־אֹהֲבָיו וְאֵת כָּל־הָרְ֒שָׁעִים יַשְׁמִיד: תְּהִלַּת יְהֹוָה יְדַבֶּר פִּי וִיבָרֵךְ כָּל־בָּשָׂר שֵׁם קָדְשׁוֹ לְעוֹלָם וָעֶד: וַאֲנַֽחְנוּ נְבָרֵךְ יָהּ מֵעַתָּה וְעַד־עוֹלָם הַלְ֒לוּיָהּ`
    const english = `Fortunate are those who dwell in Your house;
    may they continue to praise You, Selah. 
   Fortunate is the people whose lot is thus; 
   fortunate is the people for whom Adonoy is their God. 
   A praise by David! 
   I will exalt You, my God, the King, 
   and bless Your Name forever and ever.
    Every day I will bless You 
   and extol Your Name forever and ever.
    Adonoy is great and highly extolled, 
   and His greatness is unfathomable. 
   One generation to another will praise Your works, 
   and Your mighty acts they will declare. 
   The splendor of Your glorious majesty, 
   and the words of Your wonders I will speak. 
   Of Your awesome might, they will speak, 
   and Your greatness I will recount.
    Mention of Your bountifulness they will express,
    and in Your righteousness joyfully exult.
    Adonoy is gracious and merciful,
    slow to anger and great in kindliness. 
   Adonoy is good to all, 
   His mercy encompasses all His works. 
   All Your works will thank You, Adonoy, 
   and Your pious ones will bless You.
    Of the honor of Your kingship, they will speak, 
   and Your might they will declare. 
   To reveal to men His mighty acts,
    and the glorious splendor of His kingship. 
   Your kingship is the kingship for all times, 
   and Your dominion is in every generation. 
   Adonoy supports all the fallen, 
   and straightens all the bent.
    The eyes of all look expectantly to You, 
   and You give them their food at its proper time.
    You open Your hand
    and satisfy the desire of every living being.
    Adonoy is just in all His ways
    and benevolent in all His deeds. 
   Adonoy is near to all who call upon Him,
    to all who call upon Him in truth.
    The will of those who fear Him, He fulfills; 
   He hears their cry and delivers them. 
   Adonoy watches over all those who love Him,
    and will destroy all the wicked. 
   Praise of Adonoy, my mouth will declare 
   and all flesh will bless His holy Name forever and ever. 
   And we will bless God 
   from now forever. Praise God.
   `
    const hebArray = ["אַשְׁרֵי יוֹשְׁ֒בֵי בֵיתֶֽךָ", "עוֹד יְהַלְלֽוּךָ סֶּֽלָה", "אַשְׁרֵי הָעָם שֶׁכָּֽכָה לּוֹ", "אַשְׁרֵי הָעָם שֶׁיְהֹוָה אֱלֹהָיו", "תְּהִלָּה לְדָוִד", "אֲרוֹמִמְךָ אֱלוֹהַי הַמֶּֽלֶךְ", "וַאֲבָרְ֒כָה שִׁמְךָ לְעוֹלָם וָעֶד", "בְּכָל־יוֹם אֲבָרְ֒כֶֽךָּ", "וַאֲהַלְלָה שִׁמְךָ לְעוֹלָם וָעֶד", "גָּדוֹל יְהֹוָה וּמְהֻלָּל מְאֹד", "וְלִגְדֻלָּתוֹ אֵין חֵֽקֶר", "דּוֹר לְדוֹר יְשַׁבַּח מַעֲשֶׂיךָ", "וּגְבוּרֹתֶֽיךָ יַגִּֽידוּ", "הֲדַר כְּבוֹד הוֹדֶֽךָ", "וְדִבְרֵי נִפְלְ֒אֹתֶֽיךָ אָשִֽׂיחָה", "וֶעֱזוּז נוֹרְ֒אֹתֶֽיךָ יֹאמֵרוּ", "וּגְדֻלָּתְ֒ךָ אֲסַפְּ֒רֶֽנָּה", "זֵֽכֶר רַב־טוּבְ֒ךָ יַבִּֽיעוּ", "וְצִדְקָתְ֒ךָ יְרַנֵּֽנוּ", "חַנּוּן וְרַחוּם יְהֹוָה", "אֶֽרֶךְ אַפַּֽיִם וּגְדָל־חָֽסֶד", "טוֹב־יְהֹוָה לַכֹּל", "וְרַחֲמָיו עַל־כָּל־מַעֲשָׂיו", "יוֹדֽוּךָ יְהֹוָה כָּל־מַעֲשֶֽׂיךָ", "וַחֲסִידֶֽיךָ יְבָרְ֒כֽוּכָה", "כְּבוֹד מַלְכוּתְ֒ךָ יֹאמֵרוּ", "וּגְבוּרָתְ֒ךָ יְדַבֵּֽרוּ", "לְהוֹדִֽיעַ לִבְנֵי הָאָדָם גְּבוּרֹתָיו", "וּכְבוֹד הֲדַר מַלְכוּתוֹ", "מַלְכוּתְ֒ךָ מַלְכוּת כָּל־עֹלָמִים", "וּמֶמְשַׁלְתְּ֒ךָ בְּכָל־דּוֹר וָדֹר", "סוֹמֵךְ יְהֹוָה לְכָל־הַנֹּפְ֒לִים", "וְזוֹקֵף לְכָל־הַכְּ֒פוּפִים", "עֵינֵי־כֹל אֵלֶֽיךָ יְשַׂבֵּֽרוּ", "וְאַתָּה נוֹתֵן־לָהֶם אֶת־אָכְלָם בְּעִתּוֹ", "פּוֹתֵֽחַ אֶת־יָדֶֽךָ", "וּמַשְׂבִּֽיעַ לְכָל־חַי רָצוֹן", "צַדִּיק יְהֹוָה בְּכָל־דְּרָכָיו", "וְחָסִיד בְּכָל־מַעֲשָׂיו", "קָרוֹב יְהֹוָה לְכָל־קֹרְ֒אָיו", "לְכֹל אֲשֶׁר יִקְרָאֻֽהוּ בֶאֱמֶת", "רְצוֹן־יְרֵאָיו יַעֲשֶׂה", "וְאֶת־שַׁוְעָתָם יִשְׁמַע וְיוֹשִׁיעֵם", "שׁוֹמֵר יְהֹוָה אֶת־כָּל־אֹהֲבָיו", "וְאֵת כָּל־הָרְ֒שָׁעִים יַשְׁמִיד", "תְּהִלַּת יְהֹוָה יְדַבֶּר פִּי", "וִיבָרֵךְ כָּל־בָּשָׂר שֵׁם קָדְשׁוֹ לְעוֹלָם וָעֶד", "וַאֲנַֽחְנוּ נְבָרֵךְ יָהּ", "מֵעַתָּה וְעַד־עוֹלָם הַלְ֒לוּיָהּ"]
    const engArray = ["Fortunate are those who dwell in Your house;", "may they continue to praise You, Selah.", "Fortunate is the people whose lot is thus;", "fortunate is the people for whom Adonoy is their God.", "A praise by David!", "I will exalt You, my God, the King,", "and bless Your Name forever and ever.", "Every day I will bless You", "and extol Your Name forever and ever.", "Adonoy is great and highly extolled,", "and His greatness is unfathomable.", "One generation to another will praise Your works,", "and Your mighty acts they will declare.", "The splendor of Your glorious majesty,", "and the words of Your wonders I will speak.", "Of Your awesome might, they will speak,", "and Your greatness I will recount.", "Mention of Your bountifulness they will express,", "and in Your righteousness joyfully exult.", "Adonoy is gracious and merciful,", "slow to anger and great in kindliness.", "Adonoy is good to all,", "His mercy encompasses all His works.", "All Your works will thank You, Adonoy,", "and Your pious ones will bless You.", "Of the honor of Your kingship, they will speak,", "and Your might they will declare.", "To reveal to men His mighty acts,", "and the glorious splendor of His kingship.", "Your kingship is the kingship for all times,", "and Your dominion is in every generation.", "Adonoy supports all the fallen,", "and straightens all the bent.", "The eyes of all look expectantly to You,", "and You give them their food at its proper time.", "You open Your hand", "and satisfy the desire of every living being.", "Adonoy is just in all His ways", "and benevolent in all His deeds.", "Adonoy is near to all who call upon Him,", "to all who call upon Him in truth.", "The will of those who fear Him, He fulfills;", "He hears their cry and delivers them.", "Adonoy watches over all those who love Him,", "and will destroy all the wicked.", "Praise of Adonoy, my mouth will declare", "and all flesh will bless His holy Name forever and ever.", "And we will bless God", "from now forever. Praise God."]

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
            <Heading>אַשְׁרֵי</Heading>
            {/* <Text fontSize={size}>
            אַשְׁרֵי יוֹשְׁ֒בֵי בֵיתֶֽךָ עוֹד יְהַלְלֽוּךָ סֶּֽלָה: אַשְׁרֵי הָעָם שֶׁכָּֽכָה לּוֹ אַשְׁרֵי הָעָם שֶׁיְהֹוָה אֱלֹהָיו: תְּהִלָּה לְדָוִד אֲרוֹמִמְךָ אֱלוֹהַי הַמֶּֽלֶךְ וַאֲבָרְ֒כָה שִׁמְךָ לְעוֹלָם וָעֶד: בְּכָל־יוֹם אֲבָרְ֒כֶֽךָּ וַאֲהַלְלָה שִׁמְךָ לְעוֹלָם וָעֶד: גָּדוֹל יְהֹוָה וּמְהֻלָּל מְאֹד וְלִגְדֻלָּתוֹ אֵין חֵֽקֶר: דּוֹר לְדוֹר יְשַׁבַּח מַעֲשֶׂיךָ וּגְבוּרֹתֶֽיךָ יַגִּֽידוּ: הֲדַר כְּבוֹד הוֹדֶֽךָ וְדִבְרֵי נִפְלְ֒אֹתֶֽיךָ אָשִֽׂיחָה: וֶעֱזוּז נוֹרְ֒אֹתֶֽיךָ יֹאמֵרוּ וּגְדֻלָּתְ֒ךָ אֲסַפְּ֒רֶֽנָּה: זֵֽכֶר רַב־טוּבְ֒ךָ יַבִּֽיעוּ וְצִדְקָתְ֒ךָ יְרַנֵּֽנוּ: חַנּוּן וְרַחוּם יְהֹוָה אֶֽרֶךְ אַפַּֽיִם וּגְדָל־חָֽסֶד: טוֹב־יְהֹוָה לַכֹּל וְרַחֲמָיו עַל־כָּל־מַעֲשָׂיו: יוֹדֽוּךָ יְהֹוָה כָּל־מַעֲשֶֽׂיךָ וַחֲסִידֶֽיךָ יְבָרְ֒כֽוּכָה: כְּבוֹד מַלְכוּתְ֒ךָ יֹאמֵרוּ וּגְבוּרָתְ֒ךָ יְדַבֵּֽרוּ: לְהוֹדִֽיעַ לִבְנֵי הָאָדָם גְּבוּרֹתָיו וּכְבוֹד הֲדַר מַלְכוּתוֹ: מַלְכוּתְ֒ךָ מַלְכוּת כָּל־עֹלָמִים וּמֶמְשַׁלְתְּ֒ךָ בְּכָל־דּוֹר וָדֹר: סוֹמֵךְ יְהֹוָה לְכָל־הַנֹּפְ֒לִים וְזוֹקֵף לְכָל־הַכְּ֒פוּפִים: עֵינֵי־כֹל אֵלֶֽיךָ יְשַׂבֵּֽרוּ וְאַתָּה נוֹתֵן־לָהֶם אֶת־אָכְלָם בְּעִתּוֹ: פּוֹתֵֽחַ אֶת־יָדֶֽךָ וּמַשְׂבִּֽיעַ לְכָל־חַי רָצוֹן: צַדִּיק יְהֹוָה בְּכָל־דְּרָכָיו וְחָסִיד בְּכָל־מַעֲשָׂיו: קָרוֹב יְהֹוָה לְכָל־קֹרְ֒אָיו לְכֹל אֲשֶׁר יִקְרָאֻֽהוּ בֶאֱמֶת: רְצוֹן־יְרֵאָיו יַעֲשֶׂה וְאֶת־שַׁוְעָתָם יִשְׁמַע וְיוֹשִׁיעֵם: שׁוֹמֵר יְהֹוָה אֶת־כָּל־אֹהֲבָיו וְאֵת כָּל־הָרְ֒שָׁעִים יַשְׁמִיד: תְּהִלַּת יְהֹוָה יְדַבֶּר פִּי וִיבָרֵךְ כָּל־בָּשָׂר שֵׁם קָדְשׁוֹ לְעוֹלָם וָעֶד: וַאֲנַֽחְנוּ נְבָרֵךְ יָהּ מֵעַתָּה וְעַד־עוֹלָם הַלְ֒לוּיָהּ            
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

export default Ashrei;