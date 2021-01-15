import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";

import Container from '@material-ui/core/Container';
import NavBar from "./components/NavBar";
import CssBaseline from '@material-ui/core/CssBaseline';
import DisplayTable from "./components/DisplayTable";

function App() {
  return (
    // <Router>
      <div>
      <CssBaseline />
        <NavBar />
        <Container>
          <DisplayTable />
        </Container>
      </div>
    // </Router>
  );
}

export default App;
