import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./component/Shared/Navbar/Navbar";
import Home from "./component/Pages/Home/Home";
import Footer from "./component/Shared/Footer/Footer";

function App() {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
