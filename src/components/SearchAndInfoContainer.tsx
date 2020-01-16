import React, { useState } from "react";
import "../styles/searchAndInfoContainer.scss";

import { StoreState } from "../reducers";
import { connect } from "react-redux";
import { Hero, searchHeroes } from "../actions";

import Swal from "sweetalert2";

interface SearchProps {
  searchHeroes: Function;
  hero: Hero;

  response?: {
    error?: string;
  };
}

interface Event {
  target: {
    value: string;
  };
  key: string;
}

const _SearchAndInfoContainer = (props: SearchProps): JSX.Element => {
  const [heroName, setHeroName] = useState("");

  const searchHeroes = () => {
    console.log(props);
    if (heroName === "") {
      Swal.fire({
        title: "Please Enter Something To Search For 🙂",
        icon: "warning",
        confirmButtonText: "OK"
      });
    }

    if (props.response === "error") {
      Swal.fire({
        title: "Please Enter hh To Search For 🙂",
        icon: "warning",
        confirmButtonText: "OK"
      });
    }

    props.searchHeroes(heroName);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHeroName(e.target.value);
    console.log(e.target.value);
  };

  //Hacky way to handle search submission on enter keypress
  const handleKeypress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    console.log(heroName);
    if (e.charCode === 13) {
      searchHeroes();
    }
  };

  return (
    <>
      <div className="info-container">
        <h2>Welcome to the Superhero Search App!</h2>
        <p>Search for information about your favorite superheroes!</p>

        <input
          onChange={handleInputChange}
          onKeyPress={handleKeypress}
          value={heroName}
          type="text"
          id="-searchbar"
          placeholder="Search Heroes..."
        />
        <br />
        <button id="search-button" onClick={searchHeroes}>
          Search
        </button>
      </div>
    </>
  );
};

const mapStateToProps = (state: StoreState): { hero: Hero } => {
  return { hero: state.hero };
};

export const SearchAndInfoContainer = connect(mapStateToProps, {
  searchHeroes
})(_SearchAndInfoContainer);

export default SearchAndInfoContainer;
