import Footer from "./components/Footer";
import Nav from "./components/Nav";
import { Routes, Route } from "react-router-dom";
import CarouselWithContent from "./components/Carousel";
import Home from "./components/Home";
import Aboutus from "./components/Aboutus";
export default function App() {
  return (
    <>
      <Nav className="" />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
      </Routes>
      <Footer className="" />
    </>
  );
}
