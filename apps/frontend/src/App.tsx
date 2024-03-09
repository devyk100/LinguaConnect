import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FlashCard from "./components/FlashCard";
import FlashCardContainer from "./components/FlashCardContainer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/flashcard" element={<FlashCardContainer />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
