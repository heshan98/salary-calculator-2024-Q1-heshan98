import PropTypes from "prop-types";

const BasicSalary = ({ basicSalary, setBasicSalary }) => {
  return (
    <div>
      <h3>Basic Salary</h3>

      <input
        className="input-large"
        type="text"
        value={basicSalary}
        onChange={(e) => setBasicSalary(parseFloat(e.target.value))}
        placeholder="Enter Basic Salary"
      />
    </div>
  );
};

BasicSalary.propTypes = {
  basicSalary: PropTypes.number.isRequired,
  setBasicSalary: PropTypes.func.isRequired,
};

export default BasicSalary;
