import "./account.css";
import { useContext } from "react";
import { AppContext } from "../../context";

const Account = () => {
  const { userData } = useContext(AppContext);
  return (
    <div className="AccountProfileHolder">
      <div className="AccountProfileMAin">
        <div className="accountProfileInfo">
          <nav>First Name</nav>
          <nav>Last Name</nav>
          <nav> EaziPay Account</nav>
          <nav> Email</nav>
          <nav>Gender</nav>
          {/* <nav> DOB</nav>
          <nav> Address</nav> */}
        </div>
        <div className="accountProfileInfo">
          <nav>{userData.firstName}</nav>
          <nav>{userData.lastName}</nav>
          <nav>{userData.accountNumber}</nav>
          <nav>{userData.email}</nav>
          <nav>{userData.sex}</nav>
          {/* <nav> 2nd April 2024</nav>
          <nav> 42 Muyibi Street</nav> */}
        </div>
      </div>
    </div>
  );
};

export default Account;
