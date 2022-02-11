import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Email from '@mui/icons-material/Email';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import './formUser.scss';

const FormUser = ({
  firstName,
  lastName,
  email,
  password,
  repeatPassword,
  passwordError,
  onValueChange,
  onSubmit,
  className,
  ...rest
}) => {
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [rpPasswordVisibility, setRpPasswordVisibility] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit();
  };

  return (
    <Card
      component="form"
      className={classnames('formuser', className)}
      onSubmit={handleSubmit}
      {...rest}
    >
      <CardContent>
        <Grid container spacing={2}>
          <Grid item md={6} xs={12}>
            <TextField
              fullWidth
              label="firstName"
              value={firstName}
              onChange={(event) => onValueChange('firstName', event.target.value)}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              fullWidth
              required
              label="lastName"
              value={lastName}
              onChange={(event) => onValueChange('lastName', event.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              required
              type="email"
              label="email"
              value={email}
              onChange={(event) => onValueChange('email', event.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              fullWidth
              required
              error={passwordError}
              type={passwordVisibility ? 'text' : 'password'}
              label="password"
              value={password}
              onChange={(event) => onValueChange('password', event.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setPasswordVisibility((x) => !x)}
                    >
                      {passwordVisibility ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              fullWidth
              required
              error={passwordError}
              type={rpPasswordVisibility ? 'text' : 'password'}
              label="repeat password"
              value={repeatPassword}
              onChange={(event) => onValueChange('repeatPassword', event.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setRpPasswordVisibility((x) => !x)}
                    >
                      {rpPasswordVisibility ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <Button
          type="submit"
          size="small"
        >
          Valider
        </Button>
      </CardActions>
    </Card>
  );
};

FormUser.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  repeatPassword: PropTypes.string.isRequired,
  onValueChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  className: PropTypes.string,
  passwordError: PropTypes.bool.isRequired,
};
FormUser.defaultProps = {
  className: '',
};
export default React.memo(FormUser);
