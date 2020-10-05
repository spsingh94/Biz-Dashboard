import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import TablePage from "../src/pages/TablePage";
import HomePage from "../src/pages/HomePage";
import CryptoPage from "../src/pages/CryptoPage";
import AboutPage from "../src/pages/AboutPage";
import StocksPage from "../src/pages/StocksPage";
import ConverterPage from "../src/pages/ConverterPage";
import { ToolsPage } from "./pages/ToolsPage";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Route path="/home" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/tools" component={ToolsPage} />
      <Route path="/crypto" component={CryptoPage} />
      <Route path="/stocks" component={StocksPage} />
      <Route path="/converter" component={ConverterPage} />
      <Footer />
    </Router>
  );
}

export default App;
