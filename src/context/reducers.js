import { at } from "lodash";

const initialState = {
  searchstring: "",
  currentStep: 1,
  contactInfo: {
    firstname: '',
    lastname: '',
    othernames: '',
    email: '',
    phone: '',
    undergrad: '',
    postgrad: '',
  },
};
const types = {
  SET_SEARCH_STRING: "SET_SEARCH_STRING",
  SET_CURRENT_STEP: "SET_CURRENT_STEP",
  SET_CONTACT_INFO: "SET_CONTACT_INFO",
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
    default:
      throw new Error("Unexpected action");
  }
};
export { initialState, types, reducer };
