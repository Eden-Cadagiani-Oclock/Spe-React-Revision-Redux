import { UPDATE_FORM_USER_VALUE, SET_PASSWORD_ERROR } from 'src/actions/formUserActions';

export const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  repeatPassword: '',
  passwordError: false,
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case UPDATE_FORM_USER_VALUE:
      return {
        ...state,
        [action.payload.inputName]: action.payload.value,
      };
    case SET_PASSWORD_ERROR:
      return {
        ...state,
        passwordError: action.payload,
      };
    default:
      return state;
  }
}

export default reducer;
