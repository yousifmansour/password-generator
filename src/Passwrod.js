import React from 'react';
import PropTypes from 'prop-types';
import './Passwrod.css';

const Password = ({password}) => (
  <h1 className="password">{password}</h1>
);

Password.propTypes = {
  password: PropTypes.string.isRequired
}

export default Password;