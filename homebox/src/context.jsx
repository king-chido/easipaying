import { createContext, useState } from "react";
import { data } from "./data";

export const AppContext = createContext();

// eslint-disable-next-line react/prop-types
export const AppProvider = ({ children }) => {
  const [datas, setDatas] = useState(data);
  const [active, setActive] = useState("");
  const [userToken, setUserToken] = useState("");
  const [userData, setUserData] = useState("");
  const [balance, setBalance] = useState();
  // const [toggle, setToggle] = useState(false);

  return (
    <AppContext.Provider
      value={{
        datas,
        setDatas,
        active,
        setActive,
        userToken,
        setUserToken,
        userData,
        setUserData,
        balance,
        setBalance,
        // toggle,
        // setToggle,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
