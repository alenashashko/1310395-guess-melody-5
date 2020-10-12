import React from 'react';
import ReactDom from 'react-dom';
import App from './components/app/app';
import questions from './mocks/questions';

const Settings = {
  ERRORS_COUNT: 3
};

ReactDom.render(
    <App errorsCount={Settings.ERRORS_COUNT} questions={questions} />,
    document.querySelector(`#root`)
);
