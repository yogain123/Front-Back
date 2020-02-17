import axios from "axios";
//import history from "../History";
export function LoginAction(email, password) {
  return async function(dispatch) {
    let reqData = { email, password };
    let res = await axios.post("http://localhost:3009/login", reqData);
    dispatch({
      type: "LOGIN_STATUS_CHECK",
      payload: res.data
    });
  };
}
