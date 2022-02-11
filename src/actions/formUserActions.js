export const UPDATE_FORM_USER_VALUE = 'UPDATE_FORM_USER_VALUE';
export const SUBMIT_FORM_USER = 'SUBMIT_FORM_USER';

export function actionUpdateFormUserValue(inputName, value) {
  return { type: UPDATE_FORM_USER_VALUE, payload: { inputName, value } };
}

export function actionSubmitFormUser() {
  return { type: SUBMIT_FORM_USER };
}
