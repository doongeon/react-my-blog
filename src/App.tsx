import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Profile from "./components/profile/Profile";
import Nav from "./components/nav/Nav";
import Games from "./routes/Games";
import Game from "./routes/Game";
import NotFound from "./components/not-found/not-found";

function App() {
    return (
        <BrowserRouter>
            <Profile />
            <Nav />
            <Routes>
                <Route path="/game/:gameId" element={<Game />} />
                <Route path="/games" element={<Games />} />
                <Route path="/" element={<Home />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
