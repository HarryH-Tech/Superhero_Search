import axios from "axios";
import { Dispatch } from "redux";
import { ActionTypes } from "./types";

export interface Hero {
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

// export interface SearchHeroAction {
//   type: ActionTypes.searchHero;
//   payload: Hero;
// }

export const fetchAllHeroes = () => {
  const corsProxy = "https://cors-anywhere.herokuapp.com/";
  const url = "https://superheroapi.com/api/2987607971258652/search/batman";

  return async (dispatch: Dispatch) => {
    const res = await axios.get(corsProxy + url);
    dispatch<FetchAllHeroesAction>({
      type: ActionTypes.fetchAllHeroes,
      payload: res.data.results
    });
  };
};

// export const searchHero = () => {
//   const name = "batman";
//   const url = `https://superheroapi.com/api/2987607971258652/search/${name}`;
//   return async (dispatch: Dispatch) => {
//     const res = await axios.get<Hero>(url);
//     console.log(res);
//     dispatch<SearchHeroAction>({
//       type: ActionTypes.searchHero,
//       payload: res.data
//     });
//   };
// };
