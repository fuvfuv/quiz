import React, { Component } from 'react';
import './FinishedQuiz.scss';

const FinishedQuiz = props => {
  return (
    <div className="FinishedQuiz">
      <ul>
        {props.quiz.map((quizItem, index) => {
          const cls = ['fa', props.results[quizItem.id] === 'error' ? 'fa-times' : 'fa-check'];

          return (
            <li key={index}>
              <strong>{index + 1}</strong>. &nbsp;
              {question}
              <i className="" />
            </li>
          );
        })}

        {/* <li>
          <strong>1.</strong>
          How are you
          <i className="fa fa-times"></i>
        </li>
        <li>
          <strong>1.</strong>
          How are you
          <i className="fa fa-check"></i>
        </li> */}
      </ul>

      <p>Правильно 4 из 10</p>
      <div>
        <button>Повторить</button>
      </div>
    </div>
  );
};

export default FinishedQuiz;
