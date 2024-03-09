import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Flashcard from "./components/Flashcard";

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
        <Routes>
          <Route path="/lobby" element={<LobbyScreen />} />
          <Route path="/room/:roomId" element={<RoomPage />} />
        </Routes>
      </BrowserRouter> */}
      <Flashcard />
    </div>
  );
}

export default App;
