import React from 'react';

 const JobBoard = () => {
  const companyName = "TechCorp";
  const jobCount = 10; // You can change this value to test different scenarios
	
 const getJobMessage = () => {
    if(jobCount === 0) {
        return (
            <h1>No jobs to schedule today</h1>
        );
    }
    else {
        return (
            <h1>Jobs running today from bot: {jobCount}</h1>
        );
    }
  }

 return (
  <div>
   <h1>{companyName}</h1>
   <p>{getJobMessage()}</p>
  </div>
 );
}

export default JobBoard;
