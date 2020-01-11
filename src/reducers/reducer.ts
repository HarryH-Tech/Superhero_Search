import { Hero, Action, ActionTypes } from "../actions";

export const heroesReducer = (state: Hero[] = [], action: Action) => {
  switch (action.type) {
    case ActionTypes.fetchAllHeroes:
      return action.payload;

    default:
      return state;
  }
};

export const heroReducer = (state: Hero, action: Action) => {
  switch (action.type) {
    case ActionTypes.fetchSingleHero:
      return action.payload;

    default:
      return state;
  }
};
