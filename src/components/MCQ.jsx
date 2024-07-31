import React from 'react';


const MCQ = ({ options, setOptions, correctOption, setCorrectOption }) => {
  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  return (
    <div className='mcq-options'>
      <h3>MCQ Options</h3>
      {options.map((option, index) => (
        <div className='option' key={index}>
          <label>Option {index + 1}:</label>
          <input 
            type="text" 
            value={option} 
            onChange={(e) => handleOptionChange(index, e.target.value)} 
          />
          <input 
            type="radio" 
            name="correctOption" 
            checked={correctOption === index} 
            onChange={() => setCorrectOption(index)} 
          /> Correct
        </div>
      ))}
    </div>
  );
};

export default MCQ;
