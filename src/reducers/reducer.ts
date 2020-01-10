import { Hero, Action, ActionTypes } from "../actions";

export const heroesReducer = (state: Hero[] = [], action: Action) => {
  switch (action.type) {
    case ActionTypes.fetchAllHeroes:
      return action.payload;

    // case ActionTypes.searchHero:
    //   return action.payload;

    default:
      return state;
  }
};
