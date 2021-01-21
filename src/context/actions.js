import { types } from "./reducers";

export const useActions = (state, dispatch) => {
  function setSearchString(str) {
    // const currentTheme = state.theme
    dispatch({ type: types.SET_SEARCH_STRING, payload: str });
  }

  function setCurrentStep(num) {
    dispatch({ type: types.SET_CURRENT_STEP, payload: num})
  }

  function setContactInfo(obj) {
    dispatch({ type: types.SET_CONTACT_INFO, payload: obj})
  }
  return {
    setSearchString,
    setCurrentStep,
    setContactInfo,
  };
};
