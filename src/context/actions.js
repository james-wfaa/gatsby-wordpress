import { types } from "./reducers";

export const useActions = (state, dispatch) => {
  function setSearchString(str) {
    // const currentTheme = state.theme
    dispatch({ type: types.SET_SEARCH_STRING, payload: str });
  }

  function setCurrentStep(num) {
    dispatch({ type: types.SET_CURRENT_STEP, payload: num})
  }

  function setNumberOfStepsAdd(array) {
    dispatch({ type: types.SET_NUMBER_OF_STEPS_ADD, payload: array})
  }
  function setNumberOfStepsDelete(array) {
    dispatch({ type: types.SET_NUMBER_OF_STEPS_DELETE, payload: array})
  }

  function setContactInfo(obj) {
    dispatch({ type: types.SET_CONTACT_INFO, payload: obj})
  }
  
  function setContactInfoOnchange(array) {
    dispatch({ type: types.SET_CONTACT_INFO_ONCHANGE, payload: array})
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

  function setMailingAddress(obj) {
    dispatch({ type: types.SET_MAILING_ADDRESS, payload: obj})
  }

  function setPhoneInfo(obj) {
    dispatch({ type: types.SET_PHONE_INFO, payload: obj})
  }
  
  function setPhoneInfoOnchange(array) {
    dispatch({ type: types.SET_PHONE_INFO_ONCHANGE, payload: array})
  }
  
  function setEmploymentInfo(obj) {
    dispatch({ type: types.SET_EMPLOYMENT_INFO, payload: obj})
  }
  
  function setIdentityInfo(obj) {
    dispatch({ type: types.SET_IDENTITY_INFO, payload: obj})
  }
  
  function setSpouseInfo(obj) {
    dispatch({ type: types.SET_SPOUSE_INFO, payload: obj})
  }

  return {
    setSearchString,
    setCurrentStep,
    setNumberOfStepsAdd,
    setNumberOfStepsDelete,
    setContactInfo,
    setContactInfoOnchange,
    setAddressStep,
    setPhoneStep,
    setPhoneInfoOnchange,
    setEmploymentStep,
    setIdentityStep,
    setLifeEventStep,
    setMailingAddress,
    setPhoneInfo,
    setEmploymentInfo,
    setIdentityInfo,
    setSpouseInfo,
  };
};
