import NavBar from "components/NavBar";
import FirstTask from "pages/FirstTask";
import SecondTask from "pages/SecondTask";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/Task1"   element={<FirstTask/>} />
          <Route path="/Task2" element={<SecondTask/>} />
          <Route path="*" element={<Navigate replace to="/Task1" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
