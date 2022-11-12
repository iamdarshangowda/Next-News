import * as interfaces from "../interfaces"

export const initialState: interfaces.globalDetails = {
    searchText: "",
  };

export const reducer = (state:any, action: interfaces.action) => {
    switch (action?.type) {
        case "search_text":
          return { ...state, stateList: action.value };
        default:
          return state;
      }
}