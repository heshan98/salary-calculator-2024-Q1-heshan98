import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import clearIcon from "../assets/clear.png"; 
import addIcon from "../assets/Vector.png"

const Earnings = ({
  setTotalEarnings,
  setTotalEarningsEPFTrue,
  setTotalEarningsEPFFalse,
}) => {
  const [earnings, setEarnings] = useState([
    { title: "", amount: "", epf: false },
  ]);

  useEffect(() => {
    const totalTrue = earnings.reduce((sum, earning) => {
      if (earning.epf) {
        return sum + parseFloat(earning.amount || 0);
      } else {
        return sum;
      }
    }, 0);
    setTotalEarningsEPFTrue(totalTrue);

    const totalFalse = earnings.reduce((sum, earning) => {
      if (!earning.epf) {
        return sum + parseFloat(earning.amount || 0);
      } else {
        return sum;
      }
    }, 0);
    setTotalEarningsEPFFalse(totalFalse);

    const totalAll = earnings.reduce(
      (sum, earning) => sum + parseFloat(earning.amount || 0),
      0
    );
    setTotalEarnings(totalAll);
  }, [
    earnings,
    setTotalEarnings,
    setTotalEarningsEPFTrue,
    setTotalEarningsEPFFalse,
  ]);

  const removeEarning = (index) => {
    const newEarnings = earnings.filter((_, i) => i !== index);
    setEarnings(newEarnings);
  };

  const updateEarning = (index, field, value) => {
    const newEarnings = earnings.map((earning, i) =>
      i === index ? { ...earning, [field]: value } : earning
    );
    setEarnings(newEarnings);
  };

  const addNewEarningField = () => {
    setEarnings([...earnings, { title: "", amount: "", epf: false }]);
  };

  return (
    <div className="section">
      <h3>Earnings</h3>
      <p>Allowance, Fixed Allowance, Bonus and etc.</p>
      {earnings.length === 0 ? (
        <p></p>
      ) : (
        earnings.map((earning, index) => (
          <div key={index} className="earning-item">
            <input
              className="input-medium"
              type="text"
              name="title"
              placeholder="Pay Details (Title)"
              value={earning.title}
              onChange={(e) => updateEarning(index, "title", e.target.value)}
            />
            <input
              className="input-small"
              type="text"
              name="amount"
              placeholder="Amount"
              value={earning.amount}
              onChange={(e) => updateEarning(index, "amount", e.target.value)}
            />
            <div
              className="remove-icon-container"
              onClick={() => removeEarning(index)}
            >
              <img src={clearIcon} className="remove-icon" alt="Remove" />
            </div>
            <input
              type="checkbox"
              name="epf"
              checked={earning.epf}
              onChange={(e) => updateEarning(index, "epf", e.target.checked)}
            />{" "}
            EPF/ETF
          </div>
        ))
      )}
      <a
        href="#"
        className="add-link"
        onClick={(e) => {
          e.preventDefault();
          addNewEarningField();
        }}
      >
        <img src={addIcon}  /> Add
        New Allowance
      </a>
    </div>
  );
};

Earnings.propTypes = {
  setTotalEarnings: PropTypes.func.isRequired,
  setTotalEarningsEPFTrue: PropTypes.func.isRequired,
  setTotalEarningsEPFFalse: PropTypes.func.isRequired,
};

export default Earnings;
