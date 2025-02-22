import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Pages/about/About";
import Start from "./Pages/start/Start";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={< Start />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </Router>
    );
}

export default App;
