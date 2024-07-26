import { useContext } from "react";
import { userLogin } from "../api/auth-api";
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
