import "./deposit.css";
import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../../context";
import axios from "axios";

const Deposit = () => {
  //   const inputRef = useRef();
  const [inputValue, setInputValue] = useState("");
  const { userToken, setBalance } = useContext(AppContext);

  const handleChange = (e) => {
    setInputValue(e.target.value);
    console.log(inputValue);
  };

  // const myData = inputRef.current;
  // console.log(userToken);

  const handleDeposit = async () => {
    const url = "https://bankapp-v1.onrender.com/api/v1/user/deposit";

    // console.log(typeof inputValue);
    let newInput = parseFloat(inputValue);
    // console.log(typeof newInput);

    try {
      const response = await axios.post(
        url,
        { amount: newInput },
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      );

      console.log(response.data.data.balance);
      setBalance(response.data.data.balance);
      setInputValue("");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="depositMAinCOntainer">
      <div className="DepositContainer">
        <div className="DpositBtn">
          <input
            type="number"
            placeholder="Enter Deposit Amount"
            value={inputValue}
            onChange={handleChange}
            // ref={inputRef}
          />
          <button onClick={handleDeposit}>Deposit</button>
        </div>
      </div>
    </div>
  );
};

export default Deposit;
