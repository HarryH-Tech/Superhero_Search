import axios from "axios";
import { Dispatch } from "redux";
import { ActionTypes } from "./types";

export interface Hero {
  id: string;
  name: string;
  powerstats: {
    strength: string;
    speed: string;
    intelligence: string;
    durability: string;
    power: string;
    combat: string;
  };

  biography: {
    fullName: string;
    alterEgos: string;
    aliases: string[];
    placeOfBirth: string;
    publisher: string;
    alignment: string;
  };

  appearance: {
    gender: string;
    race: string;
    height: string[];
    weight: string[];
  };

  work: {
    occupation: string;
    base: string;
  };

  connections: {
    groupAffiliation: string;
    relatives: string;
  };

  image: {
    url: string;
  };
}

export interface FetchAllHeroesAction {
  type: ActionTypes.fetchAllHeroes;
  payload: Hero[];
}

export interface FetchSingleHeroAction {
  type: ActionTypes.fetchSingleHero;
  payload: Hero;
}

export interface HeroId {
  id: string;
}

const corsProxy = "https://cors-anywhere.herokuapp.com/";

export const fetchAllHeroes = () => {
  const url = "https://superheroapi.com/api/2987607971258652/search/batman";
  return async (dispatch: Dispatch) => {
    const res = await axios.get(corsProxy + url);
    dispatch<FetchAllHeroesAction>({
      type: ActionTypes.fetchAllHeroes,
      payload: res.data.results
    });
  };
};

export const fetchSingleHero = (heroId: HeroId) => {
  const url = `https://superheroapi.com/api/2987607971258652/${heroId}`;
  return async (dispatch: Dispatch) => {
    const res = await axios.get(corsProxy + url);
    console.log(res.data);
    dispatch<FetchSingleHeroAction>({
      type: ActionTypes.fetchSingleHero,
      payload: res.data
    });
  };
};
