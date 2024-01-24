import "./sidebar.css";
import logo from "../../images/easilogo.png";
import Footer from "../footer/Footer";
import Board from "../board/Board";

const Sidebar = () => {
  return (
    <main className="sidebar-main">
      <section className="sidebar-top">
        <img src={logo} alt="logo" />
        <div className="logo-text">
          Easi<span className="pay-text">Pay</span>
        </div>
      </section>
      <section className="sidebar-middle">
        <Board />
      </section>
      <section className="sidebar-bottom">
        <Footer />
      </section>
    </main>
  );
};

export default Sidebar;
