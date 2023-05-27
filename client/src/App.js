import React from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Form from "./components/form/Form";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Container } from "@material-ui/core";
const App = () => {
  //const classes = useStyles();
  return (
    <BrowserRouter>
      <Container maxwidth="lg">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/form" exact component={Form} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default App;
