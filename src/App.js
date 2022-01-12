import './App.css';
import React, { useState } from "react";
import { BrowserRouter as Router,
  Routes,
  Route,
  } from "react-router-dom";
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
import RangeSlider from './components/RangeSlider'

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
  // const [parentVal, setParentVal] = useState(30);
  const [size, setSize] = useState(30)

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

  return (
    <div>
      <Router>
      <Header />
      {window.location.pathname === '/' || 
      window.location.pathname === '/Zmanim' || 
      window.location.pathname === '/Halachot' ||
      window.location.pathname === '/Hallelukahs' ||
      window.location.pathname === '/Extras'
      ? null : 
      <RangeSlider size={size} setSize={setSize} 
      // {...sliderProps} 
      // classes="additional-css-classes" 
      />}
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
          <Route path="/MizmorShir" element={<MizmorShir size={size}/>}/>
          <Route path="/BaruchSheamar" element={<BaruchSheamar size={size}/>}/>
          <Route path="/HoduPrimary" element={<HoduPrimary size={size}/>}/>
          <Route path="/HoduFull" element={<HoduFull size={size}/>}/>
          <Route path="/HoduRest" element={<HoduRest size={size}/>}/>
          <Route path="/MizmorLetodah" element={<MizmorLetodah size={size}/>}/>
          <Route path="/YehiChevod" element={<YehiChevod size={size}/>}/>
          <Route path="/Ashrei" element={<Ashrei size={size}/>}/>
          <Route path="/Hallelukah1" element={<Hallelukah1 size={size}/>}/>
          <Route path="/Hallelukah2" element={<Hallelukah2 size={size}/>}/>
          <Route path="/Hallelukah3" element={<Hallelukah3 size={size}/>}/>
          <Route path="/Hallelukah4" element={<Hallelukah4 size={size}/>}/>
          <Route path="/Hallelukah5" element={<Hallelukah5 size={size}/>}/>
          <Route path="/BaruchHashemLeolam" element={<BaruchHashemLeolam size={size}/>}/>
          <Route path="/VayevarechDavidPrimary" element={<VayevarechDavidPrimary size={size}/>}/>
          <Route path="/VayevarechDavidFull" element={<VayevarechDavidFull size={size}/>}/>
          <Route path="/VayevarechDavidRest" element={<VayevarechDavidRest size={size}/>}/>
          <Route path="/Vecharot" element={<Vecharot size={size}/>}/>
          <Route path="/AzYashir" element={<AzYashir size={size}/>}/>
          <Route path="/Yishtabach" element={<Yishtabach size={size}/>}/>
          <Route path="/Barchu" element={<Barchu size={size}/>}/>
          <Route path="/Halachot" element={<Halachot size={size}/>}/>
          <Route path="/Zmanim" element={<Zmanim size={size}/>}/>
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
      />
      </Router>
    </div>
  );
}

export default App;
