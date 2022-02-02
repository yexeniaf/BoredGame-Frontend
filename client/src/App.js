import { Routes, Route } from "react-router-dom";
import  LandingPage from "./components/LandingPage";
import HomePage from "./components/HomePage";
import './App.css';
import Signup from './screens/Signup';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />}/>
        <Route path="/signup" element={<Signup/>}>Sign Up Page </Route>
        <Route>Login Page</Route>
        <Route>Account Info Page</Route>
        <Route>Edit Account Page</Route>
        <Route> Game Page</Route>
        <Route> Saved Page</Route>
        <Route> Error Page</Route>
      </Routes>

    </div>
  );
}

export default App;
