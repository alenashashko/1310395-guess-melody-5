import {ActionType} from './actions';
import {extend} from '../utils';
import questions from '../mocks/questions';
import {MAX_MISTAKE_COUNT} from '../const';

const initialState = {
  mistakes: 0,
  step: 0,
  questions
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.INCREMENT_MISTAKES:
      const mistakesCount = state.mistakes + action.payload; // ?

      if (mistakesCount >= MAX_MISTAKE_COUNT) {
        return extend({}, initialState);
      }

      return extend(state, {
        mistakes: mistakesCount
      });
    case ActionType.INCREMENT_STEP:
      let nextStep = state.step + action.payload;

      return extend(state, {
        step: nextStep
      });
    case ActionType.RESET_GAME:
      return extend({}, initialState);
    default:
      return state;
  }
};

export {reducer};
