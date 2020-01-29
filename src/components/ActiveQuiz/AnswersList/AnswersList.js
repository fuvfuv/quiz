import React, { Component } from 'react';
import './AnswersList.scss';

import AnswerItem from './AnswerItem/AnswerItem';

const AnswersList = props => {
  return (
    <ul className="AnswersList">
      {props.answers.map((answer, index) => {
        return <AnswerItem key={index} state={props.state ? props.state[answer.id] : null} answer={answer} onAnswerClick={props.onAnswerClick} />;
      })}
    </ul>
  );
};

export default AnswersList;
