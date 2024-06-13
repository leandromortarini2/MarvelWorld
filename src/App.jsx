import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Characters } from "./view/Characters/Characters";
import { Home } from "./view/Home/Home";
import { Comic } from "./view/Comics/Comic";
import { ComicDetail } from "./view/ComicDetail/ComicDetail";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Characters" element={<Characters />}></Route>
        <Route path="/Comic" element={<Comic />}></Route>
        <Route path="/ComicDetail/:id" element={<ComicDetail />}></Route>
      </Routes>
      {/* <Characters /> */}
    </>
  );
}

export default App;
