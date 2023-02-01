import { createContext, useState } from "react";

const AuthContext = createContext({});

export function AppStateProvider({ children }) {
  const [user, setUser] = useState({
    accessToken: "",
    userRole: "",
    userDetails: {},
  });
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext