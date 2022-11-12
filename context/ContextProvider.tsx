import React, { createContext, useReducer } from "react";

interface ContextProviderProp {
  children: any;
}

interface context {
  GlobalDetails: any;
}

import {
  initialState as globalDetailsInitialState,
  reducer as globalDetails,
} from "./reducers/globalDetails";

export const Context = createContext<context | null>(null);

const ContextProvider = Context.Provider;

const ContextProviderWrapper: React.FunctionComponent<ContextProviderProp> = ({
  children,
}) => {
  const [globalDetailsData, globalDetailsDispatch] = useReducer(
    globalDetails,
    globalDetailsInitialState
  );

  const store: any = {
    GlobalDetails: {
      state: globalDetailsData,
      dispatch: globalDetailsDispatch,
    },
  };
  return <ContextProvider value={store}>{children}</ContextProvider>;
};

export default ContextProviderWrapper;
