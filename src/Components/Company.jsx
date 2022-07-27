import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getDetails } from '../redux/CompanyDetails/CompanyDetail';

function Company({ name, symbol }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = () => {
    dispatch(getDetails(symbol));
    navigate('/details', { replace: true });
  };
  return (
    <button type="button" className="companybutton" onClick={handleClick}>
      <div className="companycontent">
        <p>{symbol}</p>
        <h3>{name}</h3>
      </div>
    </button>
  );
}

export default Company;

Company.propTypes = {
  name: PropTypes.string,
  symbol: PropTypes.string,
};

Company.defaultProps = {
  name: '',
  symbol: '',

};
