import React, { useEffect, useState } from "react";
import getToken from "./modules/getToken";

function App() {
  const [token, setToken] = useState("");

  useEffect(() => {
    getToken()
      .then((newToken) => {
        setToken(newToken);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [token]);

  return <div className="App">this is a test</div>;
}

export default App;
