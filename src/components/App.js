import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "../style/App.css"
import Layout from "./Layout";
import Home from "./page/Home";
import Login from "./page/Login";
import Signup from "./page/Signup";


function App() {
  return (
    <Router>
        <Layout>
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            </Routes>
        </Layout>
    </Router>
    
  );
}

export default App;
