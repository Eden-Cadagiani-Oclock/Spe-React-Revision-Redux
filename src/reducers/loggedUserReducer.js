import { SET_PSEUDO } from 'src/actions/loggedUserActions';

export const initialState = {
  pseudo: '',
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_PSEUDO:
      return {
        ...state,
        pseudo: action.payload,
      };

    default:
      return state;
  }
}

export default reducer;
