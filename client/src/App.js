import { Routes, Route } from "react-router-dom";
import  LandingPage from "./components/LandingPage";
import HomePage from "./components/HomePage";
import './App.css';
import Signup from './screens/Signup';
import Edit from "./screens/Edit";
import Login from "./screens/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/home" element={<HomePage />}/>
        <Route>Account Info Page</Route>
        <Route path="/edit" element={<Edit/>}/>
        <Route> Game Page</Route>
        <Route> Saved Page</Route>
        <Route> Error Page</Route>
      </Routes>

    </div>
  );
}

export default App;
