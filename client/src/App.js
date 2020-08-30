import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import TablePage from "../src/pages/TablePage";
import Navbar from "../src/components/Navbar";

function App() {
  return (
    <Router>
      <Navbar/>
    <Route path="/" component={TablePage} />
    <Route path="/about" component={TablePage} />
    <Route path="/tools" component={TablePage} />
    <Route path="/crypto" component={TablePage} />
    <Route path="/stocks" component={TablePage} />
    <Route path="/converter" component={TablePage} />
    </Router>
  );
}

export default App;
