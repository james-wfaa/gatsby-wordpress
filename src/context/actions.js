import { types } from "./reducers";

export const useActions = (state, dispatch) => {
  function setSearchString(str) {
    // const currentTheme = state.theme
    dispatch({ type: types.SET_SEARCH_STRING, payload: str });
  }

  function setCurrentStep(num) {
    dispatch({ type: types.SET_CURRENT_STEP, payload: num})
  }

  function setNumberOfSteps(num) {
    dispatch({ type: types.SET_NUMBER_OF_STEPS, payload: num})
  }

  function setContactInfo(obj) {
    dispatch({ type: types.SET_CONTACT_INFO, payload: obj})
  }

  function setAddressStep(bool) {
    dispatch({ type: types.SET_ADDRESS_STEP, payload: bool})
  }

  function setPhoneStep(bool) {
    dispatch({ type: types.SET_PHONE_STEP, payload: bool})
  }

  function setEmploymentStep(bool) {
    dispatch({ type: types.SET_EMPLOYMENT_STEP, payload: bool})
  }

  function setIdentityStep(bool) {
    dispatch({ type: types.SET_IDENTITY_STEP, payload: bool})
  }

  function setLifeEventStep(bool) {
    dispatch({ type: types.SET_LIFE_EVENT_STEP, payload: bool})
  }
  return {
    setSearchString,
    setCurrentStep,
    setNumberOfSteps,
    setContactInfo,
    setAddressStep,
    setPhoneStep,
    setEmploymentStep,
    setIdentityStep,
    setLifeEventStep
  };
};
