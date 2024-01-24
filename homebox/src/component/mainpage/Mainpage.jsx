import "./mainpage.css";
import Header from "../head/Header";
import Displayboard from "../displayboard/Displayboard";
import Contentboard from "../contentboard/Contentboard";

const Mainpage = () => {
  return (
    <main className="mainpage_main">
      <section className="top-mainpage-section">
        <Header />
      </section>
      <section className="body-mainpage-section">
        <Displayboard />
        <Contentboard />
      </section>
    </main>
  );
};

export default Mainpage;
