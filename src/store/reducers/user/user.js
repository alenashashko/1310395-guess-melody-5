import {AuthorizationStatus} from '../../../const';
import {ActionType} from '../../action';
import {extend} from '../../../utils';

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return extend(state, {
        authorizationStatus: action.payload
      });
    default:
      return state;
  }
};

export {user};
