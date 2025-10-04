
import React ,{createContext, useState} from "react";
import './../styles/App.css';   
import Auth from "./Auth";
export const AuthContext = createContext();   




const App = () => {
  const [authStatus, setAuthStatus] = useState(false);
  return (
    <>
    <AuthContext.Provider value={{ authStatus, setAuthStatus }}>
    <div>
    <Auth />
    </div>
    </AuthContext.Provider>
    </>
  )
}

export default App
