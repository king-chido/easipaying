import "./footer.css";
import { useContext } from "react";
import { AppContext } from "../../context";
import axios from "axios";
//import { useNavigate } from "react-router-dom";

const Footer = () => {
  const { userToken } = useContext(AppContext);
  //const navigate = useNavigate();
  //   const [active, setActive] = useState(false);

  const handleLogout = async () => {
    console.log(userToken);
    // setUserToken("");
    const url = "https://bankapp-v1.onrender.com/api/v1/user/logout";
    // setActive(true);
    try {
      const response = await axios.post(url, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });
      console.log(response.data);
      //   setUserToken("");
    } catch (error) {
      console.log(error.message);
    }
  };

  //   useEffect(() => {
  //     const timer = setTimeout(() => {
  //       setActive(false);
  //     }, 2000);
  //     return () => clearTimeout(timer);
  //   }, [active]);

  //   console.log(active);
  return (
    <main className="footer-main">
      <section className="footer-top"></section>
      <section className="footer-middle" onClick={handleLogout}>
        Logout
      </section>
    </main>
  );
};

export default Footer;

// for
