import { FetchAllHeroesAction } from "./heroes";
//SearchHeroAction
export enum ActionTypes {
  fetchAllHeroes,
  searchHero
}

export type Action = FetchAllHeroesAction;
