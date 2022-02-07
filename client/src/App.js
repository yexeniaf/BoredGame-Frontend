import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import HomePage from "./components/HomePage";
import "./App.css";
import Signup from "./screens/Signup";
import Edit from "./screens/Edit";
import Login from "./screens/Login";
import Game from "./screens/Game";
import Account from "./screens/Account";
import ErrorPage from "./screens/ErrorPage";
import SavedGames from "./screens/SavedGames";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Boggle from "./screens/Boggle";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<HomePage />} />
        <Route exact element={<PrivateRoute />}>
          <Route path="/account/:id" element={<Account />} />
        </Route>
        <Route exact element={<PrivateRoute />}>
          <Route path="/edit/:id" element={<Edit />} />
        </Route>
        <Route path="/new" element={<Game />} />
        <Route exact element={<PrivateRoute />}>
          <Route path="/saved" element={<SavedGames />} />
        </Route>
        <Route path="/error" element={<ErrorPage />} />
        <Route path="/boggle" element={<Boggle />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

