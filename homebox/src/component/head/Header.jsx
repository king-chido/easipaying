import "./Header.css";
import face from "../../images/faceles.png";
import notific from "../../images/notification.png";
import history from "../../images/historyi.png";
import arrowdown from "../../images/arrdowni.png";
import { useContext } from "react";
import { AppContext } from "../../context";
import axios from "axios";

const Header = () => {
  const { userData, userToken } = useContext(AppContext);

  // const handleHistory = async () => {
  //   const url = "https://bankapp-v1.onrender.com/api/v1/history";
  //   const response = await axios.get(url, {
  //     headers: {
  //       Authorization: `Bearer ${userToken}`,
  //     },
  //   });
  //   console.log(response.data);
  //   console.log(userData);
  // };

  const handleHistory = async () => {
    const url = "https://bankapp-v1.onrender.com/api/v1/user//get-all";
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    });
    console.log(response.data);
    console.log(userData);
  };
  return (
    <header>
      <section className="header-left">
        <img src={face} alt="face" />
        <article className="user-info">
          <div className="user-info-top-text">
            welcome to Easi<span className="pay-text">Pay</span>
          </div>
          <div className="user-info-down-text">{userData.firstName}</div>
        </article>
      </section>
      <section className="header-right">
        <article className="history-btn" onClick={handleHistory}>
          <img src={history} alt="his" />
          <div className="history-text">History</div>
          <img src={arrowdown} alt="arr" />
        </article>
        <img src={notific} alt="notific" />
      </section>
    </header>
  );
};

export default Header;
