import React from 'react';

const QuestionList = ({ questions }) => (
  <div className='list-container'>
    <h2>Questions List</h2>
    <ul>
      {questions.map((question, index) => (
        <li key={index}>
          <h3>{question.text}</h3>
          <p className='list-type'>Type: {question.type}</p>
          {question.type === 'MCQ' && (
            <div>
              <p>Options:</p>
              <ul>
                {question.options.map((option, i) => (
                  <li key={i}>{option}</li>
                ))}
              </ul>
            </div>
          )}
          <p className='list-ans'>Answer: {question.answer}</p>
        </li>
      ))}
    </ul>
  </div>
);

export default QuestionList;
