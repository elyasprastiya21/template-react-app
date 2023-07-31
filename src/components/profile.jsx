import React, { useContext } from "react";
import { LoginContext } from "../Contexts/LoginContext";

function Profile() {
  const { username } = useContext(LoginContext);

  return <div>Profile : {username}</div>;
}

export default Profile;
