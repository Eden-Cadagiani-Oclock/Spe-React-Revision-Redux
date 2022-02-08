import React from 'react';
import PropTypes from 'prop-types';
import FormUser from 'src/components/FormUser/FormUser';

const FormUserContainer = (props) => {
  const firstName = '';
  const lastName = '';
  const email = '';
  const password = '';
  const repeatPassword = '';

  const handleValueChange = (inputName, value) => {
    // todo
    console.log({ inputName, value });
  };

  const handleSubmit = () => {
    // todo
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
    />
  );
};

FormUserContainer.propTypes = {
};
FormUserContainer.defaultProps = {
};
export default React.memo(FormUserContainer);
