import React from "react";
import styled from "styled-components";
import {useNavigate} from "react-router";

function Footer({minimum, 
    maximum, 
    order, 
    setMinimum, 
    setMaximum, 
    setOrder, 
    upTo, 
    setUpTo, 
    saidAshrei, 
    setSaidAshrei, 
    isRushing, 
    setIsRushing,
    saidHallelukah1,
    saidHallelukah2,
    saidHallelukah4,
    setSaidHallelukah1,
    setSaidHallelukah2,
    setSaidHallelukah4
}) {

    let navigate = useNavigate();

    const minimumClick = () => {
      if(upTo === 'BaruchSheamar'){
        navigate('/Ashrei')
        setUpTo('Ashrei')
      }else if(upTo === 'Ashrei'){
        navigate('/Yishtabach')
        setUpTo('Yishtabach')
      }else if(upTo === 'Yishtabach'){
        navigate('/')
        setUpTo('start')
        setMinimum(false)
      }
    }

    const maximumClick = () => {
        if(upTo === 'MizmorShir'){
          navigate('/BaruchSheamar')
          setUpTo('BaruchSheamar')
        }else if(upTo === 'BaruchSheamar'){
          navigate('/HoduFull')
          setUpTo('HoduFull')
        }else if(upTo === 'HoduFull'){
            navigate('/MizmorLetodah')
            setUpTo('MizmorLetodah')
        }else if(upTo === 'MizmorLetodah'){
            navigate('/YehiChevod')
            setUpTo('YehiChevod')
        }else if(upTo === 'YehiChevod'){
            navigate('/Ashrei')
            setUpTo('Ashrei')
        }else if(upTo === 'Ashrei'){
            navigate('/Hallelukah1')
            setUpTo('Hallelukah1')
        }else if(upTo === 'Hallelukah1'){
            navigate('/Hallelukah2')
            setUpTo('Hallelukah2')
        }else if(upTo === 'Hallelukah2'){
            navigate('/Hallelukah3')
            setUpTo('Hallelukah3')
        }else if(upTo === 'Hallelukah3'){
            navigate('/Hallelukah4')
            setUpTo('Hallelukah4')
        }else if(upTo === 'Hallelukah4'){
            navigate('/Hallelukah5')
            setUpTo('Hallelukah5')
        }else if(upTo === 'Hallelukah5'){
            navigate('/BaruchHashemLeolam')
            setUpTo('BaruchHashemLeolam')
        }else if(upTo === 'BaruchHashemLeolam'){
            navigate('/VayevarechDavidFull')
            setUpTo('VayevarechDavidFull')
        }else if(upTo === 'VayevarechDavidFull'){
            navigate('/Vecharot')
            setUpTo('Vecharot')
        }else if(upTo === 'Vecharot'){
            navigate('/AzYashir')
            setUpTo('AzYashir')
        }else if(upTo === 'AzYashir'){
            navigate('/Yishtabach')
            setUpTo('Yishtabach')
        }else if(upTo === 'Yishtabach'){
            navigate('/')
            setUpTo('start')
            setMaximum(false)
        }
      }

      const orderClick = () => {
        if(upTo === 'BaruchSheamar'){
          navigate('/Ashrei')
          setUpTo('Ashrei')
          setSaidAshrei(true)
        }else if(upTo === 'Ashrei'){
            if(isRushing === true){
                navigate('/Yishtabach')
                setUpTo('Yishtabach')
            }else{
          navigate('/Hallelukah5')
          setUpTo('Hallelukah5')}
        }else if(upTo === 'Hallelukah5'){
            navigate('/Hallelukah3')
            setUpTo('Hallelukah3')
        }else if(upTo === 'Hallelukah3'){
            navigate('/Hallelukahs')
            setUpTo('Hallelukahs')
        }else if(upTo === 'Hallelukahs'){
            navigate('/Hallelukahs')
            setUpTo('Hallelukahs')
            // if(saidHallelukah1 === false
            //     || saidHallelukah2 === false
            //     || saidHallelukah4 === false){
            //         alert(`Say all Hallelukah's before continuing!`)
            //     }
        }else if(upTo === 'HallelukahsDone'){
            navigate('/VayevarechDavidPrimary')
            setUpTo('VayevarechDavidPrimary')
            setSaidHallelukah1(false)
            setSaidHallelukah2(false)
            setSaidHallelukah4(false)
        }else if(upTo === 'VayevarechDavidPrimary'){
            navigate('/HoduPrimary')
            setUpTo('HoduPrimary')
        }else if(upTo === 'HoduPrimary'){
            navigate('/Extras')
            setUpTo('Extras')
        }else if(upTo === 'Extras'){
            navigate('/Extras')
            setUpTo('Extras')
        }else if(upTo === 'Yishtabach'){
            navigate('/')
            setUpTo('start')
            setOrder(false)
            setIsRushing(false)
            setSaidAshrei(false)
        }
      }

      const outOfTime = () => {
          setIsRushing(true)
        if(saidAshrei === true){
            navigate('/Yishtabach')
            setUpTo('Yishtabach')
      }else{
          navigate('/Ashrei')
      }
        
      }

    return(
        <Container>
                <FooterSpace>
            {minimum ? <Button onClick={minimumClick}>{upTo === 'Yishtabach' ? 'Done' : 'Next'}</Button> : null}
            {maximum ? <Button onClick={maximumClick}>{upTo === 'Yishtabach' ? 'Done' : 'Next'}</Button> : null}
            {order ? <Button onClick={orderClick}>{upTo === 'Yishtabach' ? 'Done' : 'Keep Going'}</Button> : null}
            {order === true && isRushing === false ? <Button onClick={outOfTime}>I'm out of time</Button> : null}
            </FooterSpace>
            </Container>
    )
}

const FooterSpace = styled.div`
position: absolute;
  bottom: 0;
  width: 100%;
  justify-content: center;
  align-items: center;
  min-height: 10vh;
  padding: 2vh;
//   border-top: 4px solid grey;
//   background-color: rgb(37, 38, 51);
background-image: url( https://media.istockphoto.com/photos/dark-blue-leather-texture-on-macro-blue-leather-background-picture-id1148387834?b=1&k=20&m=1148387834&s=170667a&w=0&h=tUrUhDjNf_LUvdAslD2fWi8eCk70alMrp-L4ukx3kws=);
`;

const Container = styled.div`
position: relative;
min-height: 35vh;
`;

const Button = styled.button`

  margin-top: 2vh;
  margin-bottom: 2vh;
  width: 90vw;
  height: 12vh;
  /* line-height: 50px; */
  font-weight: bold;
  text-decoration: none;
  text-align: center;
  align-items: center;
  color: rgb(37, 38, 51);
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all .35s;
  justify-content: center;
  font-size: 3vh;
//   font-color: rgb(37, 38, 51);
//   background-image: url(https://cdn.wallpapersafari.com/92/94/3grNzW.jpg);
background-image: url(https://us.123rf.com/450wm/bank2cool/bank2cool1409/bank2cool140900007/31247391-grey-leather-texture-background.jpg?ver=6);

  `;

export default Footer;