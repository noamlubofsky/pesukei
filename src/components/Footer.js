import React, {useState} from "react";
import styled from "styled-components";
import {useNavigate} from "react-router";

function Footer({minimum, maximum, order, setMinimum, setMaximum, setOrder, upTo, setUpTo}) {

    let navigate = useNavigate();

    const minimumClick = () => {
      if(upTo === 'BaruchSheamar'){
        navigate('/Ashrei')
        setUpTo('Ashrei')
      }else if(upTo === 'Ashrei'){
        navigate('/Yishtabach')
        setUpTo('Yishtabach')
      }else if(upTo === 'Yishtabach'){
          navigate('/Barchu')
          setUpTo('Barchu')
      }else if (upTo === 'Barchu'){
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
            navigate('/Barchu')
            setUpTo('Barchu')
        }else if (upTo === 'Barchu'){
            navigate('/')
            setUpTo('start')
            setMaximum(false)
        }
      }

      const orderClick = () => {
        if(upTo === 'BaruchSheamar'){
          navigate('/Ashrei')
          setUpTo('Ashrei')
        }else if(upTo === 'Ashrei'){
          navigate('/Hallelukah5')
          setUpTo('Hallelukah5')
        }else if(upTo === 'Hallelukah5'){
            navigate('/Hallelukah3')
            setUpTo('Hallelukah3')
        }else if(upTo === 'Hallelukah3'){
            navigate('/Hallelukah1')
            setUpTo('Hallelukah1')
        }else if(upTo === 'Hallelukah1'){
            navigate('/Hallelukah2')
            setUpTo('Hallelukah2')
        }else if(upTo === 'Hallelukah2'){
            navigate('/Hallelukah4')
            setUpTo('Hallelukah4')
        }else if(upTo === 'Hallelukah4'){
            navigate('/VayevarechDavidPrimary')
            setUpTo('VayevarechDavidPrimary')
        }else if(upTo === 'VayevarechDavidPrimary'){
            navigate('/HoduPrimary')
            setUpTo('HoduPrimary')
        }else if(upTo === 'HoduPrimary'){
            navigate('/Extras')
            setUpTo('Extras')
        }else if(upTo === 'Extras'){
            navigate('/Extras')
            setUpTo('Extras')
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
            navigate('/Vayosha')
            setUpTo('Vayosha')
        }else if(upTo === 'Vayosha'){
            navigate('/AzYashir')
            setUpTo('AzYashir')
        }else if(upTo === 'AzYashir'){
            navigate('/Yishtabach')
            setUpTo('Yishtabach')
        }else if(upTo === 'Yishtabach'){
            navigate('/Barchu')
            setUpTo('Barchu')
        }else if (upTo === 'Barchu'){
            navigate('/')
            setUpTo('start')
            setMaximum(false)
        }
      }

      const outOfTime = () => {
          
      }

    return(
        <div>
            {minimum ? <button onClick={minimumClick}>{upTo === 'Barchu' ? 'Done' : 'Next'}</button> : null}
            {maximum ? <button onClick={maximumClick}>{upTo === 'Barchu' ? 'Done' : 'Next'}</button> : null}
            {order ? <button onClick={orderClick}>{upTo === 'Extras' ? 'I still have time' : 'Next'}</button> : null}
            {order ? <button onClick={outOfTime}>I'm out of time</button> : null}
        </div>
    )
}

export default Footer;