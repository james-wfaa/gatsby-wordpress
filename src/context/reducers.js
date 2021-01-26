import { at } from "lodash";

const initialState = {
  searchstring: "",
  currentStep: 1,
  numberOfSteps: [1, 2],
  contactInfo: {
    firstname: '',
    lastname: '',
    othernames: '',
    email: '',
    phone: '',
    undergrad: '',
    postgrad: '',
  },
  addressStep: false,
  phoneStep: false,
  employmentStep: false,
  identityStep: false,
  lifeEventStep: false,
};
const types = {
  SET_SEARCH_STRING: "SET_SEARCH_STRING",
  SET_CURRENT_STEP: "SET_CURRENT_STEP",
  SET_NUMBER_OF_STEPS_ADD: "SET_NUMBER_OF_STEPS_ADD",
  SET_NUMBER_OF_STEPS_DELETE: "SET_NUMBER_OF_STEPS_DELETE",
  SET_CONTACT_INFO: "SET_CONTACT_INFO",
  SET_ADDRESS_STEP: "SET_ADDRESS_STEP",
  SET_PHONE_STEP: "SET_PHONE_STEP",
  SET_EMPLOYMENT_STEP: "SET_EMPLOYMENT_STEP",
  SET_IDENTITY_STEP: "SET_IDENTITY_STEP",
  SET_LIFE_EVENT_STEP: "SET_LIFE_EVENT_STEP",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_SEARCH_STRING:
      return {
        ...state,
        searchstring: action.payload,
      };
    case types.SET_CURRENT_STEP:
      return {
        ...state,
        currentStep: state.currentStep + action.payload,
      };
    case types.SET_NUMBER_OF_STEPS_ADD:
      console.log(action.payload)
      return {
        ...state,
        numberOfSteps: [...state.numberOfSteps, action.payload]
      };
    case types.SET_NUMBER_OF_STEPS_DELETE:
      console.log(action.payload)
      return {
        ...state,
        numberOfSteps: [...state.numberOfSteps.filter(step => step !== action.payload)]
      };
    case types.SET_CONTACT_INFO:
      return {
        ...state,
        contactInfo: {
          firstname: action.payload.firstname ? action.payload.firstname : '',
          lastname: action.payload.lastname ? action.payload.lastname : '',
          othernames: action.payload.othernames ? action.payload.othernames : '',
          email: action.payload.email ? action.payload.email : '',
          phone: action.payload.phone ? action.payload.phone : '',
          undergrad: action.payload.undergrad ? action.payload.undergrad : '',
          postgrad: action.payload.postgrad ? action.payload.postgrad : '',
        },
      };
    case types.SET_ADDRESS_STEP:
      return {
        ...state,
        addressStep: action.payload,
      };
    case types.SET_PHONE_STEP:
      return {
        ...state,
        phoneStep: action.payload,
      };
    case types.SET_EMPLOYMENT_STEP:
      return {
        ...state,
        employmentStep: action.payload,
      };
    case types.SET_IDENTITY_STEP:
      return {
        ...state,
        identityStep: action.payload,
      };
    case types.SET_LIFE_EVENT_STEP:
      return {
        ...state,
        lifeEventStep: action.payload,
      };
    default:
      throw new Error("Unexpected action");
  }
};
export { initialState, types, reducer };
