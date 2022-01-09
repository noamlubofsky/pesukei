import React, {useState} from "react";
import styled from "styled-components";
import blueleather from '../blueleather.jpeg'

function Zmanim() {
    const [zip, setZip] = useState('')
    const [zmanim, setZmanim] = useState([])
    const [haveTimes, setHaveTimes] = useState(false)
    const [earliest, setEarliest] = useState('')
    const [latest, setLatest] = useState('')
    const [chatzot, setChatzot] = useState('')

    const getZmanim = () => {
        fetch(`https://www.hebcal.com/zmanim?cfg=json&zip=${zip}`, {
    })
    .then((res) => res.json())
    .then((data) => setZmanim(data.times))
    setEarliest(zmanim.alotHaShachar.split('T')[1].split('-')[0])
    setLatest(zmanim.sofZmanTfilla.split('T')[1].split('-')[0])
    setChatzot(zmanim.chatzot.split('T')[1].split('-')[0])
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        getZmanim()

        setHaveTimes(true)

    }


    return(
        <div>
            
            <Container>
            <form>
            <Input required type="text" value={zip} onChange={(e) => setZip(e.target.value)}placeholder="Zip Code"></Input>
            <br></br>
            <Button type="submit" onClick={handleSubmit}>Get my Zmanim</Button>
            </form>

            {!haveTimes ? null : 
            <div>
                <Heading>Earliest time to say Pesukei Dezimra:</Heading>
                <Time> {earliest}</Time>
                <Heading>Latest time to say Pesukei Dezimra: </Heading>
                <Time>{latest}</Time>
                <Heading>Chatzot: </Heading>
                <Time>{chatzot}</Time>

            </div>
            }

            </Container>

            <Heading>The time to say Pesukei DeZimrah is from Alot Hashachar (72 minutes before sunrise) until the 4th hour in Shaot Zmaniot.[1]</Heading>
            <Heading>If one missed the time unintentionally or unwillingly one can say pesukei dzimra after 4 hours until Chatzot with shem umalchut.[2]</Heading>
            <Heading>If one missed the time intentionally one can only say Baruch Sh'amar and Yishtabach without Hashem’s name in the bracha.[3]</Heading>
            <Heading>If it is after Chatzot, or one said Shmoneh Esrei before one said Pesukei DeZimrah, one should only say Baruch Sh'amar and Yishtabach without Hashem’s name in the bracha.[4]</Heading>

            <P>1  Elyah Raba 664:3 in name of Maharil, Mekor Chaim 18:3, Torat Chaim Sofer 51:1, Yechva Daat 2:8. The Yosef Ometz Uzfa is strict that it should not be done until closer to sunrise. However, Teshuva MeAhava 2 pg 6(3) and Meharsham BeDaat Torah 664, in name of Rashi, say that it can be said before Alot Hashachar.</P>
            <P>2 Mishna Brurah 71:4, Yalkut Yosef 89:5 (Tefillah v. 1 p. 54), Halacha Brurah 51:6 and 89:9. However, Or Letzion (v. 2 ch. 5 fnt. 3) holds that since psukei dzimra can only be said before shemona esrei and shemona esrei can only be said until the fourth hour, after the fourth hour one can't recite psukei dzimra. Yalkut Yosef 89:5 (Tefillah v. 1 p. 54) writes that after the fourth hour a person can say pesukei dizimra with shem umalchut. Halacha Brurah 51:6 and 89:9 and Tefilah Vhilchoteha 3:3:2 agree.</P>
            <P>3 Since it is a dispute whether one can say Shmoneh Esrei if one intentionally didn't pray until after the fourth hour it is a question whether one can recite pesukei dizmra in that case. Halacha Brurah 51:6 and 89:9 writes that if a person intentionally did not pray until after the fourth hour he can't recite Pesukei DeZimrah with shem umalchut, since it is a dispute and no stipulation is valid, we do not say the bracha as it is a Safek Bracha.</P>
            <P>4 Shulchan Aruch O.C. 52:1, Aruch (Erech Tefilah), Machsor Vitri 23, Or Zaruha 1:100, Smak 12:77, Hagahot Maimon Tefilah 7:50, Rashba 1:589 in name of Ramban, Shibolei HaLeket 7, against the Talmedei Rabbenu Yonah Brachot 23a who say you can still say it after Shmoneh Esrei. Halacha Brurah 51:6 extends this also to where the Chatzot passed.</P>
            <P>* Halachot courtesy of Halachapedia</P>
        </div>
        
    )
}

const Button = styled.button`

  margin-top: 2vh;
  margin-bottom: 2vh;
  width: 60%;
  height: 8vh;
  /* line-height: 50px; */
  font-weight: bold;
  text-decoration: none;
  text-align: center;
  align-items: center;
//   color: rgb(37, 38, 51);
text-transform: uppercase;
letter-spacing: 1px;
transition: all .35s;
justify-content: center;
font-size: 2vh;
// border: 2px solid #F5C983;

//   background-image: url(https://media.istockphoto.com/photos/genuine-leather-texture-background-picture-id885433636?b=1&k=20&m=885433636&s=170667a&w=0&h=f0Mw8HS7Lm3ZZ7CvbSmdBO5Imn7YjPboaNaDZrFIaiQ=);
color: silver;
background-image: url(${blueleather});
background-position: center;
background-repeat: no - repeat;
background-size: cover;
  `;

const Input = styled.input`
    width: 40vw;
    height: 5vh;
    border: none;
    border-bottom: 2px solid #001939;
font-size: large;
outline: none;
background-color: transparent;
border-radius: none;
&:focus {
    outline: none;
    border-bottom: 2px solid #B96630;
}
`;

const Heading = styled.h2`
margin-left: 5vw;
margin-right: 5vw;
`;

const Time = styled.h1`
margin-right: 5vw;
margin-left: 5vw;
font-weight: 300;
`;

const P = styled.p`
margin-right: 5vw;
margin-left: 5vw;
`;

const Container = styled.div`
padding: 3vh;
font-size: 2vh;
align-items: center;
justify-content: center;
text-align: center;
`;

export default Zmanim;