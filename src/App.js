
import './App.css';
import GamePage from './pages/GamePage';
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
            exact path="/game"
            element={
              <GamePage/>
            }
          />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
