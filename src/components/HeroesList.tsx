import React from "react";
import { Hero, fetchAllHeroes } from "../actions";
import { StoreState } from "../reducers";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import "../styles/heroesList.scss";

interface ListProps {
  heroes: Hero[];
  fetchAllHeroes: Function;
}

class _HeroesList extends React.Component<ListProps> {
  componentDidMount() {
    this.props.fetchAllHeroes();
  }

  renderHeroes(): JSX.Element[] {
    console.log(this.props.heroes);

    return this.props.heroes.map(
      ({
        id,
        name,
        powerstats,
        biography,
        appearance,
        work,
        connections,
        image
      }: Hero) => {
        //Destructure props
        const {
          intelligence,
          strength,
          speed,
          durability,
          power,
          combat
        } = powerstats;

        const {
          fullName,
          alterEgos,
          aliases,
          placeOfBirth,
          publisher,
          alignment
        } = biography;

        const { gender, race, height, weight } = appearance;
        const { occupation, base } = work;
        const { groupAffiliation, relatives } = connections;
        const { url } = image;

        return (
          <div className="card" key={id}>
            <div className="title">
              <img alt={name} src={url} />

              <h2>
                <Link to={`/hero/${id}`}>
                  {name} - {publisher}
                </Link>
              </h2>
            </div>

            <div className="stats">
              <h6>Power Stats</h6>
              <ul>
                <li>Intelligence: {intelligence}</li>
                <li>Strength: {strength}</li>
                <li>Speed: {speed}</li>
                <li>Endurance: {durability}</li>
                <li>Power: {power}</li>
                <li>Combat: {combat}</li>
              </ul>
            </div>
          </div>
        );
      }
    );
  }

  render() {
    return <div className="container">{this.renderHeroes()}</div>;
  }
}

const mapStateToProps = (state: StoreState): { heroes: Hero[] } => {
  return { heroes: state.heroes };
};

export const HeroesList = connect(mapStateToProps, { fetchAllHeroes })(
  _HeroesList
);
