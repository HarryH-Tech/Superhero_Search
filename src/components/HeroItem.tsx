import React, { useEffect, useState } from "react";
import { StoreState } from "../reducers";
import { connect } from "react-redux";
import { Hero, fetchSingleHero } from "../actions";
import "../styles/heroItem.scss";
import NotFound from "../images/NotFound.png";
import { Link } from "react-router-dom";

interface HeroProps {
  id: string;
  hero: Hero;
  match: {
    url: string;
  };
  fetchSingleHero: Function;
}

export const _HeroItem: React.FC<HeroProps> = props => {
  const [heroId, setHeroId] = useState(props.match.url);

  useEffect(() => {
    props.fetchSingleHero(heroId);
    console.log(props.hero);
  }, []);

  const addDefaultImgSrc = (e: React.BaseSyntheticEvent) => {
    console.log(e.target.src);
    e.target.src = NotFound;
  };

  const {
    connections,
    powerstats,
    name,
    biography,
    image,
    work,
    appearance
  } = props.hero;

  return (
    <>
      <div id="button-container">
        <Link to="/">
          <button id="back-button">Go Back</button>
        </Link>
      </div>
      <div className="hero-card">
        <div className="title">
          <h1>{name}</h1>
        </div>
        <img
          id="hero-img"
          src={image.url}
          alt={`${name}`}
          onError={addDefaultImgSrc}
        />

        <div className="main-stats">
          <h2>Main Stats</h2>
          <table>
            <tbody>
              <tr>
                <th>Real Name:</th>
                <td>{biography["full-name"]}</td>
              </tr>
              <tr>
                <th>Alter Egos:</th>
                <td>{biography["alter-egos"]}</td>
              </tr>
              <tr>
                <th>Headquarters:</th>
                <td>{work.base}</td>
              </tr>
              <tr>
                <th>Connections:</th>
                <td>{connections["group-affiliation"]}</td>
              </tr>
              <tr>
                <th>Species:</th>
                <td>{appearance.race}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="stats-grid">
          <div className="powerstats">
            <h3>Powerstats</h3>
            <ul>
              <li>
                <span className="stat-name">Intelligence:</span>{" "}
                {powerstats.intelligence}
              </li>
              <li>
                <span className="stat-name">Strength:</span>{" "}
                {powerstats.strength}
              </li>
              <li>
                <span className="stat-name">Speed:</span> {powerstats.speed}
              </li>
              <li>
                <span className="stat-name">Durability:</span>{" "}
                {powerstats.durability}
              </li>
              <li>
                <span className="stat-name">Power:</span> {powerstats.power}
              </li>
              <li>
                <span className="stat-name">Combat:</span> {powerstats.combat}
              </li>
            </ul>
          </div>

          <div className="other-stats">
            <h3 style={{ textAlign: "center" }}>Other Stats</h3>
            <ul>
              <li>
                <span className="stat-name">Place Of Birth:</span>{" "}
                {biography["place-of-birth"] === "-"
                  ? " Unknown"
                  : biography["place-of-birth"]}
              </li>
              <li>
                <span className="stat-name">First Appearance:</span>{" "}
                {biography["first-appearance"]}
              </li>
              <li>
                <span className="stat-name">Job:</span>

                {work.occupation === "-" ? " Unknown" : work.occupation}
              </li>
              <li>
                <span className="stat-name">Relatives:</span>{" "}
                {connections.relatives}
              </li>
              <li>
                <span className="stat-name">Aliases:</span>{" "}
                {biography.aliases.map(e => {
                  return e + ", ";
                })}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state: StoreState): { hero: Hero } => {
  return { hero: state.hero };
};

export const HeroItem = connect(mapStateToProps, { fetchSingleHero })(
  _HeroItem
);
