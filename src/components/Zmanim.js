import React, {useEffect, useState} from "react";
import Calendar from 'react-calendar';
import styled from "styled-components";
import blueleather from '../blueleather.jpeg'

function Zmanim({date, setDate}) {
    const [zip, setZip] = useState('')
    const [zmanim, setZmanim] = useState([])
    const [haveTimes, setHaveTimes] = useState(false)
    const [earliest, setEarliest] = useState('')
    const [latest, setLatest] = useState('')
    const [chatzot, setChatzot] = useState('')
    const [errors, setErrors] = useState(false)
    const [latitude, setLatitude] = useState('')
    const [longitude, setLongitude] = useState('')
    const [haveLocation, setHaveLocation] = useState(false)
    const [loading, setLoading] = useState(false)
    const [usingLocation, setUsingLocation] = useState(false)
    const [usingZip, setUsingZip] = useState(false)
    const [showCalendar, setShowCalendar] = useState(false)
    const [usingDate, setUsingDate] = useState(false)
    const [monthNum, setMonthNum] = useState(new Date().getMonth() + 1)
    const [year, setYear] = useState(new Date().getFullYear())
    const [month, setMonth] = useState(new Date().getMonth())
    const [day, setDay] = useState(new Date().getDate())
    const [dateString, setDateString] = useState('')
    // const [date, setDate] = useState(new Date());
    const [showZip, setShowZip] = useState(false)
    const [hebDate, setHebDate] = useState()
    const [sunset, setSunset] = useState('')
    const [hour, setHour] = useState(new Date().getHours())
    const [minutes, setMinutes] = useState(new Date().getMinutes())
    const [currentTime, setCurrentTime] = useState(('0'+new Date().getHours()).substr(-2) + ':' + ('0'+new Date().getMinutes()).substr(-2) + ':00')
    const [monthDays, setMonthDays] = useState(new Date(date.getFullYear(), date.getMonth() + 1, 0))

    // useEffect(() => {  
    //     fetch(`https://www.hebcal.com/converter?cfg=json&gy=${year}&gm=${monthNum}&gd=${
    //         sunset.split(':')[0] >= hour && sunset.split(':')[1] >= minutes ?
    //     day + 1 : day
    //     }&g2h=1`)
    //     .then(response => response.json())
    //     .then(data => setHebDate(data.hebrew))
    // },[])

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function(position) {
            let loadLatitude = position.coords.latitude
            let loadLongitude = position.coords.longitude
            fetch(`https://www.hebcal.com/zmanim?cfg=json&latitude=${loadLatitude}&longitude=${loadLongitude}&tzid=${timezone}`)
            .then(response => response.json())
            .then((data) => {
                setSunset(data.times.sunset.split('T')[1].split('-')[0])
                setZmanim(data.times);
        console.log(zmanim)
        if(data.times.alotHaShachar.includes('+')){
            setEarliest(data.times.alotHaShachar.split('T')[1].split('+')[0]);
            setLatest(data.times.sofZmanTfilla.split('T')[1].split('+')[0]);
            setChatzot(data.times.chatzot.split('T')[1].split('+')[0])
        }else{
        setEarliest(data.times.alotHaShachar.split('T')[1].split('-')[0]);
        setLatest(data.times.sofZmanTfilla.split('T')[1].split('-')[0]);
        setChatzot(data.times.chatzot.split('T')[1].split('-')[0])
        }
        setHaveTimes(true)
        setUsingLocation(true)
        setHaveLocation(false)
                fetch(`https://www.hebcal.com/converter?cfg=json&gy=${year}&gm=${monthNum}&gd=${
        day}&g2h=1${currentTime >= data.times.sunset.split('T')[1].split('-')[0] ? `&gs=on` : `&gs=off`}`)
        .then(response => response.json())
        .then(data => setHebDate(data.hebrew))
            })
        });
    },[])

    // const getHebrewDate = () => {
    //     fetch(`https://www.hebcal.com/converter?cfg=json&gy=${date.getFullYear()}&gm=${date.getMonth() + 1}&gd=${date.getDate()}&g2h=1`, {
    // })
    // .then((res) => res.json())
    // .then((data) => {
    //     setHebDate(data.hebrew)
    // });
    // }

    const onDateChange = (newDate) => {
        fetch(`https://www.hebcal.com/converter?cfg=json&gy=${newDate.getFullYear()}&gm=${newDate.getMonth() + 1}&gd=${newDate.getDate()}&g2h=1`, {
        })
        .then((res) => res.json())
        .then((data) => {
            setHebDate(data.hebrew)
        });
    showCal()    
    setDate(newDate);
    setDateString(newDate.toString())
    setUsingDate(true)
    setHaveTimes(false)
    setUsingZip(false)
    setUsingLocation(false)
    setYear(date.getFullYear())
    setMonth(date.getMonth())
    setDay(date.getDate())
    setMonthNum(date.getMonth() + 1)
    setShowCalendar(false)
    }

    const getZmanim = () => {
        setErrors(false)
        fetch(
            (!usingDate ?
            `https://www.hebcal.com/zmanim?cfg=json&zip=${zip}`
            : `https://www.hebcal.com/zmanim?cfg=json&zip=${zip}&date=${year}-${monthNum.length === 2 ? monthNum : `0` + monthNum}-${day.length === 2 ? day : `0` + day}` )

            , {
    })
    .then((res) => res.json())
    .then((data) => {
        setZmanim(data.times);
        console.log(zmanim)
        setEarliest(data.times.alotHaShachar.split('T')[1].split('-')[0]);
        setLatest(data.times.sofZmanTfilla.split('T')[1].split('-')[0]);
        setChatzot(data.times.chatzot.split('T')[1].split('-')[0])
    });
    setHaveTimes(true)
    }

    const handleSubmit = (e) => {
      e.preventDefault()
      if(zip.length === 5){
      getZmanim()
      setUsingLocation(false)
      setUsingZip(true)
      setShowZip(!showZip)
      }else{
        // alert('Please enter a valid Zip code')
        setErrors(true)
      }
  }

    // const timezone = (new Date()).getTimezoneOffset()
    // console.log(timezone)

