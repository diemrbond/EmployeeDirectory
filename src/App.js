import React, {useState} from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";

import Container from '@material-ui/core/Container';
// import SearchBar from "./components/SearchBar";
import NavBar from "./components/NavBar";
import CssBaseline from '@material-ui/core/CssBaseline';
import DisplayTable from "./components/DisplayTable";

function App(props) {

  const [value, setValue] = useState("");

  function handleChange(newValue) {
    setValue(newValue);
  }

  return (
    // <Router>
      <div>
      <CssBaseline />
        <NavBar  value={value} onChange={handleChange}/>
        <Container>          
          <DisplayTable searchFor={value}/>
        </Container>
      </div>
    // </Router>
  );
}

export default App;
