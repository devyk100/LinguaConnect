import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Lobby from "./screens/Lobby";
import Room from "./screens/Room";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/lobby" element={<Lobby />} />
          <Route path="/room/" element={<Room />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
