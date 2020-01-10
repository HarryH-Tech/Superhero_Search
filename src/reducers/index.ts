import { combineReducers } from "redux";
import { heroesReducer } from "./reducer";
import { Hero } from "../actions";

export interface StoreState {
  heroes: Hero[];
}

export const reducers = combineReducers<StoreState>({
  heroes: heroesReducer
});
