import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";

import Container from '@material-ui/core/Container';
import NavBar from "./components/NavBar";
import CssBaseline from '@material-ui/core/CssBaseline';

function App() {
  return (
    // <Router>
      <div>
      <CssBaseline />
        <NavBar />
        <Container>
          {/*  <Wrapper>
            <Route exact path="/" component={About} />
            <Route exact path="/about" component={About} />
            <Route exact path="/discover" component={Discover} />
            <Route exact path="/search" component={Search} />
          </Wrapper>
          <Footer /> */}
        </Container>
      </div>
    // </Router>
  );
}

export default App;
