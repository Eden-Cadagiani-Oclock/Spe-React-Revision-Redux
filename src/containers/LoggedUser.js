import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import CardLoggedUser from '../components/CardLoggedUser/CardLoggedUser';

const LoggedUser = (props) => {
  const pseudo = useSelector((state) => state.loggedUser.pseudo);
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
