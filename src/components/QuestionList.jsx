import React from 'react';

const QuestionList = ({ questions }) => (
  <div>
    <h2>Questions List</h2>
    <ul>
      {questions.map((question, index) => (
        <li key={index}>
          <p>Question: {question.text}</p>
          <p>Type: {question.type}</p>
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
          <p>Answer: {question.answer}</p>
        </li>
      ))}
    </ul>
  </div>
);

export default QuestionList;
