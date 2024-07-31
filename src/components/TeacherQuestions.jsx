import React, { useState } from 'react';
import MCQ from './MCQ';
import FIB from './FIB';
import Numeric from './Numeric';
import QuestionList from './QuestionList';

const TeacherQuestions = () => {
  const [questionText, setQuestionText] = useState('');
  const [questionType, setQuestionType] = useState('MCQ');
  const [mcqOptions, setMcqOptions] = useState(['', '', '', '']);
  const [correctMcqOption, setCorrectMcqOption] = useState(0);
  const [fibAnswer, setFibAnswer] = useState('');
  const [numericAnswer, setNumericAnswer] = useState('');
  const [questions, setQuestions] = useState([]);

  const handleSave = () => {
    let answer;
    if (questionType === 'MCQ') {
      answer = mcqOptions[correctMcqOption];
    } else if (questionType === 'FIB') {
      answer = fibAnswer;
    } else if (questionType === 'Numeric') {
      answer = numericAnswer;
    }
    const newQuestion = {
      text: questionText,
      type: questionType,
      answer,
      options: questionType === 'MCQ' ? mcqOptions : null
    };
    setQuestions([...questions, newQuestion]);
    // Reset fields
    setQuestionText('');
    setMcqOptions(['', '', '', '']);
    setFibAnswer('');
    setNumericAnswer('');
  };

  return (
    <div>
      <h1>Teacher's Question Page</h1>
      <div>
        <label>Question Text:</label>
        <input 
          type="text" 
          value={questionText} 
          onChange={(e) => setQuestionText(e.target.value)} 
        />
      </div>
      <div>
        <label>Question Type:</label>
        <select 
          value={questionType} 
          onChange={(e) => setQuestionType(e.target.value)}
        >
          <option value="MCQ">MCQ</option>
          <option value="FIB">FIB</option>
          <option value="Numeric">Numeric</option>
        </select>
      </div>
      {questionType === 'MCQ' && (
        <MCQ 
          options={mcqOptions}
          setOptions={setMcqOptions}
          correctOption={correctMcqOption}
          setCorrectOption={setCorrectMcqOption}
        />
      )}
      {questionType === 'FIB' && (
        <FIB answer={fibAnswer} setAnswer={setFibAnswer} />
      )}
      {questionType === 'Numeric' && (
        <Numeric answer={numericAnswer} setAnswer={setNumericAnswer} />
      )}
      <button onClick={handleSave}>Save Question</button>
      <QuestionList questions={questions} />
    </div>
  );
};

export default TeacherQuestions;
