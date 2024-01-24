import "./displayboard.css";
import hide from "../../images/hide-lit.png";
import { useContext } from "react";
import { AppContext } from "../../context";
const Displayboard = () => {
  const { userData, balance } = useContext(AppContext);

  return (
    <main className="displayboard-main">
      <article className="left-displayboard">
        <section className="left-displayboard-top">
          <div className="balance-word">Total Balance</div>
          <div className="balance-digit-div">
            <img src={hide} alt="hide" />
            <div className="balance-digit">{balance}</div>
          </div>
        </section>
        <section className="left-displayboard-bottom">
          <div className="acc-word">Acc No</div>
          <div className="acc-digit">{userData.accountNumber}</div>
        </section>
      </article>
    </main>
  );
};

export default Displayboard;
