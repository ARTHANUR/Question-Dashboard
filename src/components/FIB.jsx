import React from 'react';

const FIB = ({ answer, setAnswer }) => (
  <div>
    <h3>Fill in the Blank Answer</h3>
    <input 
      type="text" 
      value={answer} 
      onChange={(e) => setAnswer(e.target.value)} 
    />
  </div>
);

export default FIB;
