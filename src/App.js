import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import EuforiaDemo from "./components/euforia/EuforiaDemo";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/euforia" element={<EuforiaDemo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
