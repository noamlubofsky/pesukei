import './App.css';
import React, { useEffect, useState } from "react";
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
          <Route path="/MizmorShir" element={<MizmorShir/>}/>
          <Route path="/BaruchSheamar" element={<BaruchSheamar/>}/>
          <Route path="/HoduPrimary" element={<HoduPrimary/>}/>
          <Route path="/HoduFull" element={<HoduFull/>}/>
          <Route path="/HoduRest" element={<HoduRest/>}/>
          <Route path="/MizmorLetodah" element={<MizmorLetodah/>}/>
          <Route path="/YehiChevod" element={<YehiChevod/>}/>
          <Route path="/Ashrei" element={<Ashrei/>}/>
          <Route path="/Hallelukah1" element={<Hallelukah1/>}/>
          <Route path="/Hallelukah2" element={<Hallelukah2/>}/>
          <Route path="/Hallelukah3" element={<Hallelukah3/>}/>
          <Route path="/Hallelukah4" element={<Hallelukah4/>}/>
          <Route path="/Hallelukah5" element={<Hallelukah5/>}/>
          <Route path="/BaruchHashemLeolam" element={<BaruchHashemLeolam/>}/>
          <Route path="/VayevarechDavidPrimary" element={<VayevarechDavidPrimary/>}/>
          <Route path="/VayevarechDavidFull" element={<VayevarechDavidFull/>}/>
          <Route path="/VayevarechDavidRest" element={<VayevarechDavidRest/>}/>
          <Route path="/Vecharot" element={<Vecharot/>}/>
          <Route path="/AzYashir" element={<AzYashir/>}/>
          <Route path="/Yishtabach" element={<Yishtabach/>}/>
          <Route path="/Barchu" element={<Barchu/>}/>
          <Route path="/Halachot" element={<Halachot/>}/>
          <Route path="/Zmanim" element={<Zmanim/>}/>
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
