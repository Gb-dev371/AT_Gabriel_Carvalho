// import "./styles.css";
// import Home from "./pages/Home";
// import Navbar from "./components/Navbar";

// export default function App() {
//   return (
//     <div className="App">
//       <Navbar></Navbar>
//       <Home></Home>
//     </div>
//   );
// }

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from './components/Footer'; // Importa o Footer

import "./styles.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer/>
      </div>
    </Router>
  );
};

export default App;
