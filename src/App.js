import './App.css';
import React, { useState } from "react";
import { BrowserRouter as Router,
  Routes,
  Route,
  } from "react-router-dom";
import styled from "styled-components";
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import MizmorShir from './components/MizmorShir'
import BaruchSheamar from './components/BaruchSheamar'
import HoduPrimary from './components/HoduPrimary'
import HoduFull from './components/HoduFull'
import HoduRest from './components/HoduRest'
import MizmorLetodah from './components/MizmorLetodah'
import YehiChevod from './components/YehiChevod'
import Ashrei from './components/Ashrei'
import Hallelukah1 from './components/Hallelukah1'
import Hallelukah2 from './components/Hallelukah2'
import Hallelukah3 from './components/Hallelukah3'
import Hallelukah4 from './components/Hallelukah4'
import Hallelukah5 from './components/Hallelukah5'
import BaruchHashemLeolam from './components/BaruchHashemLeolam'
import VayevarechDavidPrimary from './components/VayevarechDavidPrimary'
import VayevarechDavidFull from './components/VayevarechDavidFull'
import VayevarechDavidRest from './components/VayevarechDavidRest'
import Vecharot from './components/Vecharot'
import AzYashir from './components/AzYashir'
import Yishtabach from './components/Yishtabach'
import Barchu from './components/Barchu'
import Hallelukahs from './components/Hallelukahs'
import Extras from './components/Extras'
import Halachot from './components/Halachot'
import Zmanim from './components/Zmanim'
import CompassPage from './components/CompassPage'
import RangeSlider from './components/RangeSlider'
import blueleather from './blueleather.jpeg'
// import Compass from 'react-Compass'
// import 'react-compass/dist/react-compass.css';


