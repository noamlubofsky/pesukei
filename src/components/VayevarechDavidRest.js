import React from "react";
import styled from "styled-components";

function VayevarechDavidRest() {
    return(
        <div>
            <Heading>Rest of וַיְבָֽרֶךְ דָּוִיד</Heading>

            <Text>
            אַתָּה־הוּא יְהֹוָה לְבַדֶּֽךָ, אַתָּה עָשִֽׂיתָ אֶת־הַשָּׁמַֽיִם שְׁמֵי הַשָּׁמַֽיִם וְכָל־צְבָאָם, הָאָֽרֶץ וְכָל־אֲשֶׁר עָלֶֽיהָ הַיַּמִּים וְכָל־אֲשֶׁר בָּהֶם, וְאַתָּה מְחַיֶּה אֶת־כֻּלָּם וּצְבָא הַשָּׁמַֽיִם לְךָ מִשְׁתַּחֲוִים: אַתָּה הוּא יְהֹוָה הָאֱלֹהִים אֲשֶׁר בָּחַֽרְתָּ בְּאַבְרָם וְהוֹצֵאתוֹ מֵאוּר כַּשְׂדִּים וְשַֽׂמְתָּ שְׁמוֹ אַבְרָהָם: וּמָצָֽאתָ אֶת־לְבָבוֹ נֶאֱמָן לְפָנֶֽיךָ        
            </Text>
        </div>
    )
}

const Heading = styled.h1`
text-align: right;
margin-right: 5vw;
font-family: 'Times New Roman', Georgia, serif;
`;

const Text = styled.div`
font-size: 30px;
text-align: right;
margin-right: 5vw;
margin-left: 2vw;
margin-bottom: 5vh;
font-family: 'Times New Roman', Georgia, serif;
`;

export default VayevarechDavidRest;