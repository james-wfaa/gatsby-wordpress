import React, { createContext, useReducer } from "react";
import { reducer, initialState } from "./reducers";
import { useActions } from "./actions";

const AppContext = createContext(initialState);

const AppProvider = ({ children }) => {
  // Get state and dispatch from Reacts new API useReducer.
  const [state, dispatch] = useReducer(reducer, initialState);

  // Get actions from useActions and pass it to Context
  const actions = useActions(state, dispatch);
  // Log new state
  // useEffect(() => console.log({ newState: state }),[state]);
  // Render state, dispatch and special case actions

  return (
    <AppContext.Provider value={{ state, dispatch, actions }}>
      {children}
    </AppContext.Provider>
  );
};
export { AppContext, AppProvider };
