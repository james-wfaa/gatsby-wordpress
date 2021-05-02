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

  function setCurrentStep(num) {
    dispatch({ type: types.SET_CURRENT_STEP, payload: num})
  }
  function setNumberOfStepsAdd(array) {
    dispatch({ type: types.SET_NUMBER_OF_STEPS_ADD, payload: array})
  }
  function setNumberOfStepsDelete(array) {
    dispatch({ type: types.SET_NUMBER_OF_STEPS_DELETE, payload: array})
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
  function setMailingAddressOnchange(array) {
    dispatch({ type: types.SET_MAILING_ADDRESS_ONCHANGE, payload: array})
  }
  function setPhoneInfoOnchange(array) {
    dispatch({ type: types.SET_PHONE_INFO_ONCHANGE, payload: array})
  }
  function setEmploymentInfo(obj) {
    dispatch({ type: types.SET_EMPLOYMENT_INFO, payload: obj})
  }
  function setEmploymentInfoOnchange(array) {
    dispatch({ type: types.SET_EMPLOYMENT_INFO_ONCHANGE, payload: array})
  }
  function setIdentityInfo(obj) {
    dispatch({ type: types.SET_IDENTITY_INFO, payload: obj})
  }
  function setIdentityInfoOnchange(array) {
    dispatch({ type: types.SET_IDENTITY_INFO_ONCHANGE, payload: array})
  }
  function setSpouseInfo(obj) {
    dispatch({ type: types.SET_SPOUSE_INFO, payload: obj})
  }
  function setSpouseInfoOnchange(obj) {
    dispatch({ type: types.SET_SPOUSE_INFO_ONCHANGE, payload: obj})
  }
  function setCommSignUpInfo(obj) {
    dispatch({ type: types.SET_COMM_SIGNUP_INFO, payload: obj})
  }
  function setCommunicationsSignUpOnchange(array) {
    dispatch({ type: types.SET_COMMUNICATIONS_SIGNUP_ONCHANGE, payload: array})
  }
  function setEntryId(str) {
    dispatch({ type: types.SET_ENTRY_ID, payload: str });
  }
  function setInitialState(obj) {
    dispatch({ type: types.SET_INITIAL_STATE, payload: obj });
  }
  
  
  

  return {
    setSearchString,
    setCurrentStep,
    setNumberOfStepsAdd,
    setNumberOfStepsDelete,
    setContactInfoOnchange,
    setAddressStep,
    setPhoneStep,
    setEmploymentStep,
    setIdentityStep,
    setLifeEventStep,
    setMailingAddressOnchange,
    setPhoneInfoOnchange,
    setEmploymentInfo,
    setEmploymentInfoOnchange,
    setIdentityInfo,
    setIdentityInfoOnchange,
    setSpouseInfo,
    setSpouseInfoOnchange,
    setCommSignUpInfo,
    setCommunicationsSignUpOnchange,
    setMembershipGraduate,
    setMembershipAge,
    setMembershipType,
    setEntryId,
    setInitialState
  };
};
