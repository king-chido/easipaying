import "./dashboard.css";

const Dashboard = () => {
  return (
    <div className="TransactionDashboardHolder">
      <div className="MainHistory">
        <div className="rightDetails">
          <div className="titleHolder">
            <h2>Recent Transactions</h2>
          </div>
          <div className="transaction">
            <h3>User recieved </h3>
            <p> Deposit Transaction</p>
          </div>
        </div>
        <div className="leftDetails">
          <div className="titleHolder">
            <h2>Last 7 Days</h2>
          </div>
          <div className="transaction">
            <span>200,000.00</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
