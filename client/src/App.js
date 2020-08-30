import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import TablePage from "../src/pages/TablePage";

function App() {
  return (
    <Router>
    <Route path="/" component={TablePage} />
    </Router>
  );
}

export default App;
