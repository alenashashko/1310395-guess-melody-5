import {ActionType} from '../../action';
import {extend} from '../../../utils';

const initialState = {
  questions: []
};

const gameData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_QUESTIONS:
      return extend(state, {
        questions: action.payload
      });
    default:
      return state;
  }
};

export {gameData};
