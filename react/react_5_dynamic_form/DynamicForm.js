import React, { useState } from 'react';

const DynamicForm = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleReset = () => {
    // Reset the input value
    setInputValue("");
  };

  return (
    <div>
      <h1>Dynamic Form</h1>
      <input
        type="text"
        onChange={handleInputChange}
        placeholder="Type something..."
      />
      <button onClick={handleReset}>Reset</button>
      <div>
        <h2>Current Input:</h2>
        <p>{inputValue}</p>
      </div>
    </div>
  );
};

export default DynamicForm;
