import { SUBMIT_FORM_USER, actionSetPasswordError } from 'src/actions/formUserActions';
import { actionSetPseudo } from 'src/actions/loggedUserActions';

const loginMiddleware = (store) => (next) => (action) => {
  if (action.type === SUBMIT_FORM_USER) {
    const {
      formUser: {
        lastName, firstName, password, repeatPassword,
      },
    } = store.getState();

    if (password !== repeatPassword) {
      store.dispatch(
        actionSetPasswordError(true),
      );
      return;
    }

    store.dispatch(actionSetPseudo(
      (firstName[0] + lastName).toLowerCase(),
    ));
    store.dispatch(
      actionSetPasswordError(false),
    );
    return;
  }

  next(action);
};

export default loginMiddleware;
