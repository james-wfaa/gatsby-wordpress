import { types } from "./reducers";

export const useActions = (state, dispatch) => {
  function setSearchString(str) {
    // const currentTheme = state.theme
    dispatch({ type: types.SET_SEARCH_STRING, payload: str });
  }
  function setMembershipGraduate(bool) {
    dispatch({ type: types.SET_MEMBERSHIP_GRADUATE, payload: bool });
  }
  function setMembershipAge(bool) {
    dispatch({ type: types.SET_MEMBERSHIP_AGE, payload: bool });
  }
  function setMembershipType(str) {
    dispatch({ type: types.SET_MEMBERSHIP_TYPE, payload: str });
  }

  return {
    setSearchString,
    setMembershipGraduate,
    setMembershipAge,
    setMembershipType
  };
};
