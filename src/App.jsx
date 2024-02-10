import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Details from "./pages/Details";

export default function App() {
  return (
    <div className="min-h-screen  bg-white text-gray-600 text-lg ">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/favorites" element={<Favorites />}></Route>
        <Route path="/recipe-item/:id" element={<Details />}></Route>
      </Routes>
    </div>
  );
}
