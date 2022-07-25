import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getDetails } from '../redux/CompanyDetails/CompanyDetail';

function Company({ name }) {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(getDetails(name));
  };
  return <NavLink to="/details"><button type="button" onClick={handleClick}>{name}</button></NavLink>;
}

export default Company;

Company.propTypes = {
  name: PropTypes.string.isRequired,
};
