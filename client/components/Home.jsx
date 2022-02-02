import { Routes, Route } from "react-router-dom";

export default function Home() {
    return(
        <div>
            <Routes>
                <Route>Welcome Page</Route>
                <Route> Home Page</Route>
                <Route>Sign Up Page </Route>
                <Route>Login Page</Route>
            </Routes>

        </div>
    )
}
