import { Routes, Route } from "react-router-dom";
import  LandingPage from "./components/LandingPage";
import HomePage from "./components/HomePage";
import './App.css';
import Signup from './screens/Signup';
import Edit from "./screens/Edit";
import Login from "./screens/Login";
import Game from "./screens/Game";
import Account from "./screens/Account";
import ErrorPage from "./screens/ErrorPage";
import SavedGames from "./screens/SavedGames";
import Navbar from "./components/Navbar";
import Boggle from "./screens/Boggle";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/home" element={<HomePage />}/>
        <Route path="/account/:id" element={<Account/>}/>
        <Route path="/edit/:id" element={<Edit/>}/>
        <Route path="/new" element={<Game/>}/>
        <Route path="/saved" element={<SavedGames/>}/>
        <Route path="/error" element={<ErrorPage/>}/>
        <Route path="/boggle" element={<Boggle/>}/>
      </Routes>

    </div>
  );
}

export default App;
