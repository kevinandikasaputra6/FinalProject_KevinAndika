import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Cari from "./pages/Cari";
import Detail from "./pages/Detail";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cari" element={<Cari />} />
        <Route path="/Detail/:id" element={<Detail />} />
      </Routes>
    </>
  );
}

export default App;
