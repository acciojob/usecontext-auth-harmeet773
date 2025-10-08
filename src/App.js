
import React, { createContext, useState } from "react";

import Auth from "./components/Auth";
export const AuthContext = createContext();     


const App = () => {
  const [authStatus, setAuthStatus] = useState(false);
  return (
    <>
      <AuthContext.Provider value={{ authStatus, setAuthStatus }}>

        <Auth />

      </AuthContext.Provider>
    </>
  )
}

export default App
