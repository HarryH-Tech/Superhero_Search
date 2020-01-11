import { FetchAllHeroesAction, FetchSingleHeroAction } from "./heroes";

export enum ActionTypes {
  fetchAllHeroes,
  fetchSingleHero,
  searchHero
}

export type Action = FetchAllHeroesAction | FetchSingleHeroAction;
