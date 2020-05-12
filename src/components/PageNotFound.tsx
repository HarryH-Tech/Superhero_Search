import React from "react";
import "../styles/pageNotFound.scss";
import { Link } from "react-router-dom";

export function PageNotFound() {
  return (
    <>
      <div id="button-container">
        <Link to="/">
          <button id="back-button">Home</button>
        </Link>
      </div>
      <br />
      <div className="sorry-container">
        <h1>Sorry</h1>
        <span id="--sorry-emoji" role="img" aria-label="sad emoji">
          😔
        </span>
        <br />
        Sorry, we couldn't find the hero you were looking for. <br />
        Please try searching for another one.
      </div>
    </>
  );
}
