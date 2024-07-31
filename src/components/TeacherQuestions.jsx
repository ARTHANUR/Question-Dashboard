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
  const [error, setError] = useState('');

  const handleSave = () => {
    if(!questionText){
        setError("Please fill the question field");
        return;
    }
    let answer;
    if (questionType === 'MCQ') {
      answer = mcqOptions[correctMcqOption];
      if (!answer) {
        setError('Please provide a correct answer for MCQ.');
        return;
      }
    } else if (questionType === 'FIB') {
      answer = fibAnswer;
      if (!answer) {
        setError('Please provide an answer for Fill in the Blank.');
        return;
      }
    } else if (questionType === 'Numeric') {
      answer = numericAnswer;
      if (!answer) {
        setError('Please provide a numeric answer.');
        return;
      }
    }

    const newQuestion = {
      text: questionText,
      type: questionType,
      answer,
      options: questionType === 'MCQ' ? mcqOptions : null
    };
    setQuestions([...questions, newQuestion]);
    setQuestionText('');
    setMcqOptions(['', '', '', '']);
    setFibAnswer('');
    setNumericAnswer('');
    setError('');
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
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <QuestionList questions={questions} />
    </div>
  );
};

export default TeacherQuestions;
