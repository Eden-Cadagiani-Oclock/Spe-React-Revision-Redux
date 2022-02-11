export const UPDATE_FORM_USER_VALUE = 'UPDATE_FORM_USER_VALUE';
export const SUBMIT_FORM_USER = 'SUBMIT_FORM_USER';
export const SET_PASSWORD_ERROR = 'SET_PASSWORD_ERROR';

export function actionUpdateFormUserValue(inputName, value) {
  return { type: UPDATE_FORM_USER_VALUE, payload: { inputName, value } };
}

export function actionSetPasswordError(state) {
  return { type: SET_PASSWORD_ERROR, payload: state };
}

export function actionSubmitFormUser() {
  return { type: SUBMIT_FORM_USER };
}
