import { useContext } from "react";
import "./contentboard.css";
import { AppContext } from "../../context";
import Account from "../account/Account";
import Betting from "../betting/Betting";
import Dashboard from "../dashboard/Dashboard";
import Transfer from "../transfer/Transfer";
import Deposit from "../deposit/Deposit";
import Withdrawal from "../withdrawal/Withdrawal";

const Contentboard = () => {
  const { active } = useContext(AppContext);

  return (
    <main className="contentpage-main">
      {active === "Dashboard" ? (
        <Dashboard />
      ) : active === "Deposit" ? (
        <Deposit />
      ) : active === "Withdrawal" ? (
        <Withdrawal />
      ) : active === "Transfer" ? (
        <Transfer />
      ) : active === "Betting" ? (
        <Betting />
      ) : active === "Account" ? (
        <Account />
      ) : null}
    </main>
  );
};

export default Contentboard;
