import React from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import classnames from 'classnames';

const CardLoggedUser = ({ className, pseudo, ...rest }) => (
  <Card
    className={classnames('cardloggeduser', className)}
    {...rest}
  >
    <CardContent>
      <Typography variant="h6" component="div">
        Votre pseudo est: {pseudo}
      </Typography>
    </CardContent>
  </Card>
);

CardLoggedUser.propTypes = {
  className: PropTypes.string,
  pseudo: PropTypes.string.isRequired,
};
CardLoggedUser.defaultProps = {
  className: '',
};
export default React.memo(CardLoggedUser);
