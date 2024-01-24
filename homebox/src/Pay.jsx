import "./pay.css";
import Sidebar from "./component/sidebar/Sidebar";
import Mainpage from "./component/mainpage/Mainpage";

const Pay = () => {
  return (
    <main className="main-pay">
      <section className="left-section">
        <Sidebar />
      </section>
      <section className="right-section">
        <Mainpage />
      </section>
    </main>
  );
};

export default Pay;
