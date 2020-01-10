import React, { useState } from "react";
import "../styles/searchAndInfoContainer.scss";

interface SearchProps {
  searchHero?: Function;
}

const SearchAndInfoContainer = (props: SearchProps): JSX.Element => {
  const [searchQuery, setSearchQuery] = useState("");
  console.log(searchQuery);

  const searchHeroes = () => {
    console.log(props);
  };

  return (
    <>
      <div className="info-container">
        <h2>Welcome to the Superhero Search App!</h2>
        <p>Search for information about your favorite superheroes!</p>

        <input
          onChange={e => setSearchQuery(e.target.value)}
          type="text"
          id="-searchbar"
          placeholder="Search Heroes..."
        />
        <button onClick={searchHeroes}>Search</button>
      </div>
    </>
  );
};

export default SearchAndInfoContainer;
