import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import FormUser from 'src/components/FormUser/FormUser';
import { actionUpdateFormUserValue, actionSubmitFormUser } from 'src/actions/formUserActions';

const FormUserContainer = (props) => {
  const dispatch = useDispatch();
  const firstName = useSelector((state) => state.formUser.firstName);
  const lastName = useSelector((state) => state.formUser.lastName);
  const email = useSelector((state) => state.formUser.email);
  const password = useSelector((state) => state.formUser.password);
  const repeatPassword = useSelector((state) => state.formUser.repeatPassword);
  const passwordError = useSelector((state) => state.formUser.passwordError);

  const handleValueChange = (inputName, value) => {
    console.log({ inputName, value });
    dispatch(actionUpdateFormUserValue(inputName, value));
  };

  const handleSubmit = () => {
    dispatch(actionSubmitFormUser());
  };

  return (
    <FormUser
      firstName={firstName}
      lastName={lastName}
      email={email}
      password={password}
      repeatPassword={repeatPassword}
      onValueChange={handleValueChange}
      onSubmit={handleSubmit}
      passwordError={passwordError}
    />
  );
};

FormUserContainer.propTypes = {
};
FormUserContainer.defaultProps = {
};
export default React.memo(FormUserContainer);
