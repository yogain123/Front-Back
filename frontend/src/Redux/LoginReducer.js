import _ from "lodash";
let initialState = {
  isLoggedIn: false
};
export default (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_STATUS_CHECK": {
      let newState = _.cloneDeep(state);
      if (action.payload.status) {
        newState.isLoggedIn = action.payload.status;
        return newState;
      }
    }
    default:
      return state;
  }
};
