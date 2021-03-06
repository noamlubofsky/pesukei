import React from "react";
import styled from "styled-components";

function HoduFull({size, language}) {

    const hebrew = `הוֹדוּ לַיהוָֹה קִרְאוּ בִשְׁמוֹ הוֹדִֽיעוּ בָעַמִּים עֲלִילֹתָיו: שִֽׁירוּ לוֹ זַמְּ֒רוּ־לוֹ שִֽׂיחוּ בְּכָל־נִפְלְ֒אוֹתָיו: הִתְהַלְּ֒לוּ בְּשֵׁם קָדְשׁוֹ יִשְׂמַח לֵב מְבַקְשֵׁי יְהֹוָה: דִּרְשׁוּ יְהֹוָה וְעֻזּוֹ בַּקְּ֒שׁוּ פָנָיו תָּמִיד: זִכְרוּ נִפְלְ֒אֹתָיו אֲשֶׁר עָשָׂה מֹפְ֒תָיו וּמִשְׁפְּ֒טֵי־פִֽיהוּ: זֶֽרַע יִשְׂרָאֵל עַבְדּוֹ בְּנֵי יַעֲקֹב בְּחִירָיו: הוּא יְהֹוָה אֱלֹהֵֽינוּ בְּכָל־הָאָֽרֶץ מִשְׁפָּטָיו: זִכְרוּ לְעוֹלָם בְּרִיתוֹ דָּבָר צִוָּה לְאֶֽלֶף דּוֹר: אֲשֶׁר כָּרַת אֶת־אַבְרָהָם וּשְׁבוּעָתוֹ לְיִצְחָק: וַיַּעֲמִידֶֽהָ לְיַעֲקֹב לְחֹק לְיִשְׂרָאֵל בְּרִית עוֹלָם: לֵאמֹר לְךָ אֶתֵּן אֶֽרֶץ־כְּנָעַן חֶֽבֶל נַחֲלַתְכֶם: בִּהְיוֹתְ֒כֶם מְתֵי מִסְפָּר כִּמְעַט וְגָרִים בָּהּ: וַיִּתְהַלְּ֒כוּ מִגּוֹי אֶל־גּוֹי וּמִמַּמְלָכָה אֶל־עַם אַחֵר: לֹא־הִנִּֽיחַ לְאִישׁ לְעָשְׁקָם וַיּֽוֹכַח עֲלֵיהֶם מְלָכִים: אַל־תִּגְּ֒עוּ בִּמְשִׁיחָי וּבִנְבִיאַי אַל־תָּרֵֽעוּ: שִֽׁירוּ לַיהוָֹה כָּל־הָאָֽרֶץ בַּשְּׂ֒רוּ מִיּוֹם־אֶל־יוֹם יְשׁוּעָתוֹ: סַפְּ֒רוּ בַגּוֹיִם אֶת־כְּבוֹדוֹ בְּכָל־הָעַמִּים נִפְלְאֹתָיו: כִּי גָדוֹל יְהֹוָה וּמְהֻלָּל מְאֹד וְנוֹרָא הוּא עַל־כָּל־אֱלֹהִים: כִּי כָּל־אֱלֹהֵי הָעַמִּים אֱלִילִים וַיהוָֹה שָׁמַֽיִם עָשָׂה
    הוֹד וְהָדָר לְפָנָיו עֹז וְחֶדְוָה בִּמְקֹמוֹ: הָבוּ לַיהוָֹה מִשְׁפְּ֒חוֹת עַמִּים הָבוּ לַיהוָֹה כָּבוֹד וָעֹז: הָבוּ לַיהוָֹה כְּבוֹד שְׁמוֹ שְׂאוּ מִנְחָה וּבֹֽאוּ לְפָנָיו הִשְׁתַּחֲווּ לַיהוָֹה בְּהַדְרַת־קֹֽדֶשׁ: חִֽילוּ מִלְּ֒פָנָיו כָּל־הָאָֽרֶץ אַף־תִּכּוֹן תֵּבֵל בַּל־תִּמּוֹט: יִשְׂמְחוּ הַשָּׁמַֽיִם וְתָגֵל הָאָֽרֶץ וְיֹאמְ֒רוּ בַגּוֹיִם יְהֹוָה מָלָךְ: יִרְעַם הַיָּם וּמְלוֹאוֹ יַעֲלֹץ הַשָּׂדֶה וְכָל־אֲשֶׁר־בּוֹ: אָז יְרַנְּ֒נוּ עֲצֵי הַיָּעַר מִלִּפְנֵי יְהֹוָה כִּי־בָא לִשְׁפּוֹט אֶת־הָאָֽרֶץ: הוֹדוּ לַיהוָֹה כִּי טוֹב כִּי לְעוֹלָם חַסְדּוֹ: וְאִמְרוּ הוֹשִׁיעֵֽנוּ אֱלֹהֵי יִשְׁעֵֽנוּ וְקַבְּ֒צֵֽנוּ וְהַצִּילֵֽנוּ מִן־הַגּוֹיִם לְהוֹדוֹת לְשֵׁם קָדְשֶֽׁךָ לְהִשְׁתַּבֵּֽחַ בִּתְהִלָּתֶֽךָ: בָּרוּךְ יְהֹוָה אֱלֹהֵי יִשְׂרָאֵל מִן־הָעוֹלָם וְעַד הָעֹלָם וַיֹּאמְ֒רוּ כָל־הָעָם אָמֵן וְהַלֵּל לַיהוָֹה: רוֹמְ֒מוּ יְהֹוָה אֱלֹהֵֽינוּ וְהִשְׁתַּחֲווּ לַהֲדֹם רַגְלָיו קָדוֹשׁ הוּא: רוֹמְ֒מוּ יְהֹוָה אֱלֹהֵֽינוּ וְהִשְׁתַּחֲווּ לְהַר קָדְשׁוֹ כִּי קָדוֹשׁ יְהֹוָה אֱלֹהֵֽינוּ
    וְהוּא רַחוּם יְכַפֵּר עָוֹן וְלֹא־יַשְׁחִית וְהִרְבָּה לְהָשִׁיב אַפּוֹ וְלֹא־יָעִיר כָּל־חֲמָתוֹ: אַתָּה יְהֹוָה לֹא־תִכְלָא רַחֲמֶֽיךָ מִמֶּֽנִּי חַסְדְּ֒ךָ וַאֲמִתְּ֒ךָ תָּמִיד יִצְּ֒רֽוּנִי: זְכֹר רַחֲמֶֽיךָ יְהֹוָה וַחֲסָדֶֽיךָ כִּי מֵעוֹלָם הֵֽמָּה: תְּנוּ עֹז לֵאלֹהִים עַל־יִשְׂרָאֵל גַּאֲוָתוֹ וְעֻזּוֹ בַּשְּׁ֒חָקִים: נוֹרָא אֱלֹהִים מִמִּקְדָּשֶֽׁיךָ אֵל יִשְׂרָאֵל הוּא נֹתֵן עֹז וְתַעֲצֻמוֹת לָעָם בָּרוּךְ אֱלֹהִים: אֵל־נְקָמוֹת יְהֹוָה אֵל נְקָמוֹת הוֹפִֽיעַ: הִנָּשֵׂא שֹׁפֵט הָאָֽרֶץ הָשֵׁב גְּמוּל עַל־גֵּאִים: לַיהוָֹה הַיְשׁוּעָה עַל־עַמְּ֒ךָ בִרְכָתֶֽךָ סֶּֽלָה: יְהֹוָה צְבָאוֹת עִמָּנוּ מִשְׂגָּב לָֽנוּ אֱלֹהֵי יַעֲקֹב סֶֽלָה: יְהֹוָה צְבָאוֹת אַשְׁרֵי אָדָם בֹּטֵֽחַ בָּךְ: יְהֹוָה הוֹשִֽׁיעָה הַמֶּֽלֶךְ יַעֲנֵֽנוּ בְיוֹם־קָרְאֵֽנוּ
    הוֹשִֽׁיעָה אֶת־עַמֶּֽךָ וּבָרֵךְ אֶת־נַחֲלָתֶֽךָ וּרְעֵם וְנַשְּׂ֒אֵם עַד־הָעוֹלָם: נַפְשֵֽׁנוּ חִכְּ֒תָה לַיהוָֹה עֶזְרֵֽנוּ וּמָגִנֵּֽנוּ הוּא: כִּי־בוֹ יִשְׂמַח לִבֵּֽנוּ כִּי בְשֵׁם קָדְשׁוֹ בָטָֽחְנוּ: יְהִי־חַסְדְּ֒ךָ יְהֹוָה עָלֵֽינוּ כַּאֲשֶׁר יִחַֽלְנוּ לָךְ: הַרְאֵֽנוּ יְהֹוָה חַסְדֶּֽךָ וְיֶשְׁעֲךָ תִּֽתֶּן־לָֽנוּ: קֽוּמָה עֶזְרָֽתָה לָּנוּ וּפְדֵֽנוּ לְמַֽעַן חַסְדֶּֽךָ: אָנֹכִי יְהֹוָה אֱלֹהֶֽיךָ הַמַּעַלְךָ מֵאֶֽרֶץ מִצְרָֽיִם הַרְחֶב־פִּֽיךָ וַאֲמַלְאֵֽהוּ: אַשְׁרֵי הָעָם שֶׁכָּֽכָה לּוֹ אַשְׁרֵי הָעָם שֶׁיְהֹוָה אֱלֹהָיו: וַאֲנִי בְּחַסְדְּ֒ךָ בָטַֽחְתִּי יָגֵל לִבִּי בִּישׁוּעָתֶֽךָ אָשִֽׁירָה לַיהוָֹה כִּי גָמַל עָלָי`
    const english = `Give thanks to Adonoy, proclaim His Name; make His deeds1 known among the nations. Sing to Him, compose songs to Him, speak of all His wonders. Take pride2 in [uttering] His holy Name, let the heart rejoice of those who seek3 Adonoy. Search for Adonoy and His might, seek His presence continually. Remember the wonders He has performed, His miracles,4 and the laws from His mouth. [You,] the seed of Israel5 His servant, children of Jacob, His chosen ones. He is Adonoy our God; the entire earth is governed by His laws. Remember His covenant forever— the word He commanded to a thousand generations— which He made as a treaty with Abraham, and [which was] His oath to Isaac. He established it for Jacob as a statute, for Israel as an everlasting covenant.6 Saying, To you I will give the Land of Canaan, the portion of your inheritance. When you were only few in number— very few, and strangers in it. They wandered from nation to nation, and from one kingdom to another people. He permitted no one to oppress them, and admonished kings7 for their sakes. Do not touch My anointed ones,8 and do not harm My prophets.” Sing to Adonoy all the earth,9 proclaim His deliverance from day to day.10 Recount His glory among the nations, His wonders among all the peoples. For Adonoy is great and most extolled; Awesome is He above all gods. For all the gods of the peoples are idols, whereas Adonoy made the heavens.
    Beauty and splendor are before Him,11 strength and joy are in His presence. Give to Adonoy families of peoples— give to Adonoy glory and might. Give to Adonoy the glory due His Name, bring an offering and come before Him, prostrate yourselves before Adonoy in the splendor of holiness.12 Tremble before Him all [peoples of] the earth, for He established the inhabited world so that it cannot be moved. The heavens will rejoice, the earth will exult,13 and they will proclaim among the nations: Adonoy has begun His reign. The sea and its fullness will roar; the field and all that is in it will jubilate. Then the trees of the forest will sing with joy, [receding] before Adonoy when He comes to judge the earth. Give thanks to Adonoy, for He is good, for His kindness is everlasting. And say, “Deliver us, God of our deliverance; gather us and save us from the nations, to give thanks to Your holy Name, to be extolled in Your praise.”14 Blessed is Adonoy, the God of Israel for all eternity, and all the people said: “Amein” and [they] praised Adonoy.” Exalt Adonoy, our God, and prostrate yourselves at His footstool.15 Holy is He!16 Exalt Adonoy, our God, and prostrate yourselves at His holy mountain,17 for Adonoy our God is holy.
    And He, the Merciful One, atones iniquity and does not destroy; He frequently withdraws His anger and does not arouse all His rage. You, Adonoy, withhold not Your mercy from me; may Your kindness and Your truth18 always protect me. Remember Your mercies Adonoy and kindnesses, for they are from the beginning of the world.19 Give might to God,20 His pride (majesty) hovers over Israel, and His might is in the clouds. You are awesome, God, from Your Sanctuaries,21 Almighty of Israel—He grants might and power to the people; blessed is God. Almighty of vengeance, Adonoy, Almighty of vengeance, reveal Yourself.22 Arise, Judge of the earth! Repay the arrogant their just reward. Deliverance is Adonoy’s.23 Upon Your people is Your blessing. Selah. Adonoy of Hosts is with us, a stronghold for us is the God of Jacob. Selah. Adonoy of Hosts! Fortunate is the man who trusts in You. Adonoy, deliver [us]. The King will answer us on the day we call.
    Deliver Your people and bless Your inheritance, tend them and uplift them forever.24 Our soul yearned for Adonoy, our help and our shield is He. For in Him our hearts will rejoice, for in His holy Name we trusted. May Your kindness, Adonoy, be upon us, as we have waited for You. Show us Your kindness, Adonoy, and grant25 us Your deliverance. Arise—come to our aid, and redeem us for the sake of Your kindness. I am Adonoy, Your God, Who brought you up from the land of Egypt; open your mouth wide, and I will fill it.26 Fortunate is the people whose lot is thus, fortunate is the people for whom Adonoy is their God. In Your loving kindness I trust, My heart will exult in Your deliverance; I will sing to Adonoy, for He dealt kindly with me.`
    
    const hebArray = ["הוֹדוּ לַיהוָֹה קִרְאוּ בִשְׁמוֹ", "הוֹדִֽיעוּ בָעַמִּים עֲלִילֹתָיו", "שִֽׁירוּ לוֹ זַמְּ֒רוּ־לוֹ", "שִֽׂיחוּ בְּכָל־נִפְלְ֒אוֹתָיו", "הִתְהַלְּ֒לוּ בְּשֵׁם קָדְשׁוֹ", "יִשְׂמַח לֵב מְבַקְשֵׁי יְהֹוָה", "דִּרְשׁוּ יְהֹוָה וְעֻזּוֹ", "בַּקְּ֒שׁוּ פָנָיו תָּמִיד", "זִכְרוּ נִפְלְ֒אֹתָיו אֲשֶׁר עָשָׂה", "מֹפְ֒תָיו וּמִשְׁפְּ֒טֵי־פִֽיהוּ", "זֶֽרַע יִשְׂרָאֵל עַבְדּוֹ", "בְּנֵי יַעֲקֹב בְּחִירָיו", "הוּא יְהֹוָה אֱלֹהֵֽינוּ", "בְּכָל־הָאָֽרֶץ מִשְׁפָּטָיו", "זִכְרוּ לְעוֹלָם בְּרִיתוֹ", "דָּבָר צִוָּה לְאֶֽלֶף דּוֹר", "אֲשֶׁר כָּרַת אֶת־אַבְרָהָם", "וּשְׁבוּעָתוֹ לְיִצְחָק", "וַיַּעֲמִידֶֽהָ לְיַעֲקֹב לְחֹק", "לְיִשְׂרָאֵל בְּרִית עוֹלָם", "לֵאמֹר לְךָ אֶתֵּן אֶֽרֶץ־כְּנָעַן", "חֶֽבֶל נַחֲלַתְכֶם", "בִּהְיוֹתְ֒כֶם מְתֵי מִסְפָּר", "כִּמְעַט וְגָרִים בָּהּ", "וַיִּתְהַלְּ֒כוּ מִגּוֹי אֶל־גּוֹי", "וּמִמַּמְלָכָה אֶל־עַם אַחֵר", "לֹא־הִנִּֽיחַ לְאִישׁ לְעָשְׁקָם", "וַיּֽוֹכַח עֲלֵיהֶם מְלָכִים", "אַל־תִּגְּ֒עוּ בִּמְשִׁיחָי", "וּבִנְבִיאַי אַל־תָּרֵֽעוּ", "שִֽׁירוּ לַיהוָֹה כָּל־הָאָֽרֶץ", "בַּשְּׂ֒רוּ מִיּוֹם־אֶל־יוֹם יְשׁוּעָתוֹ", "סַפְּ֒רוּ בַגּוֹיִם אֶת־כְּבוֹדוֹ", "בְּכָל־הָעַמִּים נִפְלְאֹתָיו", "כִּי גָדוֹל יְהֹוָה וּמְהֻלָּל מְאֹד", "וְנוֹרָא הוּא עַל־כָּל־אֱלֹהִים", "כִּי כָּל־אֱלֹהֵי הָעַמִּים אֱלִילִים", "וַיהוָֹה שָׁמַֽיִם עָשָׂה", "הוֹד וְהָדָר לְפָנָיו", "עֹז וְחֶדְוָה בִּמְקֹמוֹ", "הָבוּ לַיהוָֹה מִשְׁפְּ֒חוֹת עַמִּים", "הָבוּ לַיהוָֹה כָּבוֹד וָעֹז", "הָבוּ לַיהוָֹה כְּבוֹד שְׁמוֹ", "שְׂאוּ מִנְחָה וּבֹֽאוּ לְפָנָיו", "הִשְׁתַּחֲווּ לַיהוָֹה בְּהַדְרַת־קֹֽדֶשׁ", "חִֽילוּ מִלְּ֒פָנָיו כָּל־הָאָֽרֶץ", "אַף־תִּכּוֹן תֵּבֵל בַּל־תִּמּוֹט", "יִשְׂמְחוּ הַשָּׁמַֽיִם וְתָגֵל הָאָֽרֶץ", "וְיֹאמְ֒רוּ בַגּוֹיִם יְהֹוָה מָלָךְ", "יִרְעַם הַיָּם וּמְלוֹאוֹ", "יַעֲלֹץ הַשָּׂדֶה וְכָל־אֲשֶׁר־בּוֹ", "אָז יְרַנְּ֒נוּ עֲצֵי הַיָּעַר", "מִלִּפְנֵי יְהֹוָה כִּי־בָא לִשְׁפּוֹט אֶת־הָאָֽרֶץ", "הוֹדוּ לַיהוָֹה כִּי טוֹב", "כִּי לְעוֹלָם חַסְדּוֹ", "וְאִמְרוּ הוֹשִׁיעֵֽנוּ אֱלֹהֵי יִשְׁעֵֽנוּ", "וְקַבְּ֒צֵֽנוּ וְהַצִּילֵֽנוּ מִן־הַגּוֹיִם", "לְהוֹדוֹת לְשֵׁם קָדְשֶֽׁךָ", "לְהִשְׁתַּבֵּֽחַ בִּתְהִלָּתֶֽךָ", "בָּרוּךְ יְהֹוָה אֱלֹהֵי יִשְׂרָאֵל", "מִן־הָעוֹלָם וְעַד הָעֹלָם", "וַיֹּאמְ֒רוּ כָל־הָעָם אָמֵן וְהַלֵּל לַיהוָֹה", "רוֹמְ֒מוּ יְהֹוָה אֱלֹהֵֽינוּ", "וְהִשְׁתַּחֲווּ לַהֲדֹם רַגְלָיו קָדוֹשׁ הוּא", "רוֹמְ֒מוּ יְהֹוָה אֱלֹהֵֽינוּ", "וְהִשְׁתַּחֲווּ לְהַר קָדְשׁוֹ", "כִּי קָדוֹשׁ יְהֹוָה אֱלֹהֵֽינוּ", "וְהוּא רַחוּם יְכַפֵּר עָוֹן וְלֹא־יַשְׁחִית", "וְהִרְבָּה לְהָשִׁיב אַפּוֹ", "וְלֹא־יָעִיר כָּל־חֲמָתוֹ", "אַתָּה יְהֹוָה לֹא־תִכְלָא רַחֲמֶֽיךָ מִמֶּֽנִּי", "חַסְדְּ֒ךָ וַאֲמִתְּ֒ךָ תָּמִיד יִצְּ֒רֽוּנִי", "זְכֹר רַחֲמֶֽיךָ יְהֹוָה וַחֲסָדֶֽיךָ", "כִּי מֵעוֹלָם הֵֽמָּה", "תְּנוּ עֹז לֵאלֹהִים", "עַל־יִשְׂרָאֵל גַּאֲוָתוֹ", "וְעֻזּוֹ בַּשְּׁ֒חָקִים", "נוֹרָא אֱלֹהִים מִמִּקְדָּשֶֽׁיךָ", "אֵל יִשְׂרָאֵל הוּא נֹתֵן עֹז וְתַעֲצֻמוֹת לָעָם", "בָּרוּךְ אֱלֹהִים", "אֵל־נְקָמוֹת יְהֹוָה", "אֵל נְקָמוֹת הוֹפִֽיעַ", "הִנָּשֵׂא שֹׁפֵט הָאָֽרֶץ", "הָשֵׁב גְּמוּל עַל־גֵּאִים", "לַיהוָֹה הַיְשׁוּעָה", "עַל־עַמְּ֒ךָ בִרְכָתֶֽךָ סֶּֽלָה", "יְהֹוָה צְבָאוֹת עִמָּנוּ", "מִשְׂגָּב לָֽנוּ אֱלֹהֵי יַעֲקֹב סֶֽלָה", "יְהֹוָה צְבָאוֹת", "אַשְׁרֵי אָדָם בֹּטֵֽחַ בָּךְ", "יְהֹוָה הוֹשִֽׁיעָה", "הַמֶּֽלֶךְ יַעֲנֵֽנוּ בְיוֹם־קָרְאֵֽנוּ", "הוֹשִֽׁיעָה אֶת־עַמֶּֽךָ", "וּבָרֵךְ אֶת־נַחֲלָתֶֽךָ", "וּרְעֵם וְנַשְּׂ֒אֵם עַד־הָעוֹלָם", "נַפְשֵֽׁנוּ חִכְּ֒תָה לַיהוָֹה", "עֶזְרֵֽנוּ וּמָגִנֵּֽנוּ הוּא", "כִּי־בוֹ יִשְׂמַח לִבֵּֽנוּ", "כִּי בְשֵׁם קָדְשׁוֹ בָטָֽחְנוּ", "יְהִי־חַסְדְּ֒ךָ יְהֹוָה עָלֵֽינוּ", "כַּאֲשֶׁר יִחַֽלְנוּ לָךְ", "הַרְאֵֽנוּ יְהֹוָה חַסְדֶּֽךָ", "וְיֶשְׁעֲךָ תִּֽתֶּן־לָֽנוּ", "קֽוּמָה עֶזְרָֽתָה לָּנוּ", "וּפְדֵֽנוּ לְמַֽעַן חַסְדֶּֽךָ", "אָנֹכִי יְהֹוָה אֱלֹהֶֽיךָ", "הַמַּעַלְךָ מֵאֶֽרֶץ מִצְרָֽיִם", "הַרְחֶב־פִּֽיךָ וַאֲמַלְאֵֽהוּ", "אַשְׁרֵי הָעָם שֶׁכָּֽכָה לּוֹ", "אַשְׁרֵי הָעָם שֶׁיְהֹוָה אֱלֹהָיו", "וַאֲנִי בְּחַסְדְּ֒ךָ בָטַֽחְתִּי", "יָגֵל לִבִּי בִּישׁוּעָתֶֽךָ", "אָשִֽׁירָה לַיהוָֹה כִּי גָמַל עָלָי"]
    
    const engArray = ["Give thanks to Adonoy, proclaim His Name;", "make His deeds known among the nations.", "Sing to Him, compose songs to Him,", "speak of all His wonders.", "Take pride in [uttering] His holy Name,", "let the heart rejoice of those who seek Adonoy.", "Search for Adonoy and His might,", "seek His presence continually.", "Remember the wonders He has performed,", "His miracles, and the laws from His mouth.", "[You,] the seed of Israel His servant,", "children of Jacob, His chosen ones.", "He is Adonoy our God;", "the entire earth is governed by His laws.", "Remember His covenant forever—", "the word He commanded to a thousand generations—", "which He made as a treaty with Abraham,", "and [which was] His oath to Isaac.", "He established it for Jacob as a statute,", "for Israel as an everlasting covenant.", "Saying, To you I will give the Land of Canaan,", "the portion of your inheritance.", "When you were only few in number—", "very few, and strangers in it.", "They wandered from nation to nation,", "and from one kingdom to another people.", "He permitted no one to oppress them,", "and admonished kings for their sakes.", "Do not touch My anointed ones,", "and do not harm My prophets.", "Sing to Adonoy all the earth,", "proclaim His deliverance from day to day.", "Recount His glory among the nations,", "His wonders among all the peoples.", "For Adonoy is great and most extolled;", "Awesome is He above all gods.", "For all the gods of the peoples are idols,", "whereas Adonoy made the heavens.", "Beauty and splendor are before Him,", "strength and joy are in His presence.", "Give to Adonoy families of peoples—", "give to Adonoy glory and might.", "Give to Adonoy the glory due His Name,", "bring an offering and come before Him,", "prostrate yourselves before Adonoy in the splendor of holiness.", "Tremble before Him all [peoples of] the earth,", "for He established the inhabited world so that it cannot be moved.", "The heavens will rejoice, the earth will exult,", "and they will proclaim among the nations: Adonoy has begun His reign.", "The sea and its fullness will roar;", "the field and all that is in it will jubilate.", "Then the trees of the forest will sing with joy,", "[receding] before Adonoy when He comes to judge the earth.", "Give thanks to Adonoy, for He is good,", "for His kindness is everlasting.", "And say, “Deliver us, God of our deliverance;", "gather us and save us from the nations,", "to give thanks to Your holy Name,", "to be extolled in Your praise.”", "Blessed is Adonoy, the God of Israel", "for all eternity,", "and all the people said: “Amein” and [they] praised Adonoy.”", "Exalt Adonoy, our God,", "and prostrate yourselves at His footstool. Holy is He!", "Exalt Adonoy, our God,", "and prostrate yourselves at His holy mountain,", "for Adonoy our God is holy.", "And He, the Merciful One, atones iniquity and does not destroy;", "He frequently withdraws His anger", "and does not arouse all His rage.", "You, Adonoy, withhold not Your mercy from me;", "may Your kindness and Your truth always protect me.", "Remember Your mercies Adonoy and kindnesses,", "for they are from the beginning of the world.", "Give might to God,", "His pride (majesty) hovers over Israel,", "and His might is in the clouds.", "You are awesome, God, from Your Sanctuaries,", "Almighty of Israel—He grants might and power to the people;", "blessed is God.", "Almighty of vengeance, Adonoy,", "Almighty of vengeance, reveal Yourself.", "Arise, Judge of the earth!", "Repay the arrogant their just reward.", "Deliverance is Adonoy’s.", "Upon Your people is Your blessing. Selah.", "Adonoy of Hosts is with us,", "a stronghold for us is the God of Jacob. Selah.", "Adonoy of Hosts!", "Fortunate is the man who trusts in You.", "Adonoy, deliver [us].", "The King will answer us on the day we call.", "Deliver Your people", "and bless Your inheritance,", "tend them and uplift them forever.", "Our soul yearned for Adonoy,", "our help and our shield is He.", "For in Him our hearts will rejoice,", "for in His holy Name we trusted.", "May Your kindness, Adonoy, be upon us,", "as we have waited for You.", "Show us Your kindness, Adonoy,", "and grant us Your deliverance.", "Arise—come to our aid,", "and redeem us for the sake of Your kindness.", "I am Adonoy, Your God,", "Who brought you up from the land of Egypt;", "open your mouth wide, and I will fill it.", "Fortunate is the people whose lot is thus,", "fortunate is the people for whom Adonoy is their God.", "In Your loving kindness I trust,", "My heart will exult in Your deliverance;", "I will sing to Adonoy, for He dealt kindly with me."]

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
            <Heading>הוֹדוּ</Heading>

            {/* <Text fontSize={size}>
            הוֹדוּ לַיהוָֹה קִרְאוּ בִשְׁמוֹ הוֹדִֽיעוּ בָעַמִּים עֲלִילֹתָיו: שִֽׁירוּ לוֹ זַמְּ֒רוּ־לוֹ שִֽׂיחוּ בְּכָל־נִפְלְ֒אוֹתָיו: הִתְהַלְּ֒לוּ בְּשֵׁם קָדְשׁוֹ יִשְׂמַח לֵב מְבַקְשֵׁי יְהֹוָה: דִּרְשׁוּ יְהֹוָה וְעֻזּוֹ בַּקְּ֒שׁוּ פָנָיו תָּמִיד: זִכְרוּ נִפְלְ֒אֹתָיו אֲשֶׁר עָשָׂה מֹפְ֒תָיו וּמִשְׁפְּ֒טֵי־פִֽיהוּ: זֶֽרַע יִשְׂרָאֵל עַבְדּוֹ בְּנֵי יַעֲקֹב בְּחִירָיו: הוּא יְהֹוָה אֱלֹהֵֽינוּ בְּכָל־הָאָֽרֶץ מִשְׁפָּטָיו: זִכְרוּ לְעוֹלָם בְּרִיתוֹ דָּבָר צִוָּה לְאֶֽלֶף דּוֹר: אֲשֶׁר כָּרַת אֶת־אַבְרָהָם וּשְׁבוּעָתוֹ לְיִצְחָק: וַיַּעֲמִידֶֽהָ לְיַעֲקֹב לְחֹק לְיִשְׂרָאֵל בְּרִית עוֹלָם: לֵאמֹר לְךָ אֶתֵּן אֶֽרֶץ־כְּנָעַן חֶֽבֶל נַחֲלַתְכֶם: בִּהְיוֹתְ֒כֶם מְתֵי מִסְפָּר כִּמְעַט וְגָרִים בָּהּ: וַיִּתְהַלְּ֒כוּ מִגּוֹי אֶל־גּוֹי וּמִמַּמְלָכָה אֶל־עַם אַחֵר: לֹא־הִנִּֽיחַ לְאִישׁ לְעָשְׁקָם וַיּֽוֹכַח עֲלֵיהֶם מְלָכִים: אַל־תִּגְּ֒עוּ בִּמְשִׁיחָי וּבִנְבִיאַי אַל־תָּרֵֽעוּ: שִֽׁירוּ לַיהוָֹה כָּל־הָאָֽרֶץ בַּשְּׂ֒רוּ מִיּוֹם־אֶל־יוֹם יְשׁוּעָתוֹ: סַפְּ֒רוּ בַגּוֹיִם אֶת־כְּבוֹדוֹ בְּכָל־הָעַמִּים נִפְלְאֹתָיו: כִּי גָדוֹל יְהֹוָה וּמְהֻלָּל מְאֹד וְנוֹרָא הוּא עַל־כָּל־אֱלֹהִים: כִּי כָּל־אֱלֹהֵי הָעַמִּים אֱלִילִים וַיהוָֹה שָׁמַֽיִם עָשָׂה
            </Text>
            <Text fontSize={size}>
            הוֹד וְהָדָר לְפָנָיו עֹז וְחֶדְוָה בִּמְקֹמוֹ: הָבוּ לַיהוָֹה מִשְׁפְּ֒חוֹת עַמִּים הָבוּ לַיהוָֹה כָּבוֹד וָעֹז: הָבוּ לַיהוָֹה כְּבוֹד שְׁמוֹ שְׂאוּ מִנְחָה וּבֹֽאוּ לְפָנָיו הִשְׁתַּחֲווּ לַיהוָֹה בְּהַדְרַת־קֹֽדֶשׁ: חִֽילוּ מִלְּ֒פָנָיו כָּל־הָאָֽרֶץ אַף־תִּכּוֹן תֵּבֵל בַּל־תִּמּוֹט: יִשְׂמְחוּ הַשָּׁמַֽיִם וְתָגֵל הָאָֽרֶץ וְיֹאמְ֒רוּ בַגּוֹיִם יְהֹוָה מָלָךְ: יִרְעַם הַיָּם וּמְלוֹאוֹ יַעֲלֹץ הַשָּׂדֶה וְכָל־אֲשֶׁר־בּוֹ: אָז יְרַנְּ֒נוּ עֲצֵי הַיָּעַר מִלִּפְנֵי יְהֹוָה כִּי־בָא לִשְׁפּוֹט אֶת־הָאָֽרֶץ: הוֹדוּ לַיהוָֹה כִּי טוֹב כִּי לְעוֹלָם חַסְדּוֹ: וְאִמְרוּ הוֹשִׁיעֵֽנוּ אֱלֹהֵי יִשְׁעֵֽנוּ וְקַבְּ֒צֵֽנוּ וְהַצִּילֵֽנוּ מִן־הַגּוֹיִם לְהוֹדוֹת לְשֵׁם קָדְשֶֽׁךָ לְהִשְׁתַּבֵּֽחַ בִּתְהִלָּתֶֽךָ: בָּרוּךְ יְהֹוָה אֱלֹהֵי יִשְׂרָאֵל מִן־הָעוֹלָם וְעַד הָעֹלָם וַיֹּאמְ֒רוּ כָל־הָעָם אָמֵן וְהַלֵּל לַיהוָֹה: רוֹמְ֒מוּ יְהֹוָה אֱלֹהֵֽינוּ וְהִשְׁתַּחֲווּ לַהֲדֹם רַגְלָיו קָדוֹשׁ הוּא: רוֹמְ֒מוּ יְהֹוָה אֱלֹהֵֽינוּ וְהִשְׁתַּחֲווּ לְהַר קָדְשׁוֹ כִּי קָדוֹשׁ יְהֹוָה אֱלֹהֵֽינוּ
            </Text>
            <Text fontSize={size}>
            וְהוּא רַחוּם יְכַפֵּר עָוֹן וְלֹא־יַשְׁחִית וְהִרְבָּה לְהָשִׁיב אַפּוֹ וְלֹא־יָעִיר כָּל־חֲמָתוֹ: אַתָּה יְהֹוָה לֹא־תִכְלָא רַחֲמֶֽיךָ מִמֶּֽנִּי חַסְדְּ֒ךָ וַאֲמִתְּ֒ךָ תָּמִיד יִצְּ֒רֽוּנִי: זְכֹר רַחֲמֶֽיךָ יְהֹוָה וַחֲסָדֶֽיךָ כִּי מֵעוֹלָם הֵֽמָּה: תְּנוּ עֹז לֵאלֹהִים עַל־יִשְׂרָאֵל גַּאֲוָתוֹ וְעֻזּוֹ בַּשְּׁ֒חָקִים: נוֹרָא אֱלֹהִים מִמִּקְדָּשֶֽׁיךָ אֵל יִשְׂרָאֵל הוּא נֹתֵן עֹז וְתַעֲצֻמוֹת לָעָם בָּרוּךְ אֱלֹהִים: אֵל־נְקָמוֹת יְהֹוָה אֵל נְקָמוֹת הוֹפִֽיעַ: הִנָּשֵׂא שֹׁפֵט הָאָֽרֶץ הָשֵׁב גְּמוּל עַל־גֵּאִים: לַיהוָֹה הַיְשׁוּעָה עַל־עַמְּ֒ךָ בִרְכָתֶֽךָ סֶּֽלָה: יְהֹוָה צְבָאוֹת עִמָּנוּ מִשְׂגָּב לָֽנוּ אֱלֹהֵי יַעֲקֹב סֶֽלָה: יְהֹוָה צְבָאוֹת אַשְׁרֵי אָדָם בֹּטֵֽחַ בָּךְ: יְהֹוָה הוֹשִֽׁיעָה הַמֶּֽלֶךְ יַעֲנֵֽנוּ בְיוֹם־קָרְאֵֽנוּ
            </Text>
            <Text fontSize={size}>
            הוֹשִֽׁיעָה אֶת־עַמֶּֽךָ וּבָרֵךְ אֶת־נַחֲלָתֶֽךָ וּרְעֵם וְנַשְּׂ֒אֵם עַד־הָעוֹלָם: נַפְשֵֽׁנוּ חִכְּ֒תָה לַיהוָֹה עֶזְרֵֽנוּ וּמָגִנֵּֽנוּ הוּא: כִּי־בוֹ יִשְׂמַח לִבֵּֽנוּ כִּי בְשֵׁם קָדְשׁוֹ בָטָֽחְנוּ: יְהִי־חַסְדְּ֒ךָ יְהֹוָה עָלֵֽינוּ כַּאֲשֶׁר יִחַֽלְנוּ לָךְ: הַרְאֵֽנוּ יְהֹוָה חַסְדֶּֽךָ וְיֶשְׁעֲךָ תִּֽתֶּן־לָֽנוּ: קֽוּמָה עֶזְרָֽתָה לָּנוּ וּפְדֵֽנוּ לְמַֽעַן חַסְדֶּֽךָ: אָנֹכִי יְהֹוָה אֱלֹהֶֽיךָ הַמַּעַלְךָ מֵאֶֽרֶץ מִצְרָֽיִם הַרְחֶב־פִּֽיךָ וַאֲמַלְאֵֽהוּ: אַשְׁרֵי הָעָם שֶׁכָּֽכָה לּוֹ אַשְׁרֵי הָעָם שֶׁיְהֹוָה אֱלֹהָיו: וַאֲנִי בְּחַסְדְּ֒ךָ בָטַֽחְתִּי יָגֵל לִבִּי בִּישׁוּעָתֶֽךָ אָשִֽׁירָה לַיהוָֹה כִּי גָמַל עָלָי
            </Text>

            <Text fontSize={size}>
            Give thanks to Adonoy, proclaim His Name; make His deeds known among the nations. Sing to Him, compose songs to Him, speak of all His wonders. Take pride in [uttering] His holy Name, let the heart rejoice of those who seek Adonoy. Search for Adonoy and His might, seek His presence continually. Remember the wonders He has performed, His miracles, and the laws from His mouth. [You,] the seed of Israel His servant, children of Jacob, His chosen ones. He is Adonoy our God; the entire earth is governed by His laws. Remember His covenant forever— the word He commanded to a thousand generations— which He made as a treaty with Abraham, and [which was] His oath to Isaac. He established it for Jacob as a statute, for Israel as an everlasting covenant. Saying, To you I will give the Land of Canaan, the portion of your inheritance. When you were only few in number— very few, and strangers in it. They wandered from nation to nation, and from one kingdom to another people. He permitted no one to oppress them, and admonished kings for their sakes. Do not touch My anointed ones,8 and do not harm My prophets.” Sing to Adonoy all the earth, proclaim His deliverance from day to day.10 Recount His glory among the nations, His wonders among all the peoples. For Adonoy is great and most extolled; Awesome is He above all gods. For all the gods of the peoples are idols, whereas Adonoy made the heavens.
            </Text>
            <Text fontSize={size}>
            Beauty and splendor are before Him,11 strength and joy are in His presence. Give to Adonoy families of peoples— give to Adonoy glory and might. Give to Adonoy the glory due His Name, bring an offering and come before Him, prostrate yourselves before Adonoy in the splendor of holiness.12 Tremble before Him all [peoples of] the earth, for He established the inhabited world so that it cannot be moved. The heavens will rejoice, the earth will exult,13 and they will proclaim among the nations: Adonoy has begun His reign. The sea and its fullness will roar; the field and all that is in it will jubilate. Then the trees of the forest will sing with joy, [receding] before Adonoy when He comes to judge the earth. Give thanks to Adonoy, for He is good, for His kindness is everlasting. And say, “Deliver us, God of our deliverance; gather us and save us from the nations, to give thanks to Your holy Name, to be extolled in Your praise.”14 Blessed is Adonoy, the God of Israel for all eternity, and all the people said: “Amein” and [they] praised Adonoy.” Exalt Adonoy, our God, and prostrate yourselves at His footstool.15 Holy is He!16 Exalt Adonoy, our God, and prostrate yourselves at His holy mountain,17 for Adonoy our God is holy.            
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
            הוֹדוּ לַיהוָֹה קִרְאוּ בִשְׁמוֹ הוֹדִֽיעוּ בָעַמִּים עֲלִילֹתָיו: שִֽׁירוּ לוֹ זַמְּ֒רוּ־לוֹ שִֽׂיחוּ בְּכָל־נִפְלְ֒אוֹתָיו: הִתְהַלְּ֒לוּ בְּשֵׁם קָדְשׁוֹ יִשְׂמַח לֵב מְבַקְשֵׁי יְהֹוָה: דִּרְשׁוּ יְהֹוָה וְעֻזּוֹ בַּקְּ֒שׁוּ פָנָיו תָּמִיד: זִכְרוּ נִפְלְ֒אֹתָיו אֲשֶׁר עָשָׂה מֹפְ֒תָיו וּמִשְׁפְּ֒טֵי־פִֽיהוּ: זֶֽרַע יִשְׂרָאֵל עַבְדּוֹ בְּנֵי יַעֲקֹב בְּחִירָיו: הוּא יְהֹוָה אֱלֹהֵֽינוּ בְּכָל־הָאָֽרֶץ מִשְׁפָּטָיו: זִכְרוּ לְעוֹלָם בְּרִיתוֹ דָּבָר צִוָּה לְאֶֽלֶף דּוֹר: אֲשֶׁר כָּרַת אֶת־אַבְרָהָם וּשְׁבוּעָתוֹ לְיִצְחָק: וַיַּעֲמִידֶֽהָ לְיַעֲקֹב לְחֹק לְיִשְׂרָאֵל בְּרִית עוֹלָם: לֵאמֹר לְךָ אֶתֵּן אֶֽרֶץ־כְּנָעַן חֶֽבֶל נַחֲלַתְכֶם: בִּהְיוֹתְ֒כֶם מְתֵי מִסְפָּר כִּמְעַט וְגָרִים בָּהּ: וַיִּתְהַלְּ֒כוּ מִגּוֹי אֶל־גּוֹי וּמִמַּמְלָכָה אֶל־עַם אַחֵר: לֹא־הִנִּֽיחַ לְאִישׁ לְעָשְׁקָם וַיּֽוֹכַח עֲלֵיהֶם מְלָכִים: אַל־תִּגְּ֒עוּ בִּמְשִׁיחָי וּבִנְבִיאַי אַל־תָּרֵֽעוּ: שִֽׁירוּ לַיהוָֹה כָּל־הָאָֽרֶץ בַּשְּׂ֒רוּ מִיּוֹם־אֶל־יוֹם יְשׁוּעָתוֹ: סַפְּ֒רוּ בַגּוֹיִם אֶת־כְּבוֹדוֹ בְּכָל־הָעַמִּים נִפְלְאֹתָיו: כִּי גָדוֹל יְהֹוָה וּמְהֻלָּל מְאֹד וְנוֹרָא הוּא עַל־כָּל־אֱלֹהִים: כִּי כָּל־אֱלֹהֵי הָעַמִּים אֱלִילִים וַיהוָֹה שָׁמַֽיִם עָשָׂה
            </Text>
            <Text fontSize={size}>
            הוֹד וְהָדָר לְפָנָיו עֹז וְחֶדְוָה בִּמְקֹמוֹ: הָבוּ לַיהוָֹה מִשְׁפְּ֒חוֹת עַמִּים הָבוּ לַיהוָֹה כָּבוֹד וָעֹז: הָבוּ לַיהוָֹה כְּבוֹד שְׁמוֹ שְׂאוּ מִנְחָה וּבֹֽאוּ לְפָנָיו הִשְׁתַּחֲווּ לַיהוָֹה בְּהַדְרַת־קֹֽדֶשׁ: חִֽילוּ מִלְּ֒פָנָיו כָּל־הָאָֽרֶץ אַף־תִּכּוֹן תֵּבֵל בַּל־תִּמּוֹט: יִשְׂמְחוּ הַשָּׁמַֽיִם וְתָגֵל הָאָֽרֶץ וְיֹאמְ֒רוּ בַגּוֹיִם יְהֹוָה מָלָךְ: יִרְעַם הַיָּם וּמְלוֹאוֹ יַעֲלֹץ הַשָּׂדֶה וְכָל־אֲשֶׁר־בּוֹ: אָז יְרַנְּ֒נוּ עֲצֵי הַיָּעַר מִלִּפְנֵי יְהֹוָה כִּי־בָא לִשְׁפּוֹט אֶת־הָאָֽרֶץ: הוֹדוּ לַיהוָֹה כִּי טוֹב כִּי לְעוֹלָם חַסְדּוֹ: וְאִמְרוּ הוֹשִׁיעֵֽנוּ אֱלֹהֵי יִשְׁעֵֽנוּ וְקַבְּ֒צֵֽנוּ וְהַצִּילֵֽנוּ מִן־הַגּוֹיִם לְהוֹדוֹת לְשֵׁם קָדְשֶֽׁךָ לְהִשְׁתַּבֵּֽחַ בִּתְהִלָּתֶֽךָ: בָּרוּךְ יְהֹוָה אֱלֹהֵי יִשְׂרָאֵל מִן־הָעוֹלָם וְעַד הָעֹלָם וַיֹּאמְ֒רוּ כָל־הָעָם אָמֵן וְהַלֵּל לַיהוָֹה: רוֹמְ֒מוּ יְהֹוָה אֱלֹהֵֽינוּ וְהִשְׁתַּחֲווּ לַהֲדֹם רַגְלָיו קָדוֹשׁ הוּא: רוֹמְ֒מוּ יְהֹוָה אֱלֹהֵֽינוּ וְהִשְׁתַּחֲווּ לְהַר קָדְשׁוֹ כִּי קָדוֹשׁ יְהֹוָה אֱלֹהֵֽינוּ
            </Text>
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
                Give thanks to Adonoy, proclaim His Name; 
make His deeds known among the nations. 
Sing to Him, compose songs to Him,
speak of all His wonders.
Take pride in [uttering] His holy Name, 
let the heart rejoice of those who seek Adonoy. 
Search for Adonoy and His might, 
seek His presence continually. 
Remember the wonders He has performed, 
His miracles, and the laws from His mouth. 
[You,] the seed of Israel His servant, 
children of Jacob, His chosen ones.
He is Adonoy our God; 
the entire earth is governed by His laws.
Remember His covenant forever— 
the word He commanded to a thousand generations—
which He made as a treaty with Abraham, 
and [which was] His oath to Isaac. 
He established it for Jacob as a statute, 
for Israel as an everlasting covenant. 
Saying, To you I will give the Land of Canaan,
 the portion of your inheritance. 
When you were only few in number—
 very few, and strangers in it.
 They wandered from nation to nation, 
and from one kingdom to another people. 
He permitted no one to oppress them, 
and admonished kings for their sakes. 
Do not touch My anointed ones, 
and do not harm My prophets.
Sing to Adonoy all the earth, 
proclaim His deliverance from day to day. 
Recount His glory among the nations, 
His wonders among all the peoples. 
For Adonoy is great and most extolled; 
Awesome is He above all gods.
For all the gods of the peoples are idols, 
whereas Adonoy made the heavens.
            </Text>
            <Text fontSize={size}>
            Beauty and splendor are before Him, 
strength and joy are in His presence. 
Give to Adonoy families of peoples—
 give to Adonoy glory and might.
 Give to Adonoy the glory due His Name,
bring an offering and come before Him, 
prostrate yourselves before Adonoy in the splendor of holiness. 
Tremble before Him all [peoples of] the earth,
 for He established the inhabited world so that it cannot be moved.
 The heavens will rejoice, the earth will exult, 
and they will proclaim among the nations: Adonoy has begun His reign. 
The sea and its fullness will roar;
 the field and all that is in it will jubilate. 
Then the trees of the forest will sing with joy, 
[receding] before Adonoy when He comes to judge the earth. 
Give thanks to Adonoy, for He is good, 
for His kindness is everlasting. 
And say, “Deliver us, God of our deliverance; 
gather us and save us from the nations,
 to give thanks to Your holy Name,
 to be extolled in Your praise.” 
Blessed is Adonoy, the God of Israel 
for all eternity, 
and all the people said: “Amein” and [they] praised Adonoy.” 
Exalt Adonoy, our God, 
and prostrate yourselves at His footstool. Holy is He! 
Exalt Adonoy, our God, 
and prostrate yourselves at His holy mountain, 
for Adonoy our God is holy.
            </Text>
            <Text fontSize={size}>
            And He, the Merciful One, atones iniquity and does not destroy;
 He frequently withdraws His anger 
and does not arouse all His rage.
 You, Adonoy, withhold not Your mercy from me; 
may Your kindness and Your truth always protect me. 
Remember Your mercies Adonoy and kindnesses,
 for they are from the beginning of the world. 
Give might to God, 
His pride (majesty) hovers over Israel,
 and His might is in the clouds. 
You are awesome, God, from Your Sanctuaries, 
Almighty of Israel—He grants might and power to the people;
 blessed is God. 
Almighty of vengeance, Adonoy, 
Almighty of vengeance, reveal Yourself. 
Arise, Judge of the earth! 
Repay the arrogant their just reward. 
Deliverance is Adonoy’s. 
Upon Your people is Your blessing. Selah. 
Adonoy of Hosts is with us,
 a stronghold for us is the God of Jacob. Selah. 
Adonoy of Hosts! 
Fortunate is the man who trusts in You. 
Adonoy, deliver [us]. 
The King will answer us on the day we call.

            </Text>
            <Text fontSize={size}>
            Deliver Your people 
and bless Your inheritance,
 tend them and uplift them forever. 
Our soul yearned for Adonoy, 
our help and our shield is He.
 For in Him our hearts will rejoice, 
for in His holy Name we trusted. 
May Your kindness, Adonoy, be upon us, 
as we have waited for You.
 Show us Your kindness, Adonoy, 
and grant us Your deliverance. 
Arise—come to our aid, 
and redeem us for the sake of Your kindness.
 I am Adonoy, Your God, 
Who brought you up from the land of Egypt; 
open your mouth wide, and I will fill it. 
Fortunate is the people whose lot is thus, 
fortunate is the people for whom Adonoy is their God.
 In Your loving kindness I trust, 
My heart will exult in Your deliverance; 
I will sing to Adonoy, for He dealt kindly with me.

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

export default HoduFull;