import PropTypes from "prop-types";

const SalaryDetails = ({
  basicSalary,
  totalDeduction,
  totalEarningsEPFTrue,
  total,
}) => {
  const basicSalaryNumber = Number(basicSalary);
  const grossEarning = basicSalaryNumber + total;
  const employeeEarningsEPF = basicSalaryNumber - totalDeduction + totalEarningsEPFTrue;
  const employeeEPF = employeeEarningsEPF * 0.08;
  const grossEarningApit = grossEarning - totalDeduction;
  const calculateAPIT = (grossEarnings) => {
    let apit = 0;

    if (grossEarnings <= 100000) {
      apit = 0;
    } else if (grossEarnings <= 141667) {
      apit = grossEarnings * 0.06 - 6000;
    } else if (grossEarnings <= 183333) {
      apit = grossEarnings * 0.12 - 14500;
    } else if (grossEarnings <= 225000) {
      apit = grossEarnings * 0.18 - 25500;
    } else if (grossEarnings <= 266667) {
      apit = grossEarnings * 0.24 - 39000;
    } else if (grossEarnings <= 308333) {
      apit = grossEarnings * 0.3 - 55000;
    } else {
      apit = grossEarnings * 0.36 - 73500;
    }

    return apit;
  };
  const apit = calculateAPIT(grossEarningApit);
  const netSalary = grossEarningApit - employeeEPF - apit;
  const employerEPF = employeeEarningsEPF * 0.12;
  const employerETF = employeeEarningsEPF * 0.03;
  const ctc = grossEarningApit + employerEPF + employerETF;

  return (
    <div className="summary">
      <h4>Your Salary</h4>
      <table>
        <tbody>
          <tr>
            <th>Items</th>
            <th>Amount</th>
          </tr>
          <tr>
            <td>Basic Salary</td>
           <td> &nbsp;&nbsp;{basicSalaryNumber.toFixed(2)}</td>
          </tr>
          <tr>
            <td>Gross Earning</td>
           <td>&nbsp;&nbsp;{grossEarning.toFixed(2)}</td>
          </tr>
          <tr>
            <td>Gross Deduction</td>
            <td>- {totalDeduction.toFixed(2)}</td>
          </tr>
          <tr>
            <td>Employee EPF (8%)</td>
            <td>- {employeeEPF.toFixed(2)}</td>
          </tr>
          <tr>
            <td>APIT</td>
            <td>- {apit.toFixed(2)}</td>
          </tr>
          <tr className="border-box">
            <td >
              <strong>Net Salary (Take Home)</strong>
            </td>
            <td>
              <strong className="amount">{netSalary.toFixed(2)}</strong>
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <p className="summary-p">Contribution from the Employer</p>
            </td>
          </tr>
          <tr>
            <td>Employer EPF (12%)</td>
            <td>&nbsp;&nbsp;{employerEPF.toFixed(2)}</td>
          </tr>
          <tr>
            <td>Employer ETF (3%)</td>
            <td>&nbsp;&nbsp;{employerETF.toFixed(2)}</td>
          </tr>
          <tr>
            <td>
              <strong>CTC (Cost to Company)</strong>
            </td>
            <td>
              <strong className="amount">{ctc.toFixed(2)}</strong>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

SalaryDetails.propTypes = {
  basicSalary: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  totalDeduction: PropTypes.number.isRequired,
  totalEarningsEPFFalse: PropTypes.number.isRequired,
  totalEarningsEPFTrue: PropTypes.number.isRequired,
  deductions: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      amount: PropTypes.number,
    })
  ),
};

export default SalaryDetails;
