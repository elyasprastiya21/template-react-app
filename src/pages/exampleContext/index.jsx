import React, { useState } from "react";
import Profile from "../../components/profile";
import Login from "../../components/login";
import { LoginContext } from "../../Contexts/LoginContext";

function ExampleContext() {
  const [showProfile, setShowProfile] = useState(false);
  const [username, setUsername] = useState("");

  return (
    <>
      <div className="card text-center">
        <div className="card-body">
          <h4 className="card-title">Example Context</h4>
          <div>
            <LoginContext.Provider
              value={{ username, setUsername, setShowProfile }}
            >
              {showProfile ? <Profile /> : <Login />}
            </LoginContext.Provider>
          </div>
        </div>
      </div>
    </>
  );
}

export default ExampleContext;
