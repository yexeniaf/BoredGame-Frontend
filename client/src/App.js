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

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/home" element={<HomePage />}/>
        <Route path="/account" element={<Account/>}/>
        <Route path="/edit" element={<Edit/>}/>
        <Route path ="/risk" element={<Game/>}/>
        <Route> Saved Page</Route>
        <Route path="/error" element={<ErrorPage/>}/>
      </Routes>

    </div>
  );
}

export default App;
