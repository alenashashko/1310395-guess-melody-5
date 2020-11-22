import {ActionType} from '../../action';
import {extend} from '../../../utils';

const initialState = {
  mistakes: 0,
  step: 0
};

const gameProcess = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.INCREMENT_MISTAKES:
      const mistakesCount = state.mistakes + action.payload;

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

export {gameProcess};
