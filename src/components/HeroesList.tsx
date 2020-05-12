import React from "react";
import { Hero, fetchAllHeroes } from "../actions";
import { StoreState } from "../reducers";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import SearchAndInfoContainer from "./SearchAndInfoContainer";
import NotFound from "../images/NotFound.png";
import "../styles/heroesList.scss";

interface ListProps {
  heroes: Hero[];
  fetchAllHeroes: Function;
}

class _HeroesList extends React.Component<ListProps> {
  componentDidMount() {
    this.props.fetchAllHeroes();
  }

  addDefaultImgSrc = (e: React.BaseSyntheticEvent) => {
    e.target.src = NotFound;
  };

  renderHeroes(): JSX.Element[] {
    return this.props.heroes.map(
      ({ id, name, biography, appearance, work, connections, image }: Hero) => {
        return (
          <div className="card" key={id}>
            <div className="title">
              <img alt={name} src={image.url} onError={this.addDefaultImgSrc} />

              <h2>
                <Link to={`${id}`}>
                  {name} - {biography["publisher"]}
                </Link>
              </h2>
            </div>

            <div className="_information">
              <h3>Key Facts</h3>
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
          </div>
        );
      }
    );
  }

  render() {
    return (
      <div>
        <SearchAndInfoContainer />
        <div className="container">
          {this.renderHeroes()}

          {/* {this.props.heroes === "character with given name not found" ? (
            <div>Errr</div>
          ) : (
            this.renderHeroes()
          )} */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: StoreState): { heroes: Hero[] } => {
  return { heroes: state.heroes };
};

export const HeroesList = connect(mapStateToProps, { fetchAllHeroes })(
  _HeroesList
);
