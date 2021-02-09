const initialState = {
  searchstring: "",
  membershipGraduate: null,
  membershipAge: null,
  membershipType: null
};
const types = {
  SET_SEARCH_STRING: "SET_SEARCH_STRING",
  SET_MEMBERSHIP_GRADUATE: "SET_MEMBERSHIP_GRADUATE",
  SET_MEMBERSHIP_AGE: "SET_MEMBERSHIP_AGE",
  SET_MEMBERSHIP_TYPE: "SET_MEMBERSHIP_TYPE"
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_SEARCH_STRING:
      return {
        ...state,
        searchstring: action.payload,
      };
    case types.SET_MEMBERSHIP_GRADUATE:
      return {
        ...state,
        membershipGraduate: action.payload,
      };
    case types.SET_MEMBERSHIP_AGE:
      return {
        ...state,
        membershipAge: action.payload,
      };
    case types.SET_MEMBERSHIP_TYPE:
      return {
        ...state,
        membershipType: action.payload,
      };
    default:
      throw new Error("Unexpected action");
  }
};
export { initialState, types, reducer };
