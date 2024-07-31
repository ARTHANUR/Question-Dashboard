import React from 'react';


const Numeric = ({ answer, setAnswer }) => (
  <div>
    <h3>Numeric Answer</h3>
    <input 
      type="number" 
      value={answer} 
      onChange={(e) => setAnswer(e.target.value)} 
    />
  </div>
);

export default Numeric;
