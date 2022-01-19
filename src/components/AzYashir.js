import React from "react";
import styled from "styled-components";

function AzYashir({size, language}) {

    const hebrew = `
    :וַיּֽוֹשַׁע יְהֹוָה בַּיּוֹם הַהוּא אֶת־יִשְׂרָאֵל מִיַּד מִצְרָֽיִם וַיַּרְא יִשְׂרָאֵל אֶת־מִצְרַֽיִם מֵת עַל־שְׂפַת הַיָּם: וַיַּרְא יִשְׂרָאֵל אֶת־הַיָּד הַגְּ֒דֹלָה אֲשֶׁר עָשָׂה יְהֹוָה בְּמִצְרַֽיִם וַיִּירְ֒אוּ הָעָם אֶת יְהֹוָה וַיַּאֲמִֽינוּ בַּיהוָֹה וּבְמשֶׁה עַבְדּוֹ        
    אָז יָשִׁיר־משֶׁה וּבְנֵי יִשְׂרָאֵל אֶת־הַשִּׁירָה הַזֹּאת לַיהוָֹה וַיֹּאמְרוּ לֵאמֹר אָשִֽׁירָה לַיהוָֹה כִּי־גָאֹה גָּאָה סוּס וְרֹכְ֒בוֹ רָמָה בַיָּם: עָזִּי וְזִמְרָת יָהּ וַיְהִי־לִי לִישׁוּעָה זֶה אֵלִי וְאַנְוֵֽהוּ אֱלֹהֵי אָבִי וַאֲרֹמְ֒מֶֽנְהוּ: יְהֹוָה אִישׁ מִלְחָמָה יְהֹוָה שְׁמוֹ: מַרְכְּבֹת פַּרְעֹה וְחֵילוֹ יָרָה בַיָּם וּמִבְחַר שָׁלִשָׁיו טֻבְּ֒עוּ בְיַם־סוּף: תְּהֹמֹת יְכַסְיֻֽמוּ יָרְ֒דוּ בִמְצוֹלֹת כְּמוֹ־אָֽבֶן: יְמִינְ֒ךָ יְהֹוָה נֶאְדָּרִי בַּכֹּֽחַ יְמִֽינְ֒ךָ יְהֹוָה תִּרְעַץ אוֹיֵב: וּבְרֹב גְּאוֹנְ֒ךָ תַּהֲרֹס קָמֶֽיךָ תְּשַׁלַּח חֲרֹנְ֒ךָ יֹֽאכְ֒לֵמוֹ כַּקַּשׁ: וּבְרֽוּחַ אַפֶּֽיךָ נֶֽעֶרְמוּ מַֽיִם נִצְּ֒בוּ כְמוֹ־נֵד נֹזְ֒לִים קָפְ֒אוּ תְהֹמֹת בְּלֶב־יָם: אָמַר אוֹיֵב אֶרְדֹּף אַשִּׂיג אֲחַלֵּק שָׁלָל תִּמְלָאֵֽמוֹ נַפְשִׁי אָרִיק חַרְבִּי תּוֹרִישֵֽׁמוֹ יָדִי: נָשַֽׁפְתָּ בְרוּחֲךָ כִּסָּֽמוֹ יָם צָלֲלוּ כַּעוֹפֶֽרֶת בְּמַֽיִם אַדִּירִים: מִי־כָמֹֽכָה בָּאֵלִם יְהֹוָה מִי כָּמֹֽכָה נֶאְדָּר בַּקֹּֽדֶשׁ נוֹרָא תְהִלֹּת עֹֽשֵׂה־פֶֽלֶא: נָטִֽיתָ יְמִינְ֒ךָ תִּבְלָעֵֽמוֹ אָֽרֶץ: נָחִֽיתָ בְחַסְדְּ֒ךָ עַם־זוּ גָּאָֽלְתָּ נֵהַֽלְתָּ בְעָזְּ֒ךָ אֶל־נְוֵה קָדְשֶֽׁךָ: שָֽׁמְ֒עוּ עַמִּים יִרְגָּזוּן חִיל אָחַז ישְׁ֒בֵי פְּלָֽשֶׁת: אָז נִבְהֲלוּ אַלּוּפֵי אֱדוֹם אֵילֵי מוֹאָב יֹֽאחֲזֵֽמוֹ רָֽעַד נָמֹֽגוּ כֹּל ישְׁ֒בֵי כְנָֽעַן: תִּפֹּל עֲלֵיהֶם אֵימָֽתָה וָפַֽחַד בִּגְדֹל זְרוֹעֲךָ יִדְּ֒מוּ כָּאָֽבֶן עַד־יַֽעֲבֹר עַמְּ֒ךָ יְהֹוָה עַד־יַֽעֲבֹר עַם־זוּ קָנִֽיתָ: תְּבִאֵֽמוֹ וְתִטָּעֵֽמוֹ בְּהַר נַחֲלָתְ֒ךָ מָכוֹן לְשִׁבְתְּ֒ךָ פָּעַֽלְתָּ יְהֹוָה מִקְּ֒דָשׁ אֲדֹנָי כּוֹנְ֒נוּ יָדֶֽיךָ: יְהֹוָה יִמְלֹךְ לְעֹלָם וָעֶד: יְהֹוָה יִמְלֹךְ לְעֹלָם וָעֶד: יְהֹוָה מַלְכוּתֵהּ קָאֵים לְעָלַם וּלְעָלְ֒מֵי עָלְ֒מַיָּא: כִּי בָא סוּס פַּרְעֹה בְּרִכְבּוֹ וּבְפָרָשָׁיו בַּיָּם וַיָּֽשֶׁב יְהֹוָה עֲלֵהֶם אֶת־מֵי הַיָּם וּבְנֵי יִשְׂרָאֵל הָלְ֒כוּ בַיַּבָּשָׁה בְּתוֹךְ הַיָּֽם: כִּי לַיהוָֹה הַמְּ֒לוּכָה וּמשֵׁל בַּגּוֹיִם: וְעָלוּ מוֹשִׁעִים בְּהַר צִיּוֹן לִשְׁפֹּט אֶת־הַר עֵשָׂו, וְהָיְ֒תָה לַיהוָֹה הַמְּ֒לוּכָה: וְהָיָה יְהֹוָה לְמֶֽלֶךְ עַל־כָּל הָאָֽרֶץ בַּיּוֹם הַהוּא יִהְיֶה יְהֹוָה אֶחָד וּשְׁמוֹ אֶחָד   
    `
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
            <Heading>אָז יָשִׁיר</Heading>
            {/* <Text fontSize={size}>
            וַיּֽוֹשַׁע יְהֹוָה בַּיּוֹם הַהוּא אֶת־יִשְׂרָאֵל מִיַּד מִצְרָֽיִם וַיַּרְא יִשְׂרָאֵל אֶת־מִצְרַֽיִם מֵת עַל־שְׂפַת הַיָּם: וַיַּרְא יִשְׂרָאֵל אֶת־הַיָּד הַגְּ֒דֹלָה אֲשֶׁר עָשָׂה יְהֹוָה בְּמִצְרַֽיִם וַיִּירְ֒אוּ הָעָם אֶת יְהֹוָה וַיַּאֲמִֽינוּ בַּיהוָֹה וּבְמשֶׁה עַבְדּוֹ        
            </Text>
            <Text fontSize={size}>
            אָז יָשִׁיר־משֶׁה וּבְנֵי יִשְׂרָאֵל אֶת־הַשִּׁירָה הַזֹּאת לַיהוָֹה וַיֹּאמְרוּ לֵאמֹר אָשִֽׁירָה לַיהוָֹה כִּי־גָאֹה גָּאָה סוּס וְרֹכְ֒בוֹ רָמָה בַיָּם: עָזִּי וְזִמְרָת יָהּ וַיְהִי־לִי לִישׁוּעָה זֶה אֵלִי וְאַנְוֵֽהוּ אֱלֹהֵי אָבִי וַאֲרֹמְ֒מֶֽנְהוּ: יְהֹוָה אִישׁ מִלְחָמָה יְהֹוָה שְׁמוֹ: מַרְכְּבֹת פַּרְעֹה וְחֵילוֹ יָרָה בַיָּם וּמִבְחַר שָׁלִשָׁיו טֻבְּ֒עוּ בְיַם־סוּף: תְּהֹמֹת יְכַסְיֻֽמוּ יָרְ֒דוּ בִמְצוֹלֹת כְּמוֹ־אָֽבֶן: יְמִינְ֒ךָ יְהֹוָה נֶאְדָּרִי בַּכֹּֽחַ יְמִֽינְ֒ךָ יְהֹוָה תִּרְעַץ אוֹיֵב: וּבְרֹב גְּאוֹנְ֒ךָ תַּהֲרֹס קָמֶֽיךָ תְּשַׁלַּח חֲרֹנְ֒ךָ יֹֽאכְ֒לֵמוֹ כַּקַּשׁ: וּבְרֽוּחַ אַפֶּֽיךָ נֶֽעֶרְמוּ מַֽיִם נִצְּ֒בוּ כְמוֹ־נֵד נֹזְ֒לִים קָפְ֒אוּ תְהֹמֹת בְּלֶב־יָם: אָמַר אוֹיֵב אֶרְדֹּף אַשִּׂיג אֲחַלֵּק שָׁלָל תִּמְלָאֵֽמוֹ נַפְשִׁי אָרִיק חַרְבִּי תּוֹרִישֵֽׁמוֹ יָדִי: נָשַֽׁפְתָּ בְרוּחֲךָ כִּסָּֽמוֹ יָם צָלֲלוּ כַּעוֹפֶֽרֶת בְּמַֽיִם אַדִּירִים: מִי־כָמֹֽכָה בָּאֵלִם יְהֹוָה מִי כָּמֹֽכָה נֶאְדָּר בַּקֹּֽדֶשׁ נוֹרָא תְהִלֹּת עֹֽשֵׂה־פֶֽלֶא: נָטִֽיתָ יְמִינְ֒ךָ תִּבְלָעֵֽמוֹ אָֽרֶץ: נָחִֽיתָ בְחַסְדְּ֒ךָ עַם־זוּ גָּאָֽלְתָּ נֵהַֽלְתָּ בְעָזְּ֒ךָ אֶל־נְוֵה קָדְשֶֽׁךָ: שָֽׁמְ֒עוּ עַמִּים יִרְגָּזוּן חִיל אָחַז ישְׁ֒בֵי פְּלָֽשֶׁת: אָז נִבְהֲלוּ אַלּוּפֵי אֱדוֹם אֵילֵי מוֹאָב יֹֽאחֲזֵֽמוֹ רָֽעַד נָמֹֽגוּ כֹּל ישְׁ֒בֵי כְנָֽעַן: תִּפֹּל עֲלֵיהֶם אֵימָֽתָה וָפַֽחַד בִּגְדֹל זְרוֹעֲךָ יִדְּ֒מוּ כָּאָֽבֶן עַד־יַֽעֲבֹר עַמְּ֒ךָ יְהֹוָה עַד־יַֽעֲבֹר עַם־זוּ קָנִֽיתָ: תְּבִאֵֽמוֹ וְתִטָּעֵֽמוֹ בְּהַר נַחֲלָתְ֒ךָ מָכוֹן לְשִׁבְתְּ֒ךָ פָּעַֽלְתָּ יְהֹוָה מִקְּ֒דָשׁ אֲדֹנָי כּוֹנְ֒נוּ יָדֶֽיךָ: יְהֹוָה יִמְלֹךְ לְעֹלָם וָעֶד: יְהֹוָה יִמְלֹךְ לְעֹלָם וָעֶד: יְהֹוָה מַלְכוּתֵהּ קָאֵים לְעָלַם וּלְעָלְ֒מֵי עָלְ֒מַיָּא: כִּי בָא סוּס פַּרְעֹה בְּרִכְבּוֹ וּבְפָרָשָׁיו בַּיָּם וַיָּֽשֶׁב יְהֹוָה עֲלֵהֶם אֶת־מֵי הַיָּם וּבְנֵי יִשְׂרָאֵל הָלְ֒כוּ בַיַּבָּשָׁה בְּתוֹךְ הַיָּֽם: כִּי לַיהוָֹה הַמְּ֒לוּכָה וּמשֵׁל בַּגּוֹיִם: וְעָלוּ מוֹשִׁעִים בְּהַר צִיּוֹן לִשְׁפֹּט אֶת־הַר עֵשָׂו, וְהָיְ֒תָה לַיהוָֹה הַמְּ֒לוּכָה: וְהָיָה יְהֹוָה לְמֶֽלֶךְ עַל־כָּל הָאָֽרֶץ בַּיּוֹם הַהוּא יִהְיֶה יְהֹוָה אֶחָד וּשְׁמוֹ אֶחָד   
            </Text>

            <Text fontSize={size}>
            On that day,3 Adonoy delivered Israel from the hand of Egypt, and Israel saw the Egyptians dead on the seashore. And Israel saw the great hand4 which Adonoy wielded against Egypt, and the people feared Adonoy, and they believed in Adonoy, and that Moses was His servant.            </Text>
            <Text fontSize={size}>
Then Moses and the Children of Israel sang this song to Adonoy, and they said: I will sing to Adonoy for He is most high;5 the horse with its rider, He threw into the sea. The strength and retribution of God was the cause of my deliverance;6 this is my Almighty and I will glorify Him, God of my father and I will exalt Him. Adonoy is master of war Adonoy is His Name. Pharaoh’s chariots and army, He hurled into the sea; and his elite officers were drowned in the Sea of Reeds. The deep waters covered them; they descended into the depths like stone. Your right hand Adonoy is adorned with power, Your right hand Adonoy crushes the enemy. And in Your great majesty, You destroyed Your opponents; You sent forth Your fury, it consumed them like straw.7 And with the wind from Your nostrils the waters were heaped up, flowing water stood erect like a wall; the deep waters congealed in the heart of the sea.8 The enemy (Pharaoh) said: I will pursue [them], I will overtake [them], I will divide the spoils; I will satisfy myself; I will unsheathe my sword, my hand will destroy them. You blew with Your wind, the sea covered them; they sank like lead in the mighty waters.9 Who is like You among the mighty, Adonoy! who is like You? [You are] adorned in holiness, awesome in praise, performing wonders.10 You stretched out Your right hand, the earth swallowed them. You led in Your kindliness, the people whom You redeemed; You guided them with Your might to Your holy dwelling place. The peoples heard and trembled, pangs of fear gripped the inhabitants of Philistia.11 Then the chieftains of Edom panicked, the mighty men of Moab were seized with trembling, all the inhabitants of Canaan melted away.12 Terror and dread fall upon them; at the greatness of Your arm they were still as stone; until Your people cross over, Adonoy, until [they] cross over,13 —the people You have acquired. You will bring them and plant them14 on the mountain of Your inheritance, the place for Your habitation which You, Adonoy, have made; the Sanctuary, my Master, [which] Your hands established.15 Adonoy will reign forever and ever.16 Adonoy will reign forever and ever. Adonoy! His sovereignty is established forever and to all eternity.17 When Pharaoh’s horses, with his chariots, and his horsemen, went into the sea, Adonoy turned back on them the waters of the sea; and the Children of Israel walked on dry land in the midst of the sea.18 For the kingship is Adonoy’s and He rules over nations.19 And deliverers will go up to Mount Zion to judge Mount Esau, and the kingdom will be Adonoy’s.20 And Adonoy will be King over the whole earth; on that day Adonoy will be One and His Name One.            
</Text> */}

{language === 'hebrew' || language === 'both' ?
            <div>
            <Text fontSize={size}>
            וַיּֽוֹשַׁע יְהֹוָה בַּיּוֹם הַהוּא אֶת־יִשְׂרָאֵל מִיַּד מִצְרָֽיִם וַיַּרְא יִשְׂרָאֵל אֶת־מִצְרַֽיִם מֵת עַל־שְׂפַת הַיָּם: וַיַּרְא יִשְׂרָאֵל אֶת־הַיָּד הַגְּ֒דֹלָה אֲשֶׁר עָשָׂה יְהֹוָה בְּמִצְרַֽיִם וַיִּירְ֒אוּ הָעָם אֶת יְהֹוָה וַיַּאֲמִֽינוּ בַּיהוָֹה וּבְמשֶׁה עַבְדּוֹ        
            </Text>
            <Text fontSize={size}>
            אָז יָשִׁיר־משֶׁה וּבְנֵי יִשְׂרָאֵל אֶת־הַשִּׁירָה הַזֹּאת לַיהוָֹה וַיֹּאמְרוּ לֵאמֹר אָשִֽׁירָה לַיהוָֹה כִּי־גָאֹה גָּאָה סוּס וְרֹכְ֒בוֹ רָמָה בַיָּם: עָזִּי וְזִמְרָת יָהּ וַיְהִי־לִי לִישׁוּעָה זֶה אֵלִי וְאַנְוֵֽהוּ אֱלֹהֵי אָבִי וַאֲרֹמְ֒מֶֽנְהוּ: יְהֹוָה אִישׁ מִלְחָמָה יְהֹוָה שְׁמוֹ: מַרְכְּבֹת פַּרְעֹה וְחֵילוֹ יָרָה בַיָּם וּמִבְחַר שָׁלִשָׁיו טֻבְּ֒עוּ בְיַם־סוּף: תְּהֹמֹת יְכַסְיֻֽמוּ יָרְ֒דוּ בִמְצוֹלֹת כְּמוֹ־אָֽבֶן: יְמִינְ֒ךָ יְהֹוָה נֶאְדָּרִי בַּכֹּֽחַ יְמִֽינְ֒ךָ יְהֹוָה תִּרְעַץ אוֹיֵב: וּבְרֹב גְּאוֹנְ֒ךָ תַּהֲרֹס קָמֶֽיךָ תְּשַׁלַּח חֲרֹנְ֒ךָ יֹֽאכְ֒לֵמוֹ כַּקַּשׁ: וּבְרֽוּחַ אַפֶּֽיךָ נֶֽעֶרְמוּ מַֽיִם נִצְּ֒בוּ כְמוֹ־נֵד נֹזְ֒לִים קָפְ֒אוּ תְהֹמֹת בְּלֶב־יָם: אָמַר אוֹיֵב אֶרְדֹּף אַשִּׂיג אֲחַלֵּק שָׁלָל תִּמְלָאֵֽמוֹ נַפְשִׁי אָרִיק חַרְבִּי תּוֹרִישֵֽׁמוֹ יָדִי: נָשַֽׁפְתָּ בְרוּחֲךָ כִּסָּֽמוֹ יָם צָלֲלוּ כַּעוֹפֶֽרֶת בְּמַֽיִם אַדִּירִים: מִי־כָמֹֽכָה בָּאֵלִם יְהֹוָה מִי כָּמֹֽכָה נֶאְדָּר בַּקֹּֽדֶשׁ נוֹרָא תְהִלֹּת עֹֽשֵׂה־פֶֽלֶא: נָטִֽיתָ יְמִינְ֒ךָ תִּבְלָעֵֽמוֹ אָֽרֶץ: נָחִֽיתָ בְחַסְדְּ֒ךָ עַם־זוּ גָּאָֽלְתָּ נֵהַֽלְתָּ בְעָזְּ֒ךָ אֶל־נְוֵה קָדְשֶֽׁךָ: שָֽׁמְ֒עוּ עַמִּים יִרְגָּזוּן חִיל אָחַז ישְׁ֒בֵי פְּלָֽשֶׁת: אָז נִבְהֲלוּ אַלּוּפֵי אֱדוֹם אֵילֵי מוֹאָב יֹֽאחֲזֵֽמוֹ רָֽעַד נָמֹֽגוּ כֹּל ישְׁ֒בֵי כְנָֽעַן: תִּפֹּל עֲלֵיהֶם אֵימָֽתָה וָפַֽחַד בִּגְדֹל זְרוֹעֲךָ יִדְּ֒מוּ כָּאָֽבֶן עַד־יַֽעֲבֹר עַמְּ֒ךָ יְהֹוָה עַד־יַֽעֲבֹר עַם־זוּ קָנִֽיתָ: תְּבִאֵֽמוֹ וְתִטָּעֵֽמוֹ בְּהַר נַחֲלָתְ֒ךָ מָכוֹן לְשִׁבְתְּ֒ךָ פָּעַֽלְתָּ יְהֹוָה מִקְּ֒דָשׁ אֲדֹנָי כּוֹנְ֒נוּ יָדֶֽיךָ: יְהֹוָה יִמְלֹךְ לְעֹלָם וָעֶד: יְהֹוָה יִמְלֹךְ לְעֹלָם וָעֶד: יְהֹוָה מַלְכוּתֵהּ קָאֵים לְעָלַם וּלְעָלְ֒מֵי עָלְ֒מַיָּא: כִּי בָא סוּס פַּרְעֹה בְּרִכְבּוֹ וּבְפָרָשָׁיו בַּיָּם וַיָּֽשֶׁב יְהֹוָה עֲלֵהֶם אֶת־מֵי הַיָּם וּבְנֵי יִשְׂרָאֵל הָלְ֒כוּ בַיַּבָּשָׁה בְּתוֹךְ הַיָּֽם: כִּי לַיהוָֹה הַמְּ֒לוּכָה וּמשֵׁל בַּגּוֹיִם: וְעָלוּ מוֹשִׁעִים בְּהַר צִיּוֹן לִשְׁפֹּט אֶת־הַר עֵשָׂו, וְהָיְ֒תָה לַיהוָֹה הַמְּ֒לוּכָה: וְהָיָה יְהֹוָה לְמֶֽלֶךְ עַל־כָּל הָאָֽרֶץ בַּיּוֹם הַהוּא יִהְיֶה יְהֹוָה אֶחָד וּשְׁמוֹ אֶחָד   
            </Text>
            </div>
            : null}

            {language === 'english' || language === 'both' ?
            <div>
            <Text fontSize={size}>
            On that day,3 Adonoy delivered Israel from the hand of Egypt, and Israel saw the Egyptians dead on the seashore. And Israel saw the great hand4 which Adonoy wielded against Egypt, and the people feared Adonoy, and they believed in Adonoy, and that Moses was His servant.            </Text>
            <Text fontSize={size}>
Then Moses and the Children of Israel sang this song to Adonoy, and they said: I will sing to Adonoy for He is most high;5 the horse with its rider, He threw into the sea. The strength and retribution of God was the cause of my deliverance;6 this is my Almighty and I will glorify Him, God of my father and I will exalt Him. Adonoy is master of war Adonoy is His Name. Pharaoh’s chariots and army, He hurled into the sea; and his elite officers were drowned in the Sea of Reeds. The deep waters covered them; they descended into the depths like stone. Your right hand Adonoy is adorned with power, Your right hand Adonoy crushes the enemy. And in Your great majesty, You destroyed Your opponents; You sent forth Your fury, it consumed them like straw.7 And with the wind from Your nostrils the waters were heaped up, flowing water stood erect like a wall; the deep waters congealed in the heart of the sea.8 The enemy (Pharaoh) said: I will pursue [them], I will overtake [them], I will divide the spoils; I will satisfy myself; I will unsheathe my sword, my hand will destroy them. You blew with Your wind, the sea covered them; they sank like lead in the mighty waters.9 Who is like You among the mighty, Adonoy! who is like You? [You are] adorned in holiness, awesome in praise, performing wonders.10 You stretched out Your right hand, the earth swallowed them. You led in Your kindliness, the people whom You redeemed; You guided them with Your might to Your holy dwelling place. The peoples heard and trembled, pangs of fear gripped the inhabitants of Philistia.11 Then the chieftains of Edom panicked, the mighty men of Moab were seized with trembling, all the inhabitants of Canaan melted away.12 Terror and dread fall upon them; at the greatness of Your arm they were still as stone; until Your people cross over, Adonoy, until [they] cross over,13 —the people You have acquired. You will bring them and plant them14 on the mountain of Your inheritance, the place for Your habitation which You, Adonoy, have made; the Sanctuary, my Master, [which] Your hands established.15 Adonoy will reign forever and ever.16 Adonoy will reign forever and ever. Adonoy! His sovereignty is established forever and to all eternity.17 When Pharaoh’s horses, with his chariots, and his horsemen, went into the sea, Adonoy turned back on them the waters of the sea; and the Children of Israel walked on dry land in the midst of the sea.18 For the kingship is Adonoy’s and He rules over nations.19 And deliverers will go up to Mount Zion to judge Mount Esau, and the kingdom will be Adonoy’s.20 And Adonoy will be King over the whole earth; on that day Adonoy will be One and His Name One.            
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

export default AzYashir;