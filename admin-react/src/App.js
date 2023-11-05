import Home from "./pages/home/Home";
import Login from "./pages/login/Login"

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/">
            <Route index element={<Home/>} />
            <Route path="login" element={<Login/>} />
            <Route path="users">
              {/* <Route index element={<List/>}> */}
            </Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
