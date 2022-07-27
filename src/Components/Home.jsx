import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setExchange } from '../redux/Exchange/Exchange';
import NasdaqLogo from '../images/nasdaq.png';
import DowLogo from '../images/dow.png';
import './Home.css';

function CompanyListContainer() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = (event) => {
    const exchange = event.target.getAttribute('dataset');
    dispatch(setExchange(exchange));
    navigate('/allCompanies', { replace: true });
  };
  return (
    <>
      <h1 className="header">Welcome to Financial times</h1>
      <p className="message">Please Select an Exchange</p>
      <button type="button" onClick={handleClick} className="home-button">
        <img dataset="dowjones_" src={DowLogo} alt="dow logo" className="home-image" />
      </button>
      <button type="button" onClick={handleClick} className="home-button">
        <img dataset="nasdaq_" src={NasdaqLogo} alt="nasdaq logo" className="home-image" />
      </button>
    </>
  );
}

export default CompanyListContainer;
