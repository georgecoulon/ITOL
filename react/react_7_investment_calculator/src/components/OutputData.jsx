import React from 'react'
import { useState, useCallback } from 'react';
import { calculateInvestmentResults, formatter } from '../util/investments.js';
import { generatepdf } from '../util/generatereport.js';

const OutputData = ({ inputValue }) => {
  const handleGeneratePDF = useCallback(() => {
    const resdata = calculateInvestmentResults(inputValue);
    
    generatepdf({...inputValue, results:resdata});    
  }, [inputValue]);

  const resultData = calculateInvestmentResults(inputValue);

  if (inputValue.duration <= 0) {
    return <div className="error">Please enter a duration greater than zero.</div>;
  }

  if (inputValue.initialInvestment < 0) {
    return <div className="error">Please enter a non-negative Initial Investment.</div>;
  }

  if (inputValue.annualInvestment < 0) {
    return <div className="error">Please enter a non-negative Annual Investment.</div>;
  }

  if (inputValue.expectedReturn < 0) {
    return <div className="error">Please enter a non-negative Expected Return.</div>;
  }

  return (
      <div className="center">
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
      
        <button onClick={handleGeneratePDF}>Download PDF Report</button>
      </div>
  );
};

export default OutputData;
