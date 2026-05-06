import React from 'react'
import { calculateInvestmentResults, formatter } from '../util/investments.js';

const OutputData = ({ inputValue }) => {
  if (inputValue.duration <= 0) {
    return <p>Please enter a duration greater than zero.</p>;
  }

  const resultData = calculateInvestmentResults(inputValue);

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {resultData.map((yearData) => {
          const totalInterest = yearData.investmentValue - inputValue.annualInvestment * yearData.year - inputValue.initialInvestment;
          const totalAmountInvested = yearData.investmentValue - totalInterest;
        
          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.investmentValue)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default OutputData;