//     const date = new Date();
// const dateAsString = date.toString();
// const timezone = dateAsString.match(/\(([^\)]+)\)$/)[1];

// console.log(timezone);

const timezone = (Intl.DateTimeFormat().resolvedOptions().timeZone)
    
  function componentDidMount() {
    setZip('')
    setLoading(true)
    setHaveLocation(true)
    setUsingLocation(false)
    setUsingZip(false)
    setErrors(false)
    navigator.geolocation.getCurrentPosition(function(position) {
        setLatitude(position.coords.latitude)
        setLongitude(position.coords.longitude)
      setTimeout(() => {
          setLoading(false)
      }, 2000)
    //   setLoading(false)
    });
  }

  const locate = () => {
    setZip('')
    setUsingZip(false)
    setUsingLocation(true)
    setShowZip(false)
    // componentDidMount()
    fetch(
        (!usingDate ?
            `https://www.hebcal.com/zmanim?cfg=json&latitude=${latitude}&longitude=${longitude}&tzid=${timezone}`
            : `https://www.hebcal.com/zmanim?cfg=json&latitude=${latitude}&longitude=${longitude}&tzid=${timezone}&date=${year}-${monthNum.length === 2 ? monthNum : `0` + monthNum}-${day.length === 2 ? day : `0` + day}` )
       , {
})
.then((r) => {
    if (r.ok) {
        setErrors(false)
        r.json().then((data) => {
        setZmanim(data.times);
        console.log(zmanim)
        if(data.times.alotHaShachar.includes('+')){
            setEarliest(data.times.alotHaShachar.split('T')[1].split('+')[0]);
            setLatest(data.times.sofZmanTfilla.split('T')[1].split('+')[0]);
            setChatzot(data.times.chatzot.split('T')[1].split('+')[0])
        }else{
        setEarliest(data.times.alotHaShachar.split('T')[1].split('-')[0]);
        setLatest(data.times.sofZmanTfilla.split('T')[1].split('-')[0]);
        setChatzot(data.times.chatzot.split('T')[1].split('-')[0])
        }
        });
        setHaveTimes(true)
        setHaveLocation(false)
    } else {
      setErrors(true);
    }
  });
  }

  const displayZipInput = (e) => {
      e.preventDefault()
      setShowZip(true)
      setUsingLocation(false)
    setUsingZip(false)
  }

  const showCal = () => {
      setShowCalendar(!showCalendar)
    //   getHebrewDate()
  }


    // const handleCountryChange = (e) => {
    //     setZip('')
    //     fetch(`https://www.hebcal.com/zmanim?cfg=json&city=${e.target.value}`, {
    // })
    // .then((r) => {
    //     if (r.ok) {
    //         setErrors(false)
    //       r.json().then((data) => {
    //         setZmanim(data.times);
    //         if(data.times.alotHaShachar.includes('+')){
    //             setEarliest(data.times.alotHaShachar.split('T')[1].split('+')[0]);
    //             setLatest(data.times.sofZmanTfilla.split('T')[1].split('+')[0]);
    //             setChatzot(data.times.chatzot.split('T')[1].split('+')[0])
    //         }else{
    //         setEarliest(data.times.alotHaShachar.split('T')[1].split('-')[0]);
    //         setLatest(data.times.sofZmanTfilla.split('T')[1].split('-')[0]);
    //         setChatzot(data.times.chatzot.split('T')[1].split('-')[0])
    //         }
    //       });
    //       setHaveTimes(true)
    //     } else {
    //       setErrors(true);
    //     }
    //   });
    // }

    // const countryCodes = ["Select Location", "AD-Andorra La Vella", "AE-Abu Dhab", "AE-Duba", "AF-Kabul", "AI-The Valley", "AL-Tirana", "AM-Yereva", "AO-Luanda", "AR-Buenos Aires", "AR-Cordoba", "AR-Rosario", "AS-Pago Pago", "AT-Vienna", "AU-Adelaide", "AU-Brisbane", "AU-Canberra", "AU-Gold Coast", "AU-Hobart", "AU-Melbourne", "AU-Perth", "AU-Sydney", "AW-Oranjestad", "AZ-Bak", "BA-Sarajevo", "BB-Bridgetown", "BD-Chittagong", "BD-Dhaka", "BD-Khulna", "BE-Brussels", "BF-Ouagadougou", "BG-Sofi", "BH-Manam", "BI-Bujumbur", "BJ-Porto-novo", "BM-Hamilton", "BN-Bandar Seri Begawan", "BO-La Paz", "BO-Santa Cruz de la Sierra", "BR-Belo Horizonte", "BR-Brasilia", "BR-Fortaleza", "BR-Rio de Janeiro", "BR-Salvador", "BR-Sao Paulo", "BS-Nassau", "BT-Thimphu", "BW-Gaboron", "BY-Mins", "BZ-Belmopan", "CA-Calgary", "CA-Edmonton", "CA-Halifax", "CA-Mississauga", "CA-Montreal", "CA-Ottawa", "CA-Quebec City", "CA-Regina", "CA-Saskatoon", "CA-St. John's-05", "CA-Toronto", "CA-Vancouver", "CA-Victoria", "CA-Winnipeg", "CD-Kinshasa", "CD-Lubumbash", "CF-Bangui", "CG-Brazzaville", "CH-Bern", "CH-Geneva", "CH-Zurich", "CI-Abidjan", "CI-Yamoussoukro", "CK-Avarua", "CL-Santiago", "CM-Douala", "CM-Yaounde", "CN-Beijing", "CN-Chengdu", "CN-Chongqing", "CN-Guangzhou", "CN-Harbin", "CN-Kaifeng", "CN-Lanzhou", "CN-Nanchong", "CN-Nanjing", "CN-Puyang", "CN-Shanghai", "CN-Shenyang", "CN-Shenzhen", "CN-Shiyan", "CN-Tai'an", "CN-Tianjin", "CN-Wuhan", "CN-Xi'an", "CN-Yueyang", "CN-Zhumadian", "CO-Barranquilla", "CO-Bogota", "CO-Cali", "CO-Medellin", "CR-San José", "CU-Havana", "CV-Praia", "CW-Willemstad", "CY-Nicosi", "CZ-Prague", "DE-Berlin", "DE-Hamburg", "DE-Munich", "DK-Copenhagen", "DM-Roseau", "DO-Santiago de los Caballeros", "DO-Santo Domingo", "DZ-Algiers", "EC-Guayaquil", "EC-Quito", "EE-Tallin", "EG-Al Jiza", "EG-Alexandri", "EG-Cair", "ER-Asmar", "ES-Barcelona", "ES-Madrid", "ET-Addis Abab", "FI-Helsink", "FJ-Suva", "FK-Stanley", "FO-Tórshavn", "FR-Marseilles", "FR-Paris", "GA-Libreville", "GB-Belfast", "GB-Birmingham", "GB-Bristol", "GB-Cardiff", "GB-Edinburgh", "GB-Glasgow", "GB-Leeds", "GB-Liverpool", "GB-London", "GB-Manchester", "GB-Sheffield", "GE-Tbilis", "GH-Accra", "GH-Kumasi", "GI-Gibraltar", "GL-Nuuk", "GM-Banjul", "GN-Camayenne", "GN-Conakry", "GQ-Malabo", "GR-Athen", "GT-Guatemala City", "GW-Bissau", "GY-Georgetown", "HK-Hong Kong", "HN-Tegucigalpa", "HR-Zagreb", "HT-Port-au-Prince", "HU-Budapest", "ID-Bandung", "ID-Bekasi", "ID-Depok", "ID-Jakarta", "ID-Makassar", "ID-Medan", "ID-Palembang", "ID-Semarang", "ID-South Tangerang", "ID-Surabaya", "ID-Tangerang", "IE-Dublin", "IL-Ashdo", "IL-Ashkelo", "IL-Bat Ya", "IL-Be'er Shev", "IL-Beit Shemes", "IL-Bnei Bra", "IL-Eila", "IL-Hader", "IL-Haif", "IL-Herzliy", "IL-Holo", "IL-Jerusale", "IL-Kfar Sab", "IL-Lo", "IL-Modii", "IL-Nazaret", "IL-Netany", "IL-Petach Tikva", "IL-Ra'anan", "IL-Ramat Ga", "IL-Raml", "IL-Rishon LeZio", "IL-Tel Avi", "IL-Tiberia", "IM-Douglas", "IN-Ahmadabad", "IN-Bangalore", "IN-Bombay", "IN-Calcutta", "IN-Chennai", "IN-Cochin", "IN-Hyderabad", "IN-Jaipur", "IN-Kanpur", "IN-New Delhi", "IN-Pune", "IN-Surat", "IQ-Baghd", "IR-Tehra", "IS-Reykjavík", "IT-Milano", "IT-Rome", "JM-Kingston", "JO-Amma", "JP-Kobe-shi", "JP-Kyoto", "JP-Nagoya-shi", "JP-Osaka-shi", "JP-Sapporo", "JP-Tokyo", "KE-Nairob", "KG-Bishkek", "KH-Phnom Penh", "KM-Moron", "KN-Basseterre", "KP-Pyongyang", "KR-Busan", "KR-Seoul", "KW-Kuwai", "KY-George Town", "KZ-Almaty", "KZ-Astana", "LA-Vientiane", "LB-Beiru", "LC-Castries", "LI-Vaduz", "LR-Monrovia", "LS-Maser", "LT-Vilniu", "LU-Luxemburg", "LV-Rig", "LY-Tripoli", "MA-Casablanca", "MA-Rabat", "MD-Chisina", "ME-Podgorica", "MG-Antananarivo", "MK-Skopj", "ML-Bamako", "MM-Mandalay", "MM-Rangoon", "MN-Ulaanbaatar", "MP-Saipan", "MR-Nouakchott", "MS-Plymouth", "MT-Valletta", "MU-Port Loui", "MW-Lilongw", "MX-Cancun", "MX-Guadalajara", "MX-Iztapalapa", "MX-Mazatlan", "MX-Mexico City", "MX-Monterrey", "MX-Puerto Vallarta", "MX-Tijuana", "MY-Kota Bharu", "MY-Kuala Lumpur", "MZ-Maputo", "NA-Windhoek", "NC-Nouméa", "NE-Niamey", "NG-Abuja", "NG-Lagos", "NI-Managua", "NL-Amsterdam", "NO-Oslo", "NP-Kathmandu", "NU-Alofi", "NZ-Auckland", "NZ-Christchurch", "NZ-Wellington", "OM-Musca", "PA-Panama City", "PE-Lima", "PF-Papeete", "PG-Port Moresby", "PH-Manila", "PK-Islamabad", "PK-Karachi", "PL-Warsa", "PR-San Juan", "PT-Lisbon", "PY-Asuncion", "QA-Doh", "RO-Buchares", "RS-Belgrad", "RU-Mosco", "RU-Novosibirsk", "RU-Saint Petersbur", "RU-Yekaterinburg", "RW-Kigal", "SA-Jedda", "SA-Mecc", "SA-Medin", "SA-Riyad", "SB-Honiara", "SC-Victori", "SD-Khartou", "SD-Omdurma", "SE-Stockholm", "SG-Singapore", "SH-Jamestown", "SI-Ljubljana", "SK-Bratislava", "SL-Freetown", "SN-Dakar", "SO-Mogadis", "SR-Paramaribo", "ST-São Tomé", "SV-San Salvador", "SY-Alepp", "SY-Damascu", "SZ-Mbaban", "TC-Cockburn Town", "TD-Ndjamena", "TG-Lomé", "TH-Bangkok", "TJ-Dushanbe", "TM-Ashgaba", "TN-Tunis", "TR-Adan", "TR-Ankar", "TR-Burs", "TR-Istanbu", "TR-Izmi", "TV-Funafuti", "TW-Kaohsiung", "TW-Taipei", "TZ-Dar es Salaa", "TZ-Dodom", "UA-Kharki", "UA-Kie", "UG-Kampal", "US-Atlanta-GA", "US-Austin-TX", "US-Baltimore-MD", "US-Boston-MA", "US-Buffalo-NY", "US-Chicago-IL", "US-Cincinnati-OH", "US-Cleveland-OH", "US-Columbus-OH", "US-Dallas-TX", "US-Denver-CO", "US-Detroit-MI", "US-Hartford-CT", "US-Honolulu-HI", "US-Houston-TX", "US-Lakewood-NJ", "US-Las Vegas-NV", "US-Livingston-NY", "US-Los Angeles-CA", "US-Memphis-TN", "US-Miami-FL", "US-Milwaukee-WI", "US-Monsey-NY", "US-New Haven-CT", "US-New York-NY", "US-Omaha-NE", "US-Orlando-FL", "US-Passaic-NJ", "US-Philadelphia-PA", "US-Phoenix-AZ", "US-Pittsburgh-PA", "US-Portland-OR", "US-Providence-RI", "US-Richmond-VA", "US-Rochester-NY", "US-Saint Louis-MO", "US-Saint Paul-MN", "US-San Diego-CA", "US-San Francisco-CA", "US-Seattle-WA", "US-Silver Spring-MD", "US-Teaneck-NJ", "US-Washington-DC", "US-White Plains-NY", "UY-Montevideo", "UZ-Tashkent", "VC-Kingstown", "VE-Caracas", "VE-Maracaibo", "VE-Maracay", "VE-Valencia", "VG-Road Town", "VN-Hanoi", "VN-Ho Chi Minh City", "WS-Apia", "YE-San", "YT-Mamoudzo", "ZA-Cape Town", "ZA-Durban", "ZA-Johannesbur", "ZA-Pretori", "ZM-Lusak", "ZW-Harar"]

    // const handleChange = (e) => {
    //     handleCountryChange(e)
    // }

    return(
        <div>
            
            <Container>
                <Heading>Zmanim for פסוקי דזמרא</Heading>

            <CalendarButton onClick={showCal}>{!showCalendar ? `🗓` : null}</CalendarButton>

            {!showCalendar ? null : 
            <Calendar
            onChange={onDateChange}
            value={date}
            showNeighboringMonth={false}
            locale={"en-US"}
         />
            }

            <h3>{date.toString().split(' ')[0]+ ' ' + date.toString().split(' ')[1] + ' ' + date.toString().split(' ')[2]+ ', ' + date.toString().split(' ')[3]}</h3>
            <h3>{hebDate}</h3>

            <Buttons>
            <div>
            <Form onSubmit={showZip ? handleSubmit : displayZipInput}>
            <Button type="submit">{showZip ? 'Get Zmanim' : 'use zip code'} </Button>
            <br></br>
            {showZip ? <Input required type="number" value={zip} onChange={(e) => setZip(e.target.value)}placeholder="Enter Zip Code"></Input> : null}
            </Form>

            {/* <Heading>Or: </Heading> */}

            {/* <Select name="countries"
            onChange={handleChange}
            >
            {countryCodes.map(country => 
                <option value={country} key={country.id}>{country}</option>
                )}
            </Select>  */}
            <Locator>
            {!haveLocation ? <Button onClick={componentDidMount}>Use my location</Button>
            : <div>{loading ? <Button>Locating...</Button> : 
            <ShowButton onClick={locate}>
                <div>Done Locating</div>
                <br></br>
                <div>Show my Zmanim</div>
                </ShowButton>}
            </div>  }
            </Locator>
            </div>
            </Buttons>

              <HeaderContainer>
            {!errors ? null : 
            <ErrorMessage>Please enter a valid Zip code</ErrorMessage>
            }

            {usingLocation && !errors ? <TimeHeader>Zmanim for {timezone}</TimeHeader> : null}
            {usingZip && !errors ? <TimeHeader>Zmanim for {zip}</TimeHeader> : null}
            </HeaderContainer>

            {!haveTimes || errors || (usingZip === false && usingLocation === false) ? null : 
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

            <Header>Halachot</Header>
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

const Buttons = styled.div`
// width: 100%;
//   display: grid;
//   grid-template-columns: 10fr 10fr;
//   justify-content: center;
//   align-items: center;
margin-bottom: 25vh;
// display: flex;
// flex-direction: row;
width: 100%;
  justify-content: center;
  align-items: center;

`;

const Locator = styled.div`
right: 0;
// position: relative;
// position: absolute;
display: inline-block;
padding: 1vw;
float: right;
margin-bottom: 5vh;
margin-top: .6vh;
`;

const Form = styled.form`
left: 0;

// position: relative;
// position: absolute;
display: inline-block;
padding: 1vh;
float: left;
margin-bottom: 5vh;

`;

// const Select = styled.select`
    
//     border: none;
//     width: 40vw;
//     height: 5vh;
//     border-bottom: 2px solid #001939;
// font-size: large;
// // margin-top: 2vh;
// margin-left: 1vw;
// outline: none;
// background-color: transparent;
// &:focus {
//     outline: none;
//     border-bottom: 2px solid #B96630;
// }
// `;

const ShowButton = styled.button`

  margin-top: 2vh;
//   margin-bottom: 2vh;
  width: 35vw;
  height: 13vh;
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
-webkit-touch-callout: none; /* iOS Safari */
-webkit-user-select: none; /* Safari */
 -khtml-user-select: none; /* Konqueror HTML */
   -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
        user-select: none; /* Non-prefixed version, currently
                              supported by Chrome, Edge, Opera and Firefox */
                            
&:hover {
    cursor: pointer;
  }
  `;

  const CalendarButton = styled.h1`

 
  font-weight: bold;
  text-decoration: none;
  text-align: center;
  align-items: center;
justify-content: center;
font-size: 5vh;
-webkit-touch-callout: none; /* iOS Safari */
-webkit-user-select: none; /* Safari */
 -khtml-user-select: none; /* Konqueror HTML */
   -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
        user-select: none; /* Non-prefixed version, currently
                              supported by Chrome, Edge, Opera and Firefox */

&:hover {
    cursor: pointer;
  }
  `;

const Button = styled.button`

  margin-top: 2vh;
  display: inline-block;
//   margin-bottom: 2vh;
  width: 35vw;
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
-webkit-touch-callout: none; /* iOS Safari */
-webkit-user-select: none; /* Safari */
 -khtml-user-select: none; /* Konqueror HTML */
   -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
        user-select: none; /* Non-prefixed version, currently
                              supported by Chrome, Edge, Opera and Firefox */
&:hover {
    cursor: pointer;
  }
  `;

const Input = styled.input`
    width: 35vw;
    height: 5vh;
    border: none;
    border-bottom: 2px solid #001939;
font-size: large;
outline: none;
background-color: transparent;
border-radius: none;
// transition: height 0.25s linear;

&:focus {
    outline: none;
    border-bottom: 2px solid #B96630;
}
`;

const Heading = styled.h5`
margin-left: 5vw;
margin-right: 5vw;
font-size: 1.5em;
font-weight: 300;
`;

const Header = styled.h3`
margin-left: 5vw;
margin-right: 5vw;
font-size: 1.5em;
font-weight: 45000;
text-decoration: underline;
`;

const Time = styled.h1`
margin-right: 5vw;
margin-left: 5vw;
font-weight: 600;
`;

const TimeHeader = styled.h2`
margin-right: 5vw;
margin-left: 5vw;
font-weight: 600;
margin-top: 5vh;
`;

const P = styled.p`
margin-right: 5vw;
margin-left: 5vw;
font-size: 1em;
`;

const ErrorMessage = styled.p`
// margin-right: 5vw;
// margin-left: 5vw;
font-size: 1em;
color: red;
`;

const Container = styled.div`
padding: 3vh;
font-size: 2vh;
align-items: center;
justify-content: center;
text-align: center;
`;

const HeaderContainer = styled.div`
align-items: center;
justify-content: center;
text-align: center;
`;

export default Zmanim;