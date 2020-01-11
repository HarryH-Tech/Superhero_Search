import React from "react";
import { StoreState } from "../reducers";
import { connect } from "react-redux";
import { Hero, fetchSingleHero } from "../actions";

interface HeroProps {
  id: string;
  hero: Hero;
}

export const _HeroItem: React.FC<HeroProps> = props => {
  console.log(props);

  return <div>{props.hero}hihihihi</div>;
};

const mapStateToProps = (state: StoreState): { hero: Hero } => {
  return { hero: state.hero };
};

export const HeroItem = connect(mapStateToProps, { fetchSingleHero })(
  _HeroItem
);
