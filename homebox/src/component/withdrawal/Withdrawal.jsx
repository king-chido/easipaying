import { useRef, useContext } from "react";
import axios from "axios";
import { AppContext } from "../../context";

import "./withdrawal.css";

const Withdrawal = () => {
  const amountRef = useRef();
  const pinRef = useRef();
  const { setBalance, userToken } = useContext(AppContext);

  // console.log(amountRef.current);

  const handleSubmit = async (e) => {
    const url = "https://bankapp-v1.onrender.com/api/v1/withdraw";

    e.preventDefault();
    const require = {
      amount: parseFloat(amountRef.current.value),
      pin: parseFloat(pinRef.current.value),
    };
    try {
      const response = await axios.post(url, require, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });
      // console.log(response.data);
      setBalance(response.data.data.balance);
      amountRef.current.value = "";
      pinRef.current.value = "";
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="depositMAinCOntainer">
      <div className="DepositContainer">
        <form className="DpositBtn" onSubmit={handleSubmit}>
          <input
            type="number"
            placeholder="Enter Withdrawal Amount"
            ref={amountRef}
          />
          <input type="number" placeholder="Enter Pin" ref={pinRef} />
          <button type="submit">Withdraw</button>
        </form>
      </div>
    </div>
  );
};

export default Withdrawal;
