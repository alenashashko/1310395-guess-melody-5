import {loadQuestions, requireAuthorization, redirectToRoute} from './action';
import {AuthorizationStatus, AppRoute, APIRoute} from '../const';

export const fetchQuestionList = () => {
  return (dispatch, _getState, api) => {
    api.get(APIRoute.QUESTIONS)
      .then(({data}) => dispatch(loadQuestions(data)));
  };
};

export const checkAuth = () => {
  return (dispatch, _getState, api) => {
    api.get(APIRoute.LOGIN)
      .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
      .catch(); // ?
  };
};

export const login = ({login: email, password}) => { // ?
  return (dispatch, _getState, api) => {
    api.post(APIRoute.LOGIN, {email, password})
      .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
      .then(() => dispatch(redirectToRoute(AppRoute.RESULT)));
  };
};
