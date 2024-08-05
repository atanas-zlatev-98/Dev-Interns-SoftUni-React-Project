import { useContext } from "react";
import { userLogin, userLogout, userRegister } from "../api/auth-api";
import { AuthContext } from "../context/authContext";

export const useLogin = () => {
  const { changeAuthState } = useContext(AuthContext);

  const loginHandler = async (email, password) => {
    const { password: _, ...authData } = await userLogin(email, password);

    changeAuthState(authData);

    return authData;
  };

  return loginHandler;
};

export const useRegister = () => {
  const { changeAuthState } = useContext(AuthContext);

  const registerHandler = async (
    username,
    email,
    password,
    summary,
    logoUrl
  ) => {
    const { password: _, ...authData } = await userRegister(
      username,
      email,
      password,
      summary,
      logoUrl
    );

    changeAuthState(authData);

    return authData;
  };

  return registerHandler;
};

export const useLogout = () => {
  const { logout } = useContext(AuthContext);

  const logoutHandler = async () => {
    await userLogout();
    logout();
  };
  return logoutHandler;
};
