import { createContext } from "react";
import { usePersistedState } from "../hooks/usePersistedState";

export const AuthContext = createContext({
  userId: "",
  email: "",
  username: "",
  summary: '',
  logoUrl: "",
  accessToken: "",
  isAuthenticated: false,
  changeAuthState: (authState = {}) => null,
  logout: () => null,
}
);

export const AuthProvider = (props) => {

  const [authState, setAuthState] = usePersistedState('auth', {});

  const changeAuthState = (state) => {
    localStorage.setItem('accessToken', state.accessToken);
    setAuthState(state);
  }

  const logout = () => {
    setAuthState(null)
  }

  const contextData = {
    userId: authState?._id,
    email: authState?.email,
    summary: authState?.summary,
    username: authState?.username,
    logoUrl: authState?.logoUrl,
    accessToken: authState?.accessToken,
    isAuthenticated: !!authState?.email,
    changeAuthState,
    logout,
  }



  return (
    <AuthContext.Provider value={contextData}>
      {props.children}
    </AuthContext.Provider>
  )
}
