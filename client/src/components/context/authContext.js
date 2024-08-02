import { createContext } from "react";

export const AuthContext = createContext({
  userId: "",
  email: "",
  username: "",
  summary:'',
  logoUrl: "",
  accessToken: "",
  isAuthenticated: false,
    changeAuthState: (authState = {})=>null,
  }
);

