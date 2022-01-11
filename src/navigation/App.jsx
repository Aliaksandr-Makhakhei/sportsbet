import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Events from "../Pages/Events";
import EventDetails from "../Pages/EventDetails"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Events />} />
        <Route path="event/:eventId" element={<EventDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;