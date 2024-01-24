import "./betting.css";
import axios from "axios";
import { AppContext } from "../../context";
import { useRef, useContext } from "react";

const Betting = () => {
  const accountRef = useRef();
  const amountRef = useRef();
  const pinRef = useRef();
  const { userToken, setBalance } = useContext(AppContext);

  const handleSubmit = async (e) => {
    const url = "https://bankapp-v1.onrender.com/api/v1/utilis";
    e.preventDefault();
    const response = await axios.post(
      url,
      {
        meterNumber: accountRef.current.value,
        amount: parseFloat(amountRef.current.value),
        pin: parseFloat(pinRef.current.value),
      },
      {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      }
    );
    setBalance(response.data.data.balance);
    accountRef.current.value = "";
    amountRef.current.value = "";
    pinRef.current.value = "";
  };

  return (
    <div className="mainTransferContainer">
      <form onSubmit={handleSubmit} className="transferContainer">
        <input
          type="text"
          placeholder="Enter Utility number"
          ref={accountRef}
        />
        {/* <p> Ujah Collins</p> */}
        <input type="text" placeholder="Enter Amount" ref={amountRef} />
        <input type="text" placeholder="Enter Pin" ref={pinRef} />
        <button type="submit">Transfer</button>
      </form>
    </div>
  );
};

export default Betting;
