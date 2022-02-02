import { Routes, Route } from "react-router-dom";
import  LandingPage from "./components/LandingPage";
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route> Home Page</Route>
        <Route>Sign Up Page </Route>
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
