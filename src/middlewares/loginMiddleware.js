import { SUBMIT_FORM_USER } from 'src/actions/formUserActions';
import { actionSetPseudo } from 'src/actions/loggedUserActions';

const loginMiddleware = (store) => (next) => (action) => {
  if (action.type === SUBMIT_FORM_USER) {
    const state = store.getState();
    store.dispatch(actionSetPseudo(
      (state.formUser.firstName[0] + state.formUser.lastName).toLowerCase(),
    ));
    return;
  }

  next(action);
};

export default loginMiddleware;
