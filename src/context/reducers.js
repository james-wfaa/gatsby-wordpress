const initialState = {
  searchstring: "",
};
const types = {
  SET_SEARCH_STRING: "SET_SEARCH_STRING",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_SEARCH_STRING:
      return {
        ...state,
        searchstring: action.payload,
      };
    default:
      throw new Error("Unexpected action");
  }
};
export { initialState, types, reducer };
