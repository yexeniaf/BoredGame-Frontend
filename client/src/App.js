import { Routes, Route } from "react-router-dom";
import  LandingPage from "./components/LandingPage";
import './App.css';
import Signup from './screens/Signup';
import Edit from "./screens/Edit";
import Login from "./screens/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route> Home Page</Route>
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login/>}/>
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
