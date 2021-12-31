import React from "react";
import styled from "styled-components";

function Halachot() {
    return(
        <div>
            <Container>
            <Heading>הלכות פסוקי דזמרא</Heading>
            
< p>There is an obligation on every male to fulfill the מצוה of תפילה בציבור (This is not to be confused with the מצוה of Davening with a Minyan - Davening with 10 men so that one can say דברים שבקדושה  such as קדש, ברכו, חזרת הש״ץ etc.)
</ p>

< p>The מצוה of תפילה בציבור is fulfilled by Davening שמונה עשרה at the same time with a group of 10 men (according to the שולחן ערוך one should Daven along with the minyan starting from ברכו). 
</ p>

< p>Because of this, depending on the speed at which one Davens compared to the ציבור, or the time that one gets to Shul, one may need to skip parts of פסוקי דזמרה in order to fulfill the מצוה of תפילה בציבור. 
</ p>

< p>The minimum amount of פסוקי דזימרה that one can say is:</ p>

< h3>ברוך שאמר, אשרי, ישתבח </ h3>

< p>Selecting the minimum requirement of פסוקי דזמרה from the menu will take you through these תפילות. </ p>

< p>Selecting “פסוקי דזמרא in order of importance” will take you through פסוקי דזמרה in the Halachic order of importance. When the ציבור reaches ישתבח you can select “I’m out of time” which will take you straight to ישתבח (or אשרי if not yet said, then ישתבח). 
</ p>

            </Container>
        </div>
        
    )
}

const Heading = styled.h2`
text-align: right;
margin-right: 5vw;
`;

const Container = styled.div`
padding: 5vh;
font-size: 2vh;
`;

export default Halachot