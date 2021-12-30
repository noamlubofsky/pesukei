import React from "react";
import styled from "styled-components";

function BaruchHashemLeolam() {
    return(
        <div>
            <Text>
            בָּרוּךְ יְהֹוָה לְעוֹלָם אָמֵן וְאָמֵן: בָּרוּךְ יְהֹוָה מִצִּיּוֹן שֹׁכֵן יְרוּשָׁלָֽםִ הַלְ֒לוּיָהּ: בָּרוּךְ יְהֹוָה אֱלֹהִים אֱלֹהֵי יִשְׂרָאֵל עֹשֵׂה נִפְלָאוֹת לְבַדּוֹ: וּבָרוּךְ שֵׁם כְּבוֹדוֹ לְעוֹלָם וְיִמָּלֵא כְבוֹדוֹ אֶת־כָּל־הָאָֽרֶץ אָמֵן וְאָמֵן:            </Text>
        </div>
    )
}

const Text = styled.div`
font-size: 30px;
text-align: right;
margin-right: 2vw;
margin-left: 2vw;
`;

export default BaruchHashemLeolam;