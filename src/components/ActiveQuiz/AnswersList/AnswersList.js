import React, { Component } from 'react';
import classes from './AnswersList.scss';

import AnswerItem from './AnswerItem/AnswerItem';

const AnswersList = props => {
  return (
    <ul className={classes.AnswersList}>
      {props.answers.map((answer, index) => {
        return (
          <AnswerItem
            key={index}
            state={props.state ? props.state[answer.id] : null}
            answer={answer}
            onAnswerClick={props.onAnswerClick}
          />
        );
      })}
    </ul>
  );
};

export default AnswersList;
