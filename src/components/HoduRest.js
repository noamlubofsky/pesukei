import React from "react";
import styled from "styled-components";

function HoduRest({size, language}) {

    const hebrew = 
    `
    וְהוּא רַחוּם יְכַפֵּר עָוֹן וְלֹא־יַשְׁחִית וְהִרְבָּה לְהָשִׁיב אַפּוֹ וְלֹא־יָעִיר כָּל־חֲמָתוֹ: אַתָּה יְהֹוָה לֹא־תִכְלָא רַחֲמֶֽיךָ מִמֶּֽנִּי חַסְדְּ֒ךָ וַאֲמִתְּ֒ךָ תָּמִיד יִצְּ֒רֽוּנִי: זְכֹר רַחֲמֶֽיךָ יְהֹוָה וַחֲסָדֶֽיךָ כִּי מֵעוֹלָם הֵֽמָּה: תְּנוּ עֹז לֵאלֹהִים עַל־יִשְׂרָאֵל גַּאֲוָתוֹ וְעֻזּוֹ בַּשְּׁ֒חָקִים: נוֹרָא אֱלֹהִים מִמִּקְדָּשֶֽׁיךָ אֵל יִשְׂרָאֵל הוּא נֹתֵן עֹז וְתַעֲצֻמוֹת לָעָם בָּרוּךְ אֱלֹהִים: אֵל־נְקָמוֹת יְהֹוָה אֵל נְקָמוֹת הוֹפִֽיעַ: הִנָּשֵׂא שֹׁפֵט הָאָֽרֶץ הָשֵׁב גְּמוּל עַל־גֵּאִים: לַיהוָֹה הַיְשׁוּעָה עַל־עַמְּ֒ךָ בִרְכָתֶֽךָ סֶּֽלָה: יְהֹוָה צְבָאוֹת עִמָּנוּ מִשְׂגָּב לָֽנוּ אֱלֹהֵי יַעֲקֹב סֶֽלָה: יְהֹוָה צְבָאוֹת אַשְׁרֵי אָדָם בֹּטֵֽחַ בָּךְ: יְהֹוָה הוֹשִֽׁיעָה הַמֶּֽלֶךְ יַעֲנֵֽנוּ בְיוֹם־קָרְאֵֽנוּ
    הוֹשִֽׁיעָה אֶת־עַמֶּֽךָ וּבָרֵךְ אֶת־נַחֲלָתֶֽךָ וּרְעֵם וְנַשְּׂ֒אֵם עַד־הָעוֹלָם: נַפְשֵֽׁנוּ חִכְּ֒תָה לַיהוָֹה עֶזְרֵֽנוּ וּמָגִנֵּֽנוּ הוּא: כִּי־בוֹ יִשְׂמַח לִבֵּֽנוּ כִּי בְשֵׁם קָדְשׁוֹ בָטָֽחְנוּ: יְהִי־חַסְדְּ֒ךָ יְהֹוָה עָלֵֽינוּ כַּאֲשֶׁר יִחַֽלְנוּ לָךְ: הַרְאֵֽנוּ יְהֹוָה חַסְדֶּֽךָ וְיֶשְׁעֲךָ תִּֽתֶּן־לָֽנוּ: קֽוּמָה עֶזְרָֽתָה לָּנוּ וּפְדֵֽנוּ לְמַֽעַן חַסְדֶּֽךָ: אָנֹכִי יְהֹוָה אֱלֹהֶֽיךָ הַמַּעַלְךָ מֵאֶֽרֶץ מִצְרָֽיִם הַרְחֶב־פִּֽיךָ וַאֲמַלְאֵֽהוּ: אַשְׁרֵי הָעָם שֶׁכָּֽכָה לּוֹ אַשְׁרֵי הָעָם שֶׁיְהֹוָה אֱלֹהָיו: וַאֲנִי בְּחַסְדְּ֒ךָ בָטַֽחְתִּי יָגֵל לִבִּי בִּישׁוּעָתֶֽךָ אָשִֽׁירָה לַיהוָֹה כִּי גָמַל עָלָי`
    const english = `
    And He, the Merciful One, atones iniquity and does not destroy; He frequently withdraws His anger and does not arouse all His rage. You, Adonoy, withhold not Your mercy from me; may Your kindness and Your truth18 always protect me. Remember Your mercies Adonoy and kindnesses, for they are from the beginning of the world.19 Give might to God,20 His pride (majesty) hovers over Israel, and His might is in the clouds. You are awesome, God, from Your Sanctuaries,21 Almighty of Israel—He grants might and power to the people; blessed is God. Almighty of vengeance, Adonoy, Almighty of vengeance, reveal Yourself.22 Arise, Judge of the earth! Repay the arrogant their just reward. Deliverance is Adonoy’s.23 Upon Your people is Your blessing. Selah. Adonoy of Hosts is with us, a stronghold for us is the God of Jacob. Selah. Adonoy of Hosts! Fortunate is the man who trusts in You. Adonoy, deliver [us]. The King will answer us on the day we call.
    Deliver Your people and bless Your inheritance, tend them and uplift them forever.24 Our soul yearned for Adonoy, our help and our shield is He. For in Him our hearts will rejoice, for in His holy Name we trusted. May Your kindness, Adonoy, be upon us, as we have waited for You. Show us Your kindness, Adonoy, and grant25 us Your deliverance. Arise—come to our aid, and redeem us for the sake of Your kindness. I am Adonoy, Your God, Who brought you up from the land of Egypt; open your mouth wide, and I will fill it.26 Fortunate is the people whose lot is thus, fortunate is the people for whom Adonoy is their God. In Your loving kindness I trust, My heart will exult in Your deliverance; I will sing to Adonoy, for He dealt kindly with me.`
    const hebArray = ["וְהוּא רַחוּם יְכַפֵּר עָוֹן וְלֹא־יַשְׁחִית", "וְהִרְבָּה לְהָשִׁיב אַפּוֹ", "וְלֹא־יָעִיר כָּל־חֲמָתוֹ", "אַתָּה יְהֹוָה לֹא־תִכְלָא רַחֲמֶֽיךָ מִמֶּֽנִּי", "חַסְדְּ֒ךָ וַאֲמִתְּ֒ךָ תָּמִיד יִצְּ֒רֽוּנִי", "זְכֹר רַחֲמֶֽיךָ יְהֹוָה וַחֲסָדֶֽיךָ", "כִּי מֵעוֹלָם הֵֽמָּה", "תְּנוּ עֹז לֵאלֹהִים", "עַל־יִשְׂרָאֵל גַּאֲוָתוֹ", "וְעֻזּוֹ בַּשְּׁ֒חָקִים", "נוֹרָא אֱלֹהִים מִמִּקְדָּשֶֽׁיךָ", "אֵל יִשְׂרָאֵל הוּא נֹתֵן עֹז וְתַעֲצֻמוֹת לָעָם", "בָּרוּךְ אֱלֹהִים", "אֵל־נְקָמוֹת יְהֹוָה", "אֵל נְקָמוֹת הוֹפִֽיעַ", "הִנָּשֵׂא שֹׁפֵט הָאָֽרֶץ", "הָשֵׁב גְּמוּל עַל־גֵּאִים", "לַיהוָֹה הַיְשׁוּעָה", "עַל־עַמְּ֒ךָ בִרְכָתֶֽךָ סֶּֽלָה", "יְהֹוָה צְבָאוֹת עִמָּנוּ", "מִשְׂגָּב לָֽנוּ אֱלֹהֵי יַעֲקֹב סֶֽלָה", "יְהֹוָה צְבָאוֹת", "אַשְׁרֵי אָדָם בֹּטֵֽחַ בָּךְ", "יְהֹוָה הוֹשִֽׁיעָה", "הַמֶּֽלֶךְ יַעֲנֵֽנוּ בְיוֹם־קָרְאֵֽנוּ", "הוֹשִֽׁיעָה אֶת־עַמֶּֽךָ", "וּבָרֵךְ אֶת־נַחֲלָתֶֽךָ", "וּרְעֵם וְנַשְּׂ֒אֵם עַד־הָעוֹלָם", "נַפְשֵֽׁנוּ חִכְּ֒תָה לַיהוָֹה", "עֶזְרֵֽנוּ וּמָגִנֵּֽנוּ הוּא", "כִּי־בוֹ יִשְׂמַח לִבֵּֽנוּ", "כִּי בְשֵׁם קָדְשׁוֹ בָטָֽחְנוּ", "יְהִי־חַסְדְּ֒ךָ יְהֹוָה עָלֵֽינוּ", "כַּאֲשֶׁר יִחַֽלְנוּ לָךְ", "הַרְאֵֽנוּ יְהֹוָה חַסְדֶּֽךָ", "וְיֶשְׁעֲךָ תִּֽתֶּן־לָֽנוּ", "קֽוּמָה עֶזְרָֽתָה לָּנוּ", "וּפְדֵֽנוּ לְמַֽעַן חַסְדֶּֽךָ", "אָנֹכִי יְהֹוָה אֱלֹהֶֽיךָ", "הַמַּעַלְךָ מֵאֶֽרֶץ מִצְרָֽיִם", "הַרְחֶב־פִּֽיךָ וַאֲמַלְאֵֽהוּ", "אַשְׁרֵי הָעָם שֶׁכָּֽכָה לּוֹ", "אַשְׁרֵי הָעָם שֶׁיְהֹוָה אֱלֹהָיו", "וַאֲנִי בְּחַסְדְּ֒ךָ בָטַֽחְתִּי", "יָגֵל לִבִּי בִּישׁוּעָתֶֽךָ", "אָשִֽׁירָה לַיהוָֹה כִּי גָמַל עָלָי"]
    const engArray = ["And He, the Merciful One, atones iniquity and does not destroy;", "He frequently withdraws His anger", "and does not arouse all His rage.", "You, Adonoy, withhold not Your mercy from me;", "may Your kindness and Your truth always protect me.", "Remember Your mercies Adonoy and kindnesses,", "for they are from the beginning of the world.", "Give might to God,", "His pride (majesty) hovers over Israel,", "and His might is in the clouds.", "You are awesome, God, from Your Sanctuaries,", "Almighty of Israel—He grants might and power to the people;", "blessed is God.", "Almighty of vengeance, Adonoy,", "Almighty of vengeance, reveal Yourself.", "Arise, Judge of the earth!", "Repay the arrogant their just reward.", "Deliverance is Adonoy’s.", "Upon Your people is Your blessing. Selah.", "Adonoy of Hosts is with us,", "a stronghold for us is the God of Jacob. Selah.", "Adonoy of Hosts!", "Fortunate is the man who trusts in You.", "Adonoy, deliver [us].", "The King will answer us on the day we call.", "Deliver Your people", "and bless Your inheritance,", "tend them and uplift them forever.", "Our soul yearned for Adonoy,", "our help and our shield is He.", "For in Him our hearts will rejoice,", "for in His holy Name we trusted.", "May Your kindness, Adonoy, be upon us,", "as we have waited for You.", "Show us Your kindness, Adonoy,", "and grant us Your deliverance.", "Arise—come to our aid,", "and redeem us for the sake of Your kindness.", "I am Adonoy, Your God,", "Who brought you up from the land of Egypt;", "open your mouth wide, and I will fill it.", "Fortunate is the people whose lot is thus,", "fortunate is the people for whom Adonoy is their God.", "In Your loving kindness I trust,", "My heart will exult in Your deliverance;", "I will sing to Adonoy, for He dealt kindly with me."]

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
            <Heading>Rest of הוֹדוּ</Heading>

            {/* <Text fontSize={size}>
            וְהוּא רַחוּם יְכַפֵּר עָוֹן וְלֹא־יַשְׁחִית וְהִרְבָּה לְהָשִׁיב אַפּוֹ וְלֹא־יָעִיר כָּל־חֲמָתוֹ: אַתָּה יְהֹוָה לֹא־תִכְלָא רַחֲמֶֽיךָ מִמֶּֽנִּי חַסְדְּ֒ךָ וַאֲמִתְּ֒ךָ תָּמִיד יִצְּ֒רֽוּנִי: זְכֹר רַחֲמֶֽיךָ יְהֹוָה וַחֲסָדֶֽיךָ כִּי מֵעוֹלָם הֵֽמָּה: תְּנוּ עֹז לֵאלֹהִים עַל־יִשְׂרָאֵל גַּאֲוָתוֹ וְעֻזּוֹ בַּשְּׁ֒חָקִים: נוֹרָא אֱלֹהִים מִמִּקְדָּשֶֽׁיךָ אֵל יִשְׂרָאֵל הוּא נֹתֵן עֹז וְתַעֲצֻמוֹת לָעָם בָּרוּךְ אֱלֹהִים: אֵל־נְקָמוֹת יְהֹוָה אֵל נְקָמוֹת הוֹפִֽיעַ: הִנָּשֵׂא שֹׁפֵט הָאָֽרֶץ הָשֵׁב גְּמוּל עַל־גֵּאִים: לַיהוָֹה הַיְשׁוּעָה עַל־עַמְּ֒ךָ בִרְכָתֶֽךָ סֶּֽלָה: יְהֹוָה צְבָאוֹת עִמָּנוּ מִשְׂגָּב לָֽנוּ אֱלֹהֵי יַעֲקֹב סֶֽלָה: יְהֹוָה צְבָאוֹת אַשְׁרֵי אָדָם בֹּטֵֽחַ בָּךְ: יְהֹוָה הוֹשִֽׁיעָה הַמֶּֽלֶךְ יַעֲנֵֽנוּ בְיוֹם־קָרְאֵֽנוּ
            </Text>
            <Text fontSize={size}>
            הוֹשִֽׁיעָה אֶת־עַמֶּֽךָ וּבָרֵךְ אֶת־נַחֲלָתֶֽךָ וּרְעֵם וְנַשְּׂ֒אֵם עַד־הָעוֹלָם: נַפְשֵֽׁנוּ חִכְּ֒תָה לַיהוָֹה עֶזְרֵֽנוּ וּמָגִנֵּֽנוּ הוּא: כִּי־בוֹ יִשְׂמַח לִבֵּֽנוּ כִּי בְשֵׁם קָדְשׁוֹ בָטָֽחְנוּ: יְהִי־חַסְדְּ֒ךָ יְהֹוָה עָלֵֽינוּ כַּאֲשֶׁר יִחַֽלְנוּ לָךְ: הַרְאֵֽנוּ יְהֹוָה חַסְדֶּֽךָ וְיֶשְׁעֲךָ תִּֽתֶּן־לָֽנוּ: קֽוּמָה עֶזְרָֽתָה לָּנוּ וּפְדֵֽנוּ לְמַֽעַן חַסְדֶּֽךָ: אָנֹכִי יְהֹוָה אֱלֹהֶֽיךָ הַמַּעַלְךָ מֵאֶֽרֶץ מִצְרָֽיִם הַרְחֶב־פִּֽיךָ וַאֲמַלְאֵֽהוּ: אַשְׁרֵי הָעָם שֶׁכָּֽכָה לּוֹ אַשְׁרֵי הָעָם שֶׁיְהֹוָה אֱלֹהָיו: וַאֲנִי בְּחַסְדְּ֒ךָ בָטַֽחְתִּי יָגֵל לִבִּי בִּישׁוּעָתֶֽךָ אָשִֽׁירָה לַיהוָֹה כִּי גָמַל עָלָי
            </Text>

            <Text fontSize={size}>
            And He, the Merciful One, atones iniquity and does not destroy; He frequently withdraws His anger and does not arouse all His rage. You, Adonoy, withhold not Your mercy from me; may Your kindness and Your truth18 always protect me. Remember Your mercies Adonoy and kindnesses, for they are from the beginning of the world.19 Give might to God,20 His pride (majesty) hovers over Israel, and His might is in the clouds. You are awesome, God, from Your Sanctuaries,21 Almighty of Israel—He grants might and power to the people; blessed is God. Almighty of vengeance, Adonoy, Almighty of vengeance, reveal Yourself.22 Arise, Judge of the earth! Repay the arrogant their just reward. Deliverance is Adonoy’s.23 Upon Your people is Your blessing. Selah. Adonoy of Hosts is with us, a stronghold for us is the God of Jacob. Selah. Adonoy of Hosts! Fortunate is the man who trusts in You. Adonoy, deliver [us]. The King will answer us on the day we call.            
            </Text>
            <Text fontSize={size}>
            Deliver Your people and bless Your inheritance, tend them and uplift them forever.24 Our soul yearned for Adonoy, our help and our shield is He. For in Him our hearts will rejoice, for in His holy Name we trusted. May Your kindness, Adonoy, be upon us, as we have waited for You. Show us Your kindness, Adonoy, and grant25 us Your deliverance. Arise—come to our aid, and redeem us for the sake of Your kindness. I am Adonoy, Your God, Who brought you up from the land of Egypt; open your mouth wide, and I will fill it.26 Fortunate is the people whose lot is thus, fortunate is the people for whom Adonoy is their God. In Your loving kindness I trust, My heart will exult in Your deliverance; I will sing to Adonoy, for He dealt kindly with me.27           
            </Text> */}

{language === 'hebrew' || language === 'both' ?
            <div>
                <Text fontSize={size}>
            וְהוּא רַחוּם יְכַפֵּר עָוֹן וְלֹא־יַשְׁחִית וְהִרְבָּה לְהָשִׁיב אַפּוֹ וְלֹא־יָעִיר כָּל־חֲמָתוֹ: אַתָּה יְהֹוָה לֹא־תִכְלָא רַחֲמֶֽיךָ מִמֶּֽנִּי חַסְדְּ֒ךָ וַאֲמִתְּ֒ךָ תָּמִיד יִצְּ֒רֽוּנִי: זְכֹר רַחֲמֶֽיךָ יְהֹוָה וַחֲסָדֶֽיךָ כִּי מֵעוֹלָם הֵֽמָּה: תְּנוּ עֹז לֵאלֹהִים עַל־יִשְׂרָאֵל גַּאֲוָתוֹ וְעֻזּוֹ בַּשְּׁ֒חָקִים: נוֹרָא אֱלֹהִים מִמִּקְדָּשֶֽׁיךָ אֵל יִשְׂרָאֵל הוּא נֹתֵן עֹז וְתַעֲצֻמוֹת לָעָם בָּרוּךְ אֱלֹהִים: אֵל־נְקָמוֹת יְהֹוָה אֵל נְקָמוֹת הוֹפִֽיעַ: הִנָּשֵׂא שֹׁפֵט הָאָֽרֶץ הָשֵׁב גְּמוּל עַל־גֵּאִים: לַיהוָֹה הַיְשׁוּעָה עַל־עַמְּ֒ךָ בִרְכָתֶֽךָ סֶּֽלָה: יְהֹוָה צְבָאוֹת עִמָּנוּ מִשְׂגָּב לָֽנוּ אֱלֹהֵי יַעֲקֹב סֶֽלָה: יְהֹוָה צְבָאוֹת אַשְׁרֵי אָדָם בֹּטֵֽחַ בָּךְ: יְהֹוָה הוֹשִֽׁיעָה הַמֶּֽלֶךְ יַעֲנֵֽנוּ בְיוֹם־קָרְאֵֽנוּ
            </Text>
            <Text fontSize={size}>
            הוֹשִֽׁיעָה אֶת־עַמֶּֽךָ וּבָרֵךְ אֶת־נַחֲלָתֶֽךָ וּרְעֵם וְנַשְּׂ֒אֵם עַד־הָעוֹלָם: נַפְשֵֽׁנוּ חִכְּ֒תָה לַיהוָֹה עֶזְרֵֽנוּ וּמָגִנֵּֽנוּ הוּא: כִּי־בוֹ יִשְׂמַח לִבֵּֽנוּ כִּי בְשֵׁם קָדְשׁוֹ בָטָֽחְנוּ: יְהִי־חַסְדְּ֒ךָ יְהֹוָה עָלֵֽינוּ כַּאֲשֶׁר יִחַֽלְנוּ לָךְ: הַרְאֵֽנוּ יְהֹוָה חַסְדֶּֽךָ וְיֶשְׁעֲךָ תִּֽתֶּן־לָֽנוּ: קֽוּמָה עֶזְרָֽתָה לָּנוּ וּפְדֵֽנוּ לְמַֽעַן חַסְדֶּֽךָ: אָנֹכִי יְהֹוָה אֱלֹהֶֽיךָ הַמַּעַלְךָ מֵאֶֽרֶץ מִצְרָֽיִם הַרְחֶב־פִּֽיךָ וַאֲמַלְאֵֽהוּ: אַשְׁרֵי הָעָם שֶׁכָּֽכָה לּוֹ אַשְׁרֵי הָעָם שֶׁיְהֹוָה אֱלֹהָיו: וַאֲנִי בְּחַסְדְּ֒ךָ בָטַֽחְתִּי יָגֵל לִבִּי בִּישׁוּעָתֶֽךָ אָשִֽׁירָה לַיהוָֹה כִּי גָמַל עָלָי
            </Text>
            </div>
            : null}

            {language === 'english' || language === 'both' ?
            <div>
                <Text fontSize={size}>
            And He, the Merciful One, atones iniquity and does not destroy; He frequently withdraws His anger and does not arouse all His rage. You, Adonoy, withhold not Your mercy from me; may Your kindness and Your truth18 always protect me. Remember Your mercies Adonoy and kindnesses, for they are from the beginning of the world.19 Give might to God,20 His pride (majesty) hovers over Israel, and His might is in the clouds. You are awesome, God, from Your Sanctuaries,21 Almighty of Israel—He grants might and power to the people; blessed is God. Almighty of vengeance, Adonoy, Almighty of vengeance, reveal Yourself.22 Arise, Judge of the earth! Repay the arrogant their just reward. Deliverance is Adonoy’s.23 Upon Your people is Your blessing. Selah. Adonoy of Hosts is with us, a stronghold for us is the God of Jacob. Selah. Adonoy of Hosts! Fortunate is the man who trusts in You. Adonoy, deliver [us]. The King will answer us on the day we call.            
            </Text>
            <Text fontSize={size}>
            Deliver Your people and bless Your inheritance, tend them and uplift them forever.24 Our soul yearned for Adonoy, our help and our shield is He. For in Him our hearts will rejoice, for in His holy Name we trusted. May Your kindness, Adonoy, be upon us, as we have waited for You. Show us Your kindness, Adonoy, and grant25 us Your deliverance. Arise—come to our aid, and redeem us for the sake of Your kindness. I am Adonoy, Your God, Who brought you up from the land of Egypt; open your mouth wide, and I will fill it.26 Fortunate is the people whose lot is thus, fortunate is the people for whom Adonoy is their God. In Your loving kindness I trust, My heart will exult in Your deliverance; I will sing to Adonoy, for He dealt kindly with me.27           
            </Text>
            </div>
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

export default HoduRest;