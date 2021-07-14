import axios from "axios";
import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

function LogOutBtn() {
  const { getLoggedIn } = useContext(AuthContext);

  const history = useHistory();

  async function logOutHandler() {
    await axios.get("http://localhost:5000/user/logout");
    await getLoggedIn();
    history.push("/");
  }

  return <button onClick={logOutHandler}>Logout</button>;
}

export default LogOutBtn;