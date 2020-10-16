import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import TablePage from "../src/pages/TablePage";
import HomePage from "../src/pages/HomePage";
import CryptoPage from "../src/pages/CryptoPage";
import StocksPage from "../src/pages/StocksPage";
import ConverterPage from "../src/pages/ConverterPage";
import ContactPage from "../src/pages/ContactPage";
import { ToolsPage } from "./pages/ToolsPage";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path="/" component={HomePage} />
      <Route exact path="/home" component={HomePage} />
      <Route path="/tools" component={ToolsPage} />
      <Route path="/crypto" component={CryptoPage} />
      <Route path="/stocks" component={StocksPage} />
      <Route path="/converter" component={ConverterPage} />
      <Route path="/contact" component={ContactPage} />
      <Footer />
    </Router>
  );
}

export default App;
