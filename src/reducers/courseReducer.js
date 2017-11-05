import * as Types from '../action/actionTypes';

export default function courseReducer(state = [], action) {
  switch (action.type) {
    case Types.CREATE_COURSE:
      return[...state,
        Object.assign({}, action.course)
      ];
    default:
      return state;
  }
}
