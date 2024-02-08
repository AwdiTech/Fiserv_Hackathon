import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Booking from "./pages/Booking/Booking";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route path="/booking" element={<Booking />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
