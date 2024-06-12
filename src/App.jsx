import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Characters } from "./view/Characters/Characters";
import { Home } from "./view/Home/Home";
import { Comic } from "./view/Comics/Comic";

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
