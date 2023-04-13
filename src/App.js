import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import SaleProgress from "./Pages/SaleProgress";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/dist/modal";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/new-to-crypto" element={<SaleProgress />}></Route>
      </Routes>
    </>
  );
}

export default App;
