import React from "react";
import "../styles/header.scss";

const Header = (): JSX.Element => {
  return (
    <div className="header">
      <h3 id="text">Superhero Search! </h3>{" "}
      <span role="img" aria-label="Superhero Emoji" id="emoji">
        🦸
      </span>
    </div>
  );
};

export default Header;
