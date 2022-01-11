import React, {useState} from "react";
import styled from "styled-components";

function BaruchSheamar({size}) {

    return(
        <Container>
            <Heading>בָּרוּךְ שֶׁאָמַר</Heading>
            <Text fontSize={size}>
            בָּרוּךְ שֶׁאָמַר וְהָיָה הָעוֹלָם. בָּרוּךְ הוּא. בָּרוּךְ עוֹשֶׂה בְרֵאשִׁית. בָּרוּךְ אוֹמֵר וְעוֹשֶׂה. בָּרוּךְ גּוֹזֵר וּמְקַיֵּם. בָּרוּךְ מְרַחֵם עַל־הָאָֽרֶץ. בָּרוּךְ מְרַחֵם עַל־הַבְּ֒רִיּוֹת. בָּרוּךְ מְשַׁלֵּם שָׂכָר טוֹב לִירֵאָיו. בָּרוּךְ חַי לָעַד וְקַיָּם לָנֶֽצַח. בָּרוּךְ פּוֹדֶה וּמַצִּיל. בָּרוּךְ שְׁמוֹ. בָּרוּךְ אַתָּה יְהֹוָה אֱלֹהֵֽינוּ מֶֽלֶךְ הָעוֹלָם הָאֵל הָאָב הָרַחֲמָן הַמְ֒הֻלָּל בְּפִי עַמּוֹ מְשֻׁבָּח וּמְפֹאָר בִּלְשׁוֹן חֲסִידָיו וַעֲבָדָיו וּבְשִׁירֵי דָוִד עַבְדֶּֽךָ. נְהַלֶּלְךָ יְהֹוָה אֱלֹהֵֽינוּ בִּשְׁבָחוֹת וּבִזְמִירוֹת נְגַדֶּלְךָ וּנְשַׁבֵּחֲךָ וּנְפָאֶרְךָ וְנַזְכִּיר שִׁמְךָ וְנַמְלִיכְ֒ךָ מַלְכֵּֽנוּ אֱלֹהֵֽינוּ. יָחִיד חֵי הָעוֹלָמִים. מֶֽלֶךְ מְשֻׁבָּח וּמְפֹאָר עֲדֵי־עַד שְׁמוֹ הַגָּדוֹל. בָּרוּךְ אַתָּה יְהֹוָה מֶֽלֶךְ מְהֻלָּל בַּתִּשְׁבָּחוֹת          
            </Text>
        </Container>
    )
}

const Container = styled.div`
min-height: 50vh;
`;

const Heading = styled.h1`
text-align: right;
margin-right: 5vw;
font-family: 'Times New Roman', Georgia, serif;
`;

const Text = styled.div`
font-size: ${props => props.fontSize}px;
text-align: right;
margin-right: 0vw;
margin-left: 2vw;
margin-bottom: 5vh;
font-family: 'Times New Roman', Georgia, serif;
`;

export default BaruchSheamar;