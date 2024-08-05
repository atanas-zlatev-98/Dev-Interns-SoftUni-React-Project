import { Navigate } from "react-router-dom";
import { useLogout } from "../../hooks/useAuth";

const LogOut = () => {

  const logout = useLogout();

  logout();

  return <Navigate to='/' />
}

export default LogOut