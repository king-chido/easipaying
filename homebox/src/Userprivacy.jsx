import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "./context";

const Userprivacy = () => {
  const { userToken } = useContext(AppContext);

  return <>{!userToken ? <Navigate to="/" /> : <Outlet />}</>;
};

export default Userprivacy;
