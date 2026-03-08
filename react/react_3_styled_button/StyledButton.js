import React from 'react';

const StyledButton = () => {
  const isDisabled = false; // Change this to true to see the button disabled

  return (
    <div>
      <h1 style={{color: "red", backgroundColor: "lightblue", textAlign: "center"}}>My Styled Button</h1>
      
      <button className="my-button" style={{padding: "10px", backgroundColor: "lightblue", color: "red", border: "5px", borderRadius: "4px"}} disabled={isDisabled}>My button</button>
    </div>
  );
};

export default StyledButton;
