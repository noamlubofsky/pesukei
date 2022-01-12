import React from "react";
import styled from "styled-components";

function Hallelukah4({size}) {
    return(
        <Container>
                        <Heading>4 הַלְ֒לוּיָהּ</Heading>

            <Text fontSize={size}>
            הַלְ֒לוּיָהּ שִֽׁירוּ לַיהוָֹה שִׁיר חָדָשׁ תְּהִלָּתוֹ בִּקְהַל חֲסִידִים: יִשְׂמַח יִשְׂרָאֵל בְּעֹשָׂיו בְּנֵי־צִיּוֹן יָגִֽילוּ בְמַלְכָּם: יְהַלְ֒לוּ שְׁמוֹ בְמָחוֹל בְּתֹף וְכִנּוֹר יְזַמְּ֒רוּ־לוֹ: כִּי־רוֹצֶה יְהֹוָה בְּעַמּוֹ יְפָאֵר עֲנָוִים בִּישׁוּעָה: יַעְלְזוּ חֲסִידִים בְּכָבוֹד יְרַנְּנוּ עַל־מִשְׁכְּבוֹתָם: רוֹמְ֒מוֹת אֵל בִּגְרוֹנָם וְחֶֽרֶב פִּיפִיּוֹת בְּיָדָם: לַעֲשׂוֹת נְקָמָה בַגּוֹיִם תּוֹכֵחוֹת בַּלְאֻמִּים: לֶאְסֹר מַלְכֵיהֶם בְּזִקִּים וְנִכְבְּדֵיהֶם בְּכַבְלֵי בַרְזֶל: לַעֲשׂוֹת בָּהֶם מִשְׁפָּט כָּתוּב הָדָר הוּא לְכָל־חֲסִידָיו הַלְ֒לוּיָהּ          </Text>
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

export default Hallelukah4;