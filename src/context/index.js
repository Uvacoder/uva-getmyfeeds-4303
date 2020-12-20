import { createContext, useReducer, useContext } from "react";

const dispatchContext = createContext();
const storeContext = createContext();

export const StoreProvider = ({ children, reducer, initialState = {} }) => {
  //Reason for making two separate providers for dispatch and stores, is to avoid re-rendering of the whole chain
  //when a dispatch is called.
  //Also helps that singular values can be called in the components
  const [store, dispatch] = useReducer(reducer, initialState);
  return (
    <dispatchContext.Provider value={dispatch}>
      <storeContext.Provider value={store}>{children}</storeContext.Provider>
    </dispatchContext.Provider>
  );
};

//The Hooks that connects the reducers/states in the nodes
export function useStore() {
  return useContext(storeContext);
}

export function useDispatch() {
  return useContext(dispatchContext);
}
