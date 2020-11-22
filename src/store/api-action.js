import {loadQuestions, requireAuthorization} from './action';
import {AuthorizationStatus} from '../const';

export const fetchQuestionList = () => {
  return (dispatch, _getState, api) => {
    api.get(`/questions`)
      .then(({data}) => dispatch(loadQuestions(data)));
  };
};

export const checkAuth = () => {
  return (dispatch, _getState, api) => {
    api.get(`login`)
      .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
      .catch(); // ?
  };
};

export const login = ({login: email, password}) => { // ?
  return (dispatch, _getState, api) => {
    api.post(`login`, {email, password})
      .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)));
  };
};
