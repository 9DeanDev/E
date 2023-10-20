
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './views/LoginPage';
import HomePage from './views/HomePage';
import UserPage from './views/UserPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/user" element={<UserPage />} />
        </Routes>
      </div >
    </BrowserRouter>

  );
}

export default App;
