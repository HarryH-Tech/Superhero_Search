import React from "react";

//Custom Component Imports
import Header from "./Header";
import SearchAndInfoContainer from "./SearchAndInfoContainer";
import { HeroesList } from "./HeroesList";

const App = (): JSX.Element => {
  return (
    <>
      <Header />
      <SearchAndInfoContainer />
      <HeroesList />
    </>
  );
};

export default App;
