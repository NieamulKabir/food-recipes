import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./component/Shared/Navbar/Navbar";
import Home from "./component/Pages/Home/Home";
import Footer from "./component/Shared/Footer/Footer";
import FoodItemDetails from "./component/Pages/Home/FoodItemDetails/FoodItemDetails";

function App() {
  return (
    <div className="bg-gray-300">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/foodDetails/:foodItemId" element={<FoodItemDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
