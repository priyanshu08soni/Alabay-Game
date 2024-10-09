
import './App.css';
import GamePage2 from './pages/GamePage2';
import GamePage1 from './pages/GamePage1';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route
            index
            element={
              <Home/>
            }
          />
          <Route
            exact path="/game/game1"
            element={
              <GamePage1/>
            }
          />
          <Route
            exact path="/game/game2"
            element={
              <GamePage2/>
            }
          />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