function App() {
  const [minimum, setMinimum] = useState(false)
  const [maximum, setMaximum] = useState(false)
  const [order, setOrder] = useState(false)
  const [reviewingHalachot, setReviewingHalachot] = useState(false)
  const [viewingZmanim, setViewingZmanim] = useState(false)
  const [upTo, setUpTo] = useState('start')
  const [saidHallelukah1, setSaidHallelukah1] = useState(false)
  const [saidHallelukah2, setSaidHallelukah2] = useState(false)
  const [saidHallelukah4, setSaidHallelukah4] = useState(false)
  const [saidMizmorShir, setSaidMizmorShir] = useState(false)
  const [saidFullHodu, setSaidFullHodu] = useState(false)
  const [saidMizmorLetodah, setSaidMizmorLetodah] = useState(false)
  const [saidYehiChevod, setSaidYehiChevod] = useState(false)
  const [saidBaruchHashemLeolam, setSaidBaruchHashemLeolam] = useState(false)
  const [saidFullVayevarechDavid, setSaidFullVayevarechDavid] = useState(false)
  const [saidVecharot, setSaidVecharot] = useState(false)
  const [saidAzYashir, setSaidAzYashir] = useState(false)
  const [saidAshrei, setSaidAshrei] = useState(false)
  const [isRushing, setIsRushing] = useState(false)
  const [size, setSize] = useState(30)
  const [date, setDate] = useState(new Date());
  const [language, setLanguage] = useState('hebrew')


  // const sliderValueChanged = useCallback(val => {
  //   console.log("NEW VALUE", val);
  //   setParentVal(val);
  // });

  // const sliderValueChanged = (e) => {
  //   setParentVal(e.target.value);
  //   console.log(parentVal)
  // }

  // const sliderProps = useMemo(
  //   () => ({
  //     min: 20,
  //     max: 80,
  //     value: size,
  //     step: 2,
  //     // onChange: e => sliderValueChanged(e),
  //   }),
  //   // [parentVal]
  // );


  // useEffect(() => {
  //  componentDidMount()
  // }, []);

  // function componentDidMount() {
  //   navigator.geolocation.getCurrentPosition(function(position) {
  //     console.log("Latitude is :", position.coords.latitude);
  //     console.log("Longitude is :", position.coords.longitude);
  //     console.log(position)
  //   });
  // }

// var array1 = [1, 2, 3, 4, 5];
// var array2 = ['a', 'b', 'c', 'd', 'e'];

// var result = array1.reduce(function(arr, v, i) {
//   return arr.concat(v, array2[i]); 
// }, []);

// console.log(result);


  return (
    <div>
      <Router>
      <Header />
      {window.location.pathname === '/' || 
      window.location.pathname === '/Zmanim' || 
      window.location.pathname === '/Halachot' ||
      window.location.pathname === '/Hallelukahs' ||
      window.location.pathname === '/Extras' || 
      window.location.pathname === '/CompassPage'
      ? null : 
      <Top>
      <RangeSlider size={size} setSize={setSize}/>
      <Buttons>
        <Button onClick={() => setLanguage('english')}>
          <Letters>
          <TLetter>─</TLetter>
          <Letter>A</Letter>
        <TLetter>א</TLetter>
          </Letters>
          </Button>
        <Button onClick={() => setLanguage('both')}>
          <Letters>
          <TLetter>-</TLetter>
          <Letter>A/א</Letter>          
        <TLetter>-</TLetter>
          </Letters>
          </Button>
        <Button onClick={() => setLanguage('linear')}>
          <Letters>
          <Letter>א</Letter>
          <Letter>─</Letter>
          <Letter>A</Letter>
          </Letters>
        </Button>
        <Button onClick={() => setLanguage('hebrew')}>
          <Letters>
        <TLetter>─</TLetter>
          <Letter>א</Letter>
        <TLetter>A</TLetter>
          </Letters>
          </Button>

      </Buttons>
      </Top>}
      <Routes>
          <Route path="/" element={<Home
                setMinimum={setMinimum}
                setMaximum={setMaximum}
                setOrder={setOrder}
                setReviewingHalachot={setReviewingHalachot}
                upTo={upTo}
                setUpTo={setUpTo}
      setViewingZmanim={setViewingZmanim}
                />}/>
          <Route path="/MizmorShir" element={<MizmorShir size={size} language={language}/>}/>
          <Route path="/BaruchSheamar" element={<BaruchSheamar size={size} language={language}/>}/>
          <Route path="/HoduPrimary" element={<HoduPrimary size={size} language={language}/>}/>
          <Route path="/HoduFull" element={<HoduFull size={size} language={language}/>}/>
          <Route path="/HoduRest" element={<HoduRest size={size} language={language}/>}/>
          <Route path="/MizmorLetodah" element={<MizmorLetodah size={size} language={language}/>}/>
          <Route path="/YehiChevod" element={<YehiChevod size={size} language={language}/>}/>
          <Route path="/Ashrei" element={<Ashrei size={size} language={language}/>}/>
          <Route path="/Hallelukah1" element={<Hallelukah1 size={size} language={language}/>}/>
          <Route path="/Hallelukah2" element={<Hallelukah2 size={size} language={language}/>}/>
          <Route path="/Hallelukah3" element={<Hallelukah3 size={size} language={language}/>}/>
          <Route path="/Hallelukah4" element={<Hallelukah4 size={size} language={language}/>}/>
          <Route path="/Hallelukah5" element={<Hallelukah5 size={size} language={language}/>}/>
          <Route path="/BaruchHashemLeolam" element={<BaruchHashemLeolam size={size} language={language}/>}/>
          <Route path="/VayevarechDavidPrimary" element={<VayevarechDavidPrimary size={size} language={language}/>}/>
          <Route path="/VayevarechDavidFull" element={<VayevarechDavidFull size={size} language={language}/>}/>
          <Route path="/VayevarechDavidRest" element={<VayevarechDavidRest size={size} language={language}/>}/>
          <Route path="/Vecharot" element={<Vecharot size={size} language={language}/>}/>
          <Route path="/AzYashir" element={<AzYashir size={size} language={language}/>}/>
          <Route path="/Yishtabach" element={<Yishtabach size={size} language={language}/>}/>
          <Route path="/Barchu" element={<Barchu size={size} language={language}/>}/>
          <Route path="/Halachot" element={<Halachot size={size} language={language}/>}/>
          <Route path="/Zmanim" element={<Zmanim size={size} date={date} setDate={setDate}/>}/>
          <Route path="/CompassPage" element={<CompassPage/>}/>
          <Route path="/Hallelukahs" element={<Hallelukahs
          saidHallelukah1={saidHallelukah1}
          setSaidHallelukah1={setSaidHallelukah1}
          saidHallelukah2={saidHallelukah2}
          setSaidHallelukah2={setSaidHallelukah2}
          saidHallelukah4={saidHallelukah4}
          setSaidHallelukah4={setSaidHallelukah4}
          setUpTo={setUpTo}
          />}/>
          <Route path="/Extras" element={<Extras
          saidMizmorShir={saidMizmorShir}
          setSaidMizmorShir={setSaidMizmorShir}
          saidFullHodu={saidFullHodu}
          setSaidFullHodu={setSaidFullHodu}
          saidMizmorLetodah={saidMizmorLetodah}
          setSaidMizmorLetodah={setSaidMizmorLetodah}
          saidYehiChevod={saidYehiChevod}
          setSaidYehiChevod={setSaidYehiChevod}
          saidBaruchHashemLeolam={saidBaruchHashemLeolam}
          setSaidBaruchHashemLeolam={setSaidBaruchHashemLeolam}
          saidFullVayevarechDavid={saidFullVayevarechDavid}
          setSaidFullVayevarechDavid={setSaidFullVayevarechDavid}
          saidVecharot={saidVecharot}
          setSaidVecharot={setSaidVecharot}
          saidAzYashir={saidAzYashir}
          setSaidAzYashir={setSaidAzYashir}
          setUpTo={setUpTo}
          />}/>
      </Routes>
      <Footer 
      minimum={minimum}
      maximum={maximum}
      order={order}
      reviewingHalachot={reviewingHalachot}
      setMinimum={setMinimum}
      setMaximum={setMaximum}
      setOrder={setOrder}
      setReviewingHalachot={setReviewingHalachot}
      upTo={upTo}
      setUpTo={setUpTo}
      saidAshrei={saidAshrei}
      setSaidAshrei={setSaidAshrei}
      isRushing={isRushing}
      setIsRushing={setIsRushing}
      saidHallelukah1={saidHallelukah1}
      saidHallelukah2={saidHallelukah2}
      saidHallelukah4={saidHallelukah4}
      setSaidHallelukah1={setSaidHallelukah1}
      setSaidHallelukah2={setSaidHallelukah2}
      setSaidHallelukah4={setSaidHallelukah4}
      viewingZmanim={viewingZmanim}
      setViewingZmanim={setViewingZmanim}
      setSaidMizmorShir={setSaidMizmorShir}
      setSaidFullHodu={setSaidFullHodu}
      setSaidMizmorLetodah={setSaidMizmorLetodah}
      setSaidYehiChevod={setSaidYehiChevod}
      setSaidBaruchHashemLeolam={setSaidBaruchHashemLeolam}
      setSaidFullVayevarechDavid={setSaidFullVayevarechDavid}
      setSaidVecharot={setSaidVecharot}
      setSaidAzYashir={setSaidAzYashir}
      />
      </Router>
    </div>
  );
}

const Top = styled.div`

  margin-bottom: 13vh;

`;

const Letters = styled.div`

line-height: 10px;

`;

const Letter = styled.div`
`;

const TLetter = styled.div`

color: transparent;
`;

const Buttons = styled.div`
// width: 100%;
//   display: grid;
//   grid-template-columns: 10fr 10fr;
//   justify-content: center;
//   align-items: center;
// display: flex;
// flex-direction: row;
// width: 100%;
//   justify-content: center;
//   align-items: center;
  float: right;
  right: 0;
  margin-right: 5vw;
  margin-bottom: 5vh;

`;

const Button = styled.button`

  // margin-top: 2vh;
  color: silver;
  display: inline-block;
//   margin-bottom: 2vh;
  width: 12vw;
  height: 6vh;
  font-weight: bold;
  text-decoration: none;
  text-align: center;
  align-items: center;
//   color: rgb(37, 38, 51);
text-transform: uppercase;
// letter-spacing: 1px;
transition: all .35s;
justify-content: center;
font-size: 2vh;
color: silver;
background-image: url(${blueleather});
background-position: center;
background-repeat: no - repeat;
background-size: cover;
font-family: 'Times New Roman', Georgia, serif;

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

export default App;
