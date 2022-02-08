import React from 'react';
import PropTypes from 'prop-types';
import CardLoggedUser from '../components/CardLoggedUser/CardLoggedUser';

const LoggedUser = (props) => {
  const pseudo = '';
  return (
    <CardLoggedUser
      pseudo={pseudo}
    />
  );
};

LoggedUser.propTypes = {
};
LoggedUser.defaultProps = {
};
export default React.memo(LoggedUser);
