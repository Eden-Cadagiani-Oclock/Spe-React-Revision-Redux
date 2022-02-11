import { UPDATE_FORM_USER_VALUE } from 'src/actions/formUserActions';

export const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  repeatPassword: '',
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case UPDATE_FORM_USER_VALUE:
      return {
        ...state,
        [action.payload.inputName]: action.payload.value,
      };
    default:
      return state;
  }
}

export default reducer;
