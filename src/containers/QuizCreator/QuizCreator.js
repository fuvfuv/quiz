import React, { Component } from 'react';
import classes from './QuizCreator.scss';

import Button from '../../components/UI/Button/Button.js';

export default class QuizCreator extends Component {
  handleSubmit = e => {
    e.preventDefault();
  };

  handleAddQuestion = () => {};
  handleCreateQuiz = () => {};

  render() {
    return (
      <div className={classes.QuizCreator}>
        <div>
          <h1>Создание теста</h1>

          <form onSubmit={this.handleSubmit}>
            <input type="text" />
            <hr />
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />

            <select></select>
            <Button type="primary" onClick={this.handleAddQuestion}>
              Добавить вопрос
            </Button>
            <Button type="success" onClick={this.handleCreateQuiz}>
              Создать тест
            </Button>
          </form>
        </div>
      </div>
    );
  }
}
