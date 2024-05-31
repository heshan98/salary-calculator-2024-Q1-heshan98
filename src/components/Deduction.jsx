import { useState } from "react";
import PropTypes from "prop-types";
import clearIcon from "../assets/clear.png";
import addIcon from "../assets/Vector.png"

const Deductions = ({ onTotalDeductionChange }) => {
  const [sections, setSections] = useState([{ title: "", amount: "" }]);

  const addSection = () => {
    setSections([...sections, { title: "", amount: "" }]);
  };

  const handleInputChange = (index, field, value) => {
    const updatedSections = [...sections];
    updatedSections[index][field] = value;
    setSections(updatedSections);
  };
  const removeSection = (index) => {
    const updatedSections = [...sections];
    updatedSections.splice(index, 1);
    setSections(updatedSections);
  };

  const totalDeduction = sections.reduce(
    (total, section) => total + parseFloat(section.amount || 0),
    0
  );
  onTotalDeductionChange(totalDeduction);

  return (
    <div className="section">
      <h3>Deductions</h3>
      <p>Salary Advances, Loan Deductions, and all</p>
      {sections.map((section, index) => (
        <div key={index} className="deduction-item">
          <input
            className="input-medium"
            type="text"
            placeholder="Deduction Details (Title)"
            value={section.title}
            onChange={(e) => handleInputChange(index, "title", e.target.value)}
          />
          <input
            className="input-small"
            type="text"
            placeholder="Amount"
            value={section.amount}
            onChange={(e) => handleInputChange(index, "amount", e.target.value)}
          />
          <div
            className="remove-icon-container"
            onClick={() => removeSection(index)}
          >
            <img src={clearIcon} className="remove-icon" alt="Remove" />
          </div>
        </div>
      ))}

      <a
        href="#"
        className="add-link"
        onClick={(e) => {
          e.preventDefault();
          addSection();
        }}
      >
        <img src={addIcon} /> Add New Allowance
      </a>
    </div>
  );
};

Deductions.propTypes = {
  onTotalDeductionChange: PropTypes.func.isRequired,
};

export default Deductions;
