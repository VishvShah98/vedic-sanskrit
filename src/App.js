import Navbar from "./components/navbar/navbar";
import Home from "./components/Home/home";
import Schedule from "./components/schedule/schedule";
import StudyMaterial from "./components/studyMaterial/studyMaterial";
import Fees from "./components/fees/fees";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <div id='home'>
              <Home />
            </div>
          }
        ></Route>
        <Route path="/schedule" element={<Schedule />}></Route>
        <Route path="/studyMaterial" element={<StudyMaterial />}></Route>
        <Route path="/fees" element={<Fees />}></Route>
      </Routes>
    </div>
  );
}

export default App;
