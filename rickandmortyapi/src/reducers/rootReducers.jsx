import storage from "redux-persist/es/storage";
import { persistCombineReducers } from "redux-persist";
import loadingSpinner from "./loadingSpinnersReducers";
import selectedCharacter from "./selectedCharactersReducers";
import charactersList from "./charactersListReducers";
import charactersPageNumber from "./charactersPN";
import episodesLimit from "./episodesLimitReducers";
import scrollIndicator from "./scrollIndicatorReducers";

export default persistCombineReducers(
  {
    key: "root",
    storage,
    whitelist: []
  },
  {
    loadingSpinner,
    selectedCharacter,
    charactersList,
    charactersPageNumber,
    episodesLimit,
    scrollIndicator
  }
);
