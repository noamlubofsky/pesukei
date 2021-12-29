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
import Extras from './components/Extras'

function App() {
  const [minimum, setMinimum] = useState(false)
  const [maximum, setMaximum] = useState(false)
  const [order, setOrder] = useState(false)
  const [upTo, setUpTo] = useState('start')

  return (
    <div>
      <Router>
      <Header />
      <Routes>
          <Route path="/" element={<Home
                setMinimum={setMinimum}
                setMaximum={setMaximum}
                setOrder={setOrder}
                upTo={upTo}
                setUpTo={setUpTo}
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
          <Route path="/Extras" element={<Extras/>}/>
      </Routes>
      <Footer 
      minimum={minimum}
      maximum={maximum}
      order={order}
      setMinimum={setMinimum}
      setMaximum={setMaximum}
      setOrder={setOrder}
      upTo={upTo}
      setUpTo={setUpTo}
      />
      </Router>
    </div>
  );
}

export default App;
