import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from "./components/Header/Header.js";
import ActionBar from "./components/ActionBar/ActionBar.js";
import NotFound from "./pages/NotFound/NotFound.js";
import Home from "./pages/Home/Home.js";
import Booking from "./pages/Booking/Booking.js";
import Payments from "./pages/Payments/Payments.js";
import CheckIn from "./pages/CheckIn/CheckIn.js";

import restaurantLogo from "./assets/icons/restaurant_logo.png";
import './App.scss';

import mockData from './data/mock-data_home.json';

function App() {
  return (
    <div className="App">
      <Router>
        <Header name={mockData.restaurantInfo.name} restaurantLogo={restaurantLogo}/>
        
        <main>
          <Routes>
            <Route path="/check-in" element={<CheckIn />} />
            <Route path="/confirmation" element={<Payments />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <ActionBar />
      </Router>
    </div>
  );
}

export default App;
