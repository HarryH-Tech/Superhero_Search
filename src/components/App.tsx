import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Custom Component Imports
import Header from "./Header";
import SearchAndInfoContainer from "./SearchAndInfoContainer";
import { HeroesList } from "./HeroesList";
import { HeroItem } from "./HeroItem";

const App = (): JSX.Element => {
  return (
    <>
      <Router>
        <Header />
        <SearchAndInfoContainer />

        <Switch>
          <Route path="/" exact component={HeroesList} />
          <Route path="/hero/:id" component={HeroItem} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
