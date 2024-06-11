import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Characters } from "./view/Characters/Characters";
// import { Route, Routes } from "react-router-dom";
import Comic from "./view/Comic/Comic";
import { Home } from "./view/Home/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Characters" element={<Characters />}></Route>
        <Route path="/Comic" element={<Comic />}></Route>
      </Routes>
      {/* <Characters /> */}
    </>
  );
}

export default App;
