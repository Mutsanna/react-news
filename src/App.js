import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import Button from "./modules/Button";
import P from "./modules/P";
import logo from "./logo.svg";
import SourceList from "./modules/source/SourceList";
import NewsList from "./modules/source/NewsList";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <NewsList />
        </Container>
      </div>
    );
  }
}

export default App;
