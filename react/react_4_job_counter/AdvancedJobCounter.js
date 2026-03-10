import React from 'react';
import {useState} from 'react';

const AdvancedJobCounter = () => {
  const [jobCount, setJobCount] = useState(0);

  const handleAddJob = () => {
    // Add job logic
    setJobCount(jobCount+1);
  };

  const handleRemoveJob = () => {
    // Remove job logic
    setJobCount(jobCount-1);
  };

  const handleResetJobs = () => {
    // Reset jobs logic
    setJobCount(0);
  };

  return (
    <div>
      <h1>Advanced Job Counter</h1>
      {/* Display current job count */}
      <p>Current Jobs: {jobCount}</p>
      
      <button onClick={handleAddJob}>Add Job</button>
      <button onClick={handleRemoveJob}>Remove Job</button>
      <button onClick={handleResetJobs}>Reset Jobs</button>
    </div>
  );
};

export default AdvancedJobCounter;
